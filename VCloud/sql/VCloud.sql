--新建一个用户____VCloud

--用户表
create table VCUser(
	userid int primary key,
	uname varchar2(20) not null,
	utel varchar2(20) not null unique, 
	upwd varchar2(50),
	gender varchar2(10),
	address varchar2(10),		--登录地址
	status int,					--状态(是否被锁定)
	temp1 varchar2(200),		--备用字段
	temp2 varchar2(200)			--备用字段  
);

create sequence seq_userid start with 10001;

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
--文件类型表
create table VCFileType(
	ftid int primary key,
	ftname varchar2(10),
	temp1 varchar2(200),			--备用字段
    temp2 varchar2(200)				--备用字段 
);
create sequence seq_ftid start with 30001;


--文件表
create table VCUploadFile(
	ufid int primary key,
	ftid int       --文件类型id
		constraint FK_VCFileType_id references VCFileType(ftid),
	userid int     --用户id
		constraint FK_VCUser_id references VCUser(userid),
	filePathOra varchar2(100),  --文件最初路径
	filePathNew varchar2(100),  --文件最新路径
	fileSize int,  --文件大小
	uploadDate date,  --文件上传时间
	fileStatus varchar2(10),  --文件状态(上传完成  上传中断  上传失败  已删除)
	stoppoingPath varchar2(50),  --断点文件路径
	fileCheck varvhar2(10),  --文件审核字段
	temp1 varchar2(200),			--备用字段
    temp2 varchar2(200)			--备用字段 
);
create sequence seq_ufid start with 40001;

--回收站表
create table VCRecyle(
	rid int primary key,
	ufid int   --文件id
		constraint FK_VCUploadFile_id references VCUploadFile(ufid),
	deletedate date, --删除时间
	lefttime int,  --可存放天数
	temp1 varchar2(200),		--备用字段
    temp2 varchar2(200)			--备用字段 
);
create sequence seq_rid start with 50001;

--文件目录索引表
create table VCFileList(
	listid int primary key,
	userid int
		constraint FK_VCUser_id references VCUCser(userid),
	ufid int   --文件id
		constraint FK_VCUploadFile_id references VCUploadFile(ufid),--文件id，用户修改文件或文件夹名
	listgrade int ,				--目录级别
	listParentid int, 			--上级目录id  没有就为空
	listName varchar2(50),
	temp1 varchar2(200),		--备用字段
    temp2 varchar2(200)			--备用字段 
);

create sequence seq_listid start with 60001;

--分享表












