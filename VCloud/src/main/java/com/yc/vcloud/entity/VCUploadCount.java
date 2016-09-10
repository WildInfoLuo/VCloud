package com.yc.vcloud.entity;

public class VCUploadCount {
	private String uploaddate;
	private int count;
	public String getUploaddate() {
		return uploaddate;
	}
	public void setUploaddate(String uploaddate) {
		this.uploaddate = uploaddate;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
	public VCUploadCount() {
		super();
	}
	public VCUploadCount(String uploaddate, int count) {
		this.uploaddate = uploaddate;
		this.count = count;
	}
	@Override
	public String toString() {
		return "VCUploadCount [uploaddate=" + uploaddate + ", count=" + count + "]";
	}
	
}
