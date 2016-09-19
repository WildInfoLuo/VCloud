--新建一个用户____VCloud

--用户表
drop table VCUser
create table VCUser(
	userid int primary key,
	uname varchar2(20) not null,
	utel varchar2(20) not null unique, 
	upwd varchar2(50),
	address varchar2(100),		--登录地址
	status int,					--状态(是否被锁定)
	temp1 varchar2(200),		--备用字段
	temp2 varchar2(200)			--备用字段  
);

insert into vcuser values(seq_userid.nextval,'V1','15197462069','a','192.168.14.254',0,'','');
create sequence seq_userid start with 10001;
alter table VCUser modify address varchar2(100);--增加字段的大小

select * from VCUser;
select * from VCUser where utel='15197462069' and upwd='a';

--管理员表
create table VCAdmin(
       aid int primary key,
       aname varchar2(20),
       atel varchar2(20) not null unique, 
       apwd varchar2(20),
       temp1 varchar2(200),			--备用字段
       temp2 varchar2(200)			--备用字段  
);
create sequence seq_aid start with 20001;
insert into VCAdmin values(seq_aid.nextval,'V1','15197462069','a','','');
select * from Vcadmin where atel='15197462069' or aname='15197462069' and apwd='a'
--文件类型表
create table VCFileType(
	ftid int primary key,
	ftname varchar2(10),
	temp1 varchar2(200),			--备用字段
    temp2 varchar2(200)				--备用字段 
);
create sequence seq_ftid start with 30001;

drop table uploadfile;
--文件表
create table uploadfile(
	ufid int primary key,
	userid int     --用户id
		constraint FK_VUser_id references VCUser(userid),
	filepath varchar2(1000),  --文件路径
	filesize int,  --文件大小
	uploaddate date,  --文件上传时间
	filestatus varchar2(10),  --文件状态(上传完成1  上传中断2  上传失败3  已删除4)
	stoppoingpath varchar2(50),  --断点文件路径
	status varchar2(10),  --文件审核字段     1.通过，0.不通过
	isdir int, --判断是否为文件夹   1.文件夹  0.文件
	temp1 varchar2(200),		--备用字段
    temp2 varchar2(200),
    isdel varchar2(10)
);
create sequence seq_ufid start with 40001;
alter table uploadfile add isdel varchar2(10)    --1.删除    0.未删除

insert into uploadfile values(seq_ufid.nextval,10041,'/我的资/新建文件夹',0,sysdate,1,null,1,1,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/来自百度手机浏览器/hello/hello.doc',0,sysdate,1,null,1,0,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/我的资源/新建文件夹/我的资源',0,sysdate,1,null,1,1,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/资源/新建文件夹/我的资源',0,sysdate,1,null,1,1,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/我的资源/新建文件夹2/我的资源3',0,sysdate,1,null,1,1,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/我的资源.xls',0,sysdate,1,null,1,0,null,null,0);
insert into uploadfile values(seq_ufid.nextval,10041,'/我的资源/新建文件夹2/我的资源3.xls',0,sysdate,1,null,1,1,null,null,0);

delete from uploadfile;

select * from UPLOADFILE;

delete from uploadfile where filepath like( '/资源/'%,'/我的资/'%)

select ufid,userid,filepath,filesize,to_char(uploaddate,'yyyy-mm-dd HH:MI:ss'),filestatus,stoppoingpath,status,isdir
		 from uploadfile where userid=10041 and regexp_like(filepath,'^//我的资源+');

--回收站表
create table VCRecyle(
	rid int primary key,
	ufid int   --文件id
		constraint FK_VCUploadFile_id references VCUploadFile(ufid),
	deletedate date, --删除时间
	lefttime int,  --可存放天数
	deletepath varchar2(200),		--备用字段
    temp2 varchar2(200)			--备用字段 
);

alter table VCRecyle rename column temp1 to deletepath

create sequence seq_rid start with 50001;

--分享表
create table VCShare(
	shareid int primary key,
	userid int
		constraint FK_VCUser_id_share references VCUser(userid),
	filepath varchar2(100),  		--文件链接
	password varchar2(50),    		--提取密码
	temp1 varchar2(200),			--备用字段
  temp2 varchar2(200)				--备用字段
);
create sequence seq_shareid start with 70001;


--解决文件服务器端至客户端下载 			将本机作为服务器，其他作为客户端直接输入localhost进行访问与下载
--回收站的删除与还原、清空回收站
--分享--创建连接，权限问题，（有时间做分享给本地好友）
--视频--视频在线播放
--文件处理--文件的上传、下载、断点上传与下载

insert into uploadfile values(seq_ufid.nextval,?,?,?,to_date(?,'yyyy-mm-dd HH24:MI:ss'),1,null,1,0,?,?)
select ufid,userid,filepath,filesize,to_char(uploaddate,'yyyy-mm-dd HH:MI:ss') uploaddate,filestatus,stoppoingpath,status,isdir,temp1,temp2,rownum
		 from uploadfile where userid=10042 and filepath like '/新建文件夹/新建文件夹/%' and isdir=0  order by uploaddate desc







