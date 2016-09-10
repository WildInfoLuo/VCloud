package com.yc.vcloud.entity;

public class VCUploadFile {
	private int ufid;
	private int userid;
	private String filepath;
	private String filesize;
	private String uploaddate;
	private String stoppoingpath;
	private String status;
	private int isdir;
	
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

	public String getFilesize() {
		return filesize;
	}

	public void setFilesize(String filesize) {
		this.filesize = filesize;
	}

	public String getDate() {
		return uploaddate;
	}

	public void setDate(String date) {
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

	@Override
	public String toString() {
		return "\nVCUploadFile [ufid=" + ufid + ", userid=" + userid + ", filepath=" + filepath + ", filesize=" + filesize
				+ ", uploaddate=" + uploaddate + ", stoppoingpath=" + stoppoingpath + ", status=" + status + ", isdir=" + isdir
				+ "]";
	}

}
