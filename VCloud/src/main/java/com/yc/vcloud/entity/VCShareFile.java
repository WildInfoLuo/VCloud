package com.yc.vcloud.entity;


public class VCShareFile {
	private int  shareid;
	private int userid;
	private String filepath;
	private String password;
	private String temp1;  //存分享时间
	private String temp2;
	public int getShareid() {
		return shareid;
	}
	public void setShareid(int shareid) {
		this.shareid = shareid;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	
	public VCShareFile() {
	}
	
	public VCShareFile(int shareid, int userid, String filepath, String password, String temp1, String temp2) {
		this.shareid = shareid;
		this.userid = userid;
		this.filepath = filepath;
		this.password = password;
		this.temp1 = temp1;
		this.temp2 = temp2;
	}
	
	public String toString() {
		return "VCShareFile [shareid=" + shareid + ", userid=" + userid + ", filepath=" + filepath + ", password="
				+ password + ", temp1=" + temp1 + ", temp2=" + temp2 + "]";
	}
	
}
