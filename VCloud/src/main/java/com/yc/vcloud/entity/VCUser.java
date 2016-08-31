package com.yc.vcloud.entity;

public class VCUser {
	private int userid;
	private String uname;
	private String utel;
	private String upwd;
	private String gender;
	private String address;
	private int status;
	private String temp1;
	private String temp2;

	public VCUser() {
		
	}

	public VCUser(String utel, String upwd){
		this.utel = utel;
		this.upwd = upwd;
	}
	public VCUser( String uname, String utel, String upwd, String gender,String address){
		this.uname = uname;
		this.utel = utel;
		this.upwd = upwd;
		this.gender = gender;
		this.address=address;
	}
	public VCUser(int userid, String uname, String utel, String upwd, String gender, String address, int status,
			String temp1, String temp2) {
		this.userid = userid;
		this.uname = uname;
		this.utel = utel;
		this.upwd = upwd;
		this.gender = gender;
		this.address = address;
		this.status = status;
		this.temp1 = temp1;
		this.temp2 = temp2;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUtel() {
		return utel;
	}

	public void setUtel(String utel) {
		this.utel = utel;
	}

	public String getUpwd() {
		return upwd;
	}

	public void setUpwd(String upwd) {
		this.upwd = upwd;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
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
		return "VCUser [userid=" + userid + ", uname=" + uname + ", utel=" + utel + ", upwd=" + upwd + ", gender="
				+ gender + ", address=" + address + ", status=" + status + ", temp1=" + temp1 + ", temp2=" + temp2
				+ "]";
	}
}
