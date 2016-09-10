package com.yc.vcloud.entity;

public class VCUploadFile {
	private int ufid;
	private int userid;
	private String filepath;
	private int filesize;
	private String uploaddate;
	private String stoppoingpath;
	private String status;
	private int isdir;
	private String temp1;  //存文件类型
	private String temp2;  //存文件名称
	
	public VCUploadFile() {
	}

	public VCUploadFile(int userid, String filepath) {
		super();
		this.userid = userid;
		this.filepath = filepath;
	}

	public VCUploadFile(int userid, String filepath, String uploaddate) {
		super();
		this.userid = userid;
		this.filepath = filepath;
		this.uploaddate = uploaddate;
	}

	public VCUploadFile(int userid, String filepath, int filesize, String uploaddate,String temp1,String temp2) {
		this.userid = userid;
		this.filepath = filepath;
		this.filesize = filesize;
		this.uploaddate = uploaddate;
		this.temp1=temp1;
		this.temp2=temp2;
	}

	public int getUfid() {
		return ufid;
	}

	public void setUfid(int ufid) {
		this.ufid = ufid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getFilepath() {
		return filepath;
	}

	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}

	public int getFilesize() {
		return filesize;
	}

	public void setFilesize(int filesize) {
		this.filesize = filesize;
	}

	public String getUploaddate() {
		return uploaddate;
	}

	public void setUploaddate(String date) {
		this.uploaddate = date;
	}

	public String getStoppoingpath() {
		return stoppoingpath;
	}

	public void setStoppoingpath(String stoppoingpath) {
		this.stoppoingpath = stoppoingpath;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getIsdir() {
		return isdir;
	}

	public void setIsdir(int isdir) {
		this.isdir = isdir;
	}
	

	public String getTemp1() {
		return temp1;
	}

	public void setTemp1(String temp1) {
		this.temp1 = temp1;
	}
	

	public String getTemp2() {
		return temp2;
	}

	public void setTemp2(String temp2) {
		this.temp2 = temp2;
	}

	@Override
	public String toString() {
		return "\nVCUploadFile [ufid=" + ufid + ", userid=" + userid + ", filepath=" + filepath + ", filesize=" + filesize
				+ ", uploaddate=" + uploaddate + ", stoppoingpath=" + stoppoingpath + ", status=" + status + ", isdir="
				+ isdir + ", temp1=" + temp1 + ", temp2=" + temp2 + "]";
	}

	

}
