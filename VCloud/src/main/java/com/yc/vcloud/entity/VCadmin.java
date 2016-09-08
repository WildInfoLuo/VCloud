package com.yc.vcloud.entity;

public class VCadmin {

	private int aid;
	private String aname;
	private String atel;
	private String apwd;
	private String temp1;
	private String temp2;
	
	public VCadmin() {
	}

	public VCadmin(int aid, String aname, String atel, String apwd, String temp1, String temp2) {
		this.aid = aid;
		this.aname = aname;
		this.atel = atel;
		this.apwd = apwd;
		this.temp1 = temp1;
		this.temp2 = temp2;
	}

	public VCadmin(String atel, String apwd) {
		this.atel = atel;
		this.apwd = apwd;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getAtel() {
		return atel;
	}

	public void setAtel(String atel) {
		this.atel = atel;
	}

	public String getApwd() {
		return apwd;
	}

	public void setApwd(String apwd) {
		this.apwd = apwd;
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
		return "VCadmin [aid=" + aid + ", aname=" + aname + ", atel=" + atel + ", apwd=" + apwd + ", temp1=" + temp1
				+ ", temp2=" + temp2 + "]";
	}

}
