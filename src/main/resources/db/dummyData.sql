insert into user_tbl values(SEQ_USER.nextval,'관리자','admin','1234',1);
insert into user_tbl values(SEQ_USER.nextval,'이상화','lsh','1234',0);
insert into user_tbl values(SEQ_USER.nextval,'김준수','kjs','1234',0);
insert into user_tbl values(SEQ_USER.nextval,'김영욱','kyw','1234',0);


insert into resume_tbl values(SEQ_RESUME.nextval,'880216-1234567','남','(주)토피아정보기술','2018/11/05','SI사업부','사원','병역필','기혼','2007/03/24','2009/03/04','육군','','01030307849','acacia0216@naver.com','서울시 관악구 난향길 46','',21);
insert into resume_tbl values(SEQ_RESUME.nextval,'871212-1234567','남','(주)토피아정보기술','2018/11/05','SI사업부','주임','병역필','기혼','2007/01/01','2009/01/01','해군','','01012345678','kjs@naver.com','경기도 화성시 동탄','',22);
insert into resume_tbl values(SEQ_RESUME.nextval,'891212-1234567','남','(주)토피아정보기술','2018/11/01','SI사업부','대리','병역필','기혼','2008/02/02','2009/12/02','공군','','01098765432','kyw@naver.com','서울 북쪽 어딘가','',23);



insert into education_tbl values(SEQ_EDUCATION.nextval,'영통초등학교','','졸업','2000/02/02',2);
insert into education_tbl values(SEQ_EDUCATION.nextval,'영통중학교','이과계열','졸업','2003/02/02',2);
insert into education_tbl values(SEQ_EDUCATION.nextval,'목원대학교','관현악과','졸업','2013/02/02',2);

insert into certificate_tbl values(SEQ_CERTIFICATE.nextval,'운전면허 보통 1종','2006/12/12',2);
insert into certificate_tbl values(SEQ_CERTIFICATE.nextval,'정보처리기사','2006/12/12',2);
insert into certificate_tbl values(SEQ_CERTIFICATE.nextval,'정보처리산업기사','2006/12/12',2);

insert into company_tbl values(SEQ_COMPANY.nextval,'(주)어쩔','2013/01/01','2014/01/01','뭐라도 했것지','사원',2);

insert into training_tbl values(SEQ_TRAINING.nextval,'자바를자바라','2001/01/01','2001/02/02','토피아카',2);
insert into training_tbl values(SEQ_TRAINING.nextval,'씨도자바라','2001/03/03','2001/04/04','토피아카',2);

insert into technology_tbl values(SEQ_TECHNOLOGY.nextval,'일본어','C',2);
insert into technology_tbl values(SEQ_TECHNOLOGY.nextval,'자바','C',2);
insert into technology_tbl values(SEQ_TECHNOLOGY.nextval,'파이썬','C',2);
insert into technology_tbl values(SEQ_TECHNOLOGY.nextval,'한국어','C',2);

insert into project_tbl values(SEQ_PROJECT.nextval,'지식관리시스템','2000/05/01','2000/10/01','동원증권','토피아정보기술','금융','','개발','PC-server','NT','V/B, ASP','MS_SQL','Eclipse','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'지식관리시스템(i-Praza)','2000/11/01','2001/03/01','한진해운','토피아정보기술','서비스','','설계, 개발','HP9000','NT','V/B, ASP','MS_SQL','','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'포탈지식경영시스템(집현전)','2001/04/01','2001/10/01','한국가스공사','토피아정보기술','공공','','개발','HP9000','NT','JAVA, JSP','ORACLE','Servlet','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'영업정보시스템','2001/11/01','2002/05/01','삼성물산','토피아정보기술','서비스','','개발','HP9000','UNIX','JAVA, JSP','ORACLE','Servlet','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'한미르 Site Upgrade','2002/05/01','2002/07/01','KTH(주)','토피아정보기술','서비스','','개발','HP9000','UNIX','PHP','ORACLE','','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'도루코 ERP','2002/09/01','2002/11/01','도루코(주)','토피아정보기술','제조','','개발','HP9000','NT','V/B','MS_SQL','','','',21);
insert into project_tbl values(SEQ_PROJECT.nextval,'CHB PLAZA','2002/12/01','2003/01/01','조흥은행','토피아정보기술','금융','','개발','HP9000','UNIX','JAVA, JSP','ORACLE','EJB','','',21);