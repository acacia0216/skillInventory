SELECT * from(select * from education_tbl join (select resumeNo from resume_tbl
                                where userNo=21)temp)
                                where education_tbl.resumeno=temp.resumeno;
                                

select * from resume_tbl where userNo=21;

select resumeno from resume_tbl where userNo=21;

select * from education_tbl where resumeno=2;

select * from education_tbl join(
select * from resume_tbl where userno=21) using(resume_tbl.resumeno);

select * from user_tbl join resume_tbl using(userno);
select a.userno from user_tbl a,resume_tbl b where a.userno=b.userno;

select * from education_tbl c ,(select * from user_tbl a join resume_tbl b using(userno)) d where c.resumeno=d.resumeno;
select c.schoolname, c.edumajor, c.edustate, c.edudate from education_tbl c ,(select * from user_tbl a join resume_tbl b using(userno) where userno=21) d where c.resumeno=d.resumeno;
select * from education_tbl c join (select * from user_tbl a join resume_tbl b using(userno)) d using(c.resumeno);

select * from resume_tbl rt, user_tbl ut where ut.userno=rt.userno and ut.userno=21;--�̷¼� �������� sql
select * from project_tbl pt join user_tbl using(userno) where userno=21;--������Ʈ �������� sql
select et.schoolname,et.edumajor,et.edustate,et.edudate from education_tbl et, (select * from resume_tbl rt join user_tbl ut using(userno) where userno=21) temp where et.resumeno=temp.resumeno;--�з����� �������� sql
select ct.certificatename,ct.takingdate from certificate_tbl ct, (select * from resume_tbl rt join user_tbl ut using(userno) where userno=21) temp where ct.resumeno=temp.resumeno;--�ڰ��� �������� sql
select ct.companyname,ct.startdate,ct.enddate,ct.companywork,ct.rank from company_tbl ct, (select * from resume_tbl rt join user_tbl ut using(userno) where userno=21) temp where ct.resumeno=temp.resumeno;--ȸ�� �������� sql
select tt.trainingname,tt.startdate,tt.enddate,tt.academyname from training_tbl tt, (select * from resume_tbl rt join user_tbl ut using(userno) where userno=21) temp where tt.resumeno=temp.resumeno;--�����Ʒ� �������� sql
select tt.technologyname,tt.proficiency from technology_tbl tt, (select * from resume_tbl rt join user_tbl ut using(userno) where userno=21) temp where tt.resumeno=temp.resumeno;--������� �������� sql



