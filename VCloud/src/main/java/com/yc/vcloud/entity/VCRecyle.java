package com.yc.vcloud.entity;

public class VCRecyle {
	private int rid;
	private int userid;
	private String deletedate;
	private int lefttime;
	private String deletepath;
	private int temp2;

	public VCRecyle(int userid, String deletedate, String deletepath) {
		this.userid = userid;
		this.deletedate = deletedate;
		this.deletepath = deletepath;
	}

	public VCRecyle() {
	}

	public int getTemp2() {
		return temp2;
	}

	public void setTemp2(int temp2) {
		this.temp2 = temp2;
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getDeletedate() {
		return deletedate;
	}

	public void setDeletedate(String deletedate) {
		this.deletedate = deletedate;
	}

	public int getLefttime() {
		return lefttime;
	}

	public void setLefttime(int lefttime) {
		this.lefttime = lefttime;
	}

	public String getDeletepath() {
		return deletepath;
	}

	public void setDeletepath(String deletepath) {
		this.deletepath = deletepath;
	}

	@Override
	public String toString() {
		return "VCRecyle [rid=" + rid + ", userid=" + userid + ", deletedate=" + deletedate + ", lefttime=" + lefttime
				+ ", deletepath=" + deletepath + "]";
	}

}
