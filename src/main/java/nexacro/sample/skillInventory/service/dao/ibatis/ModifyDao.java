package nexacro.sample.skillInventory.service.dao.ibatis;

import nexacro.sample.skillInventory.vo.certificateVO;
import nexacro.sample.skillInventory.vo.companyVO;
import nexacro.sample.skillInventory.vo.educationVO;
import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resumeVO;
import nexacro.sample.skillInventory.vo.technologyVO;
import nexacro.sample.skillInventory.vo.trainingVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository
public class ModifyDao extends NexacroIbatisAbstractDAO{

	public void insertResume(resumeVO resumeVo) {
		// TODO Auto-generated method stub
		insert("insertResume",resumeVo);
	}

	public void updateResume(resumeVO resumeVo) {
		// TODO Auto-generated method stub
		update("updateResume",resumeVo);
	}

	public void insertEducation(educationVO education) {
		// TODO Auto-generated method stub
		insert("insertEducation",education);
	}

	public void updateEducation(educationVO education) {
		// TODO Auto-generated method stub
		update("updateEducation",education);
	}

	public void insertCertificate(certificateVO certificate) {
		// TODO Auto-generated method stub
		insert("insertCertificate",certificate);
	}

	public void updateCertificate(certificateVO certificate) {
		// TODO Auto-generated method stub
		update("updateCertificate",certificate);
	}

	public void insertCompany(companyVO company) {
		// TODO Auto-generated method stub
		insert("insertCompany",company);
	}

	public void updateCompany(companyVO company) {
		// TODO Auto-generated method stub
		update("updateCompany",company);
	}

	public void insertTraining(trainingVO training) {
		// TODO Auto-generated method stub
		insert("insertTraining",training);
	}

	public void updateTraining(trainingVO training) {
		// TODO Auto-generated method stub
		update("updateTraining",training);
	}

	public void insertTechnology(technologyVO technology) {
		// TODO Auto-generated method stub
		insert("insertTechnology",technology);
	}

	public void updateTechnology(technologyVO technology) {
		// TODO Auto-generated method stub
		update("updateTechnology",technology);
	}

	public void insertProject(projectVO project) {
		// TODO Auto-generated method stub
		insert("insertProject",project);
	}

	public void updateProject(projectVO project) {
		// TODO Auto-generated method stub
		update("updateProject",project);
	}

	public void deleteEducation(educationVO education) {
		// TODO Auto-generated method stub
		delete("deleteEducation",education);
	}

	public void deleteCertificate(certificateVO certificate) {
		// TODO Auto-generated method stub
		delete("deleteCertificate",certificate);
	}

	public void deleteCompany(companyVO company) {
		// TODO Auto-generated method stub
		delete("deleteCompany",company);
	}

	public void deleteTraining(trainingVO training) {
		// TODO Auto-generated method stub
		delete("deleteTraining",training);
	}

	public void deleteTechnology(technologyVO technology) {
		// TODO Auto-generated method stub
		delete("deleteTechnology",technology);
	}

	public void deleteProject(projectVO project) {
		// TODO Auto-generated method stub
		delete("deleteProject",project);
	}

}
