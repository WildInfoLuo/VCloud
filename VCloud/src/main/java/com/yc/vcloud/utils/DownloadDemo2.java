package com.yc.vcloud.utils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;


public class DownloadDemo2 {
	public static int i=0;
	public static void main(String[] args) {
		new DownloadDemo2().downloadFile("http://localhost:8080/VCloud/../sources/test1.txt","D:/",5);
	}

	/**
	 * 
	 * @param urlPath 下载地址
	 * @param dirPath 下载的文件保存路径
	 * @param threadCount 下载启动的线程数
	 */
	public void downloadFile(String urlPath,String dirPath,int threadCount){
		try {
			URL url = new URL(urlPath);
			long contentLength = getDownloadFileSize(url); //取到下载文件大小
			long threadSize = contentLength % threadCount == 0 ? contentLength / threadCount : (contentLength / threadCount + 1); //每个线程下载的大小
			
			String filePath=getFilePath(urlPath,dirPath);//下载文件
			
			if(contentLength!=0){ //如果文件的大小为0，表示取到文件失败
				startDownload(url, threadCount, threadSize, filePath);
			}else{
				System.out.println("取到下载文件失败!!");
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 
	 * @param urlPath 下载的地址
	 * @param dirPath 下载的文件保存路径
	 * @return 下载文件的路径
	 */
	private String getFilePath(String urlPath,String dirPath){
		String filename=urlPath.substring(urlPath.lastIndexOf("/"));
		String name=filename.substring(0, filename.lastIndexOf("."));
		File file=new File(dirPath+filename);
		if(file.exists()){ 
			int i=1;
			while(true){
				filename=name+"("+i+")"+filename.substring(filename.lastIndexOf("."));
				File file1=new File(dirPath+filename);
				if(!file1.exists()){
					 break;
				}
				i++;
			}
			System.out.println(filename);
		}
		return dirPath+filename;
	}
	/**
	 * 
	 * @param url 下载的地址
	 * @param theadCount 下载启动的线程数
	 * @param threadSize 下载文件的大小
	 * @param filePath 下载文件的路径
	 */
	private void startDownload(URL url,int threadCount,long threadSize,String filePath){
		for(int i=1;i<=threadCount;i++){
			long beginLoc = (i-1)*threadSize +(i==1 ? 0:1); //下载开始位置
			long endLoc = i*threadSize; //下载结束位置
			new Thread(new DownloadTask(i, beginLoc, endLoc, filePath, url)).start();
		}
	}
	/**
	 * 
	 * @param url 下载的地址
	 * @return 下载文件的大小
	 */
	private long getDownloadFileSize(URL url){
		try {
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("HEAD");
			con.connect();
			return con.getContentLength(); //取到下载文件的大小
		} catch (ProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return 0;
	}
	/**
	 * 下载处理类
	 * @author zcq
	 *
	 */
	public class DownloadTask implements Runnable{
		private int threadId; //线程编号
		private long beginLocation; //开始的字节数的位置
		private long endLocation; //结束的字节数的位置
		private long downloadContentLength; //当前线程的长度
		private String filePath; //下载文件的保存路径
		private URL url;
		
		public DownloadTask(int threadId,long beginLocation,long endLocation,String filePath,URL url) {
			this.threadId=threadId;
			this.beginLocation=beginLocation;
			this.endLocation=endLocation;
			this.filePath=filePath;
			this.url=url;
		}
		@Override
		public void run() {
			System.out.println("启动了第"+threadId+"下载线程");
			try {
				RandomAccessFile raf = new RandomAccessFile(filePath, "rwd");
				raf.seek(beginLocation);//在文件的指定字节位置开始插入数据
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				con.setRequestProperty("Range","bytes="+beginLocation+"-"+endLocation);//设置下载文件位置
				//获得下载数据流
				InputStream in = con.getInputStream();
				byte[] bs = new byte[1024*1024];
				int len=0;
				while((len = in.read(bs))!=-1){
					downloadContentLength+=len;
					raf.write(bs, 0, len);
//					result = downloadLength*1.0/contentLength;
//					NumberFormat nf = NumberFormat.getPercentInstance();
//					nf.setMinimumFractionDigits(2);
//					System.out.println("下载了"+nf.format(result)+downloadLength);
				}
				System.out.println("第"+threadId+"下载线程完成了,下载从"+beginLocation+"~"+endLocation);
				i++;
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	}
}
