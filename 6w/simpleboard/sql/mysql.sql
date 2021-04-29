create database simpleboard;
use simpleboard

create table user (
                      userID varchar (20),
                      userPW varchar (20),
                      userName varchar (20),
                      userGender varchar (20),
                      userEmail varchar (50),
                      userProfile varchar (100),
                      primary key (userID)
);

insert into user values('test', 'test', '홍길동', '남자', 'gildong@gildong.com', 'abcdef.png');

select * from user;


create table bbs
(
    bbsID        int,
    bbsTitle     varchar(50),
    userID       varchar(20),
    bbsDate      datetime,
    bbsContent   varchar(2048),
    bbsAvailable int,
    primary key (bbsID)
);

insert into bbs values(1, 'myfirst post', '홍길동', '2021-04-25 12:08:40', '아무글이나 쓰고 싶은걸 쓴다', 1);