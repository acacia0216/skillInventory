package nexacro.sample.skillInventory.service.dao.ibatis;

import java.util.List;

import nexacro.sample.skillInventory.vo.certificateVO;
import nexacro.sample.skillInventory.vo.companyVO;
import nexacro.sample.skillInventory.vo.educationVO;
import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resultVO;
import nexacro.sample.skillInventory.vo.resumeVO;
import nexacro.sample.skillInventory.vo.searchVO;
import nexacro.sample.skillInventory.vo.technologyVO;
import nexacro.sample.skillInventory.vo.trainingVO;
import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository
public class SearchDao extends EgovAbstractDAO{

	public List searchAll(userVO userVo) {//검색창 전체 리스트 출력
		// TODO Auto-generated method stub
		return list("searchAll",userVo);
	}

	public resumeVO searchResume(userVO userVo) {//유저번호로 이력서 가져오기
		// TODO Auto-generated method stub
		return (resumeVO) select("searchResume",userVo);
	}

	public List<educationVO> searchEducation(userVO userVo) {
		// TODO Auto-generated method stub
		return (List<educationVO>) list("searchEducation",userVo);
	}

	public List<certificateVO> searchCertificate(userVO userVo) {
		// TODO Auto-generated method stub
		return (List<certificateVO>) list("searchCertificate",userVo);
	}

	public List<companyVO> searchCompany(
			userVO userVo) {
		// TODO Auto-generated method stub
		return (List<companyVO>) list("searchCompany",userVo);
	}

	public List<trainingVO> searchTraining(userVO userVo) {
		// TODO Auto-generated method stub
		return (List<trainingVO>) list("searchTraining",userVo);
	}

	public List<technologyVO> searchTechnology(userVO userVo) {
		// TODO Auto-generated method stub
		return (List<technologyVO>) list("searchTechnology",userVo);
	}

	public List<projectVO> searchProject(userVO userVo) {//유저번호로 프로젝트 가져오기
		// TODO Auto-generated method stub
		return (List<projectVO>) list("searchProject",userVo);
	}

	public List<resultVO> conditionalSearch(searchVO searchVo) {
		// TODO Auto-generated method stub
		return (List<resultVO>) list("conditionalSearch",searchVo);
	}

	public List<resultVO> oneConditionSearch(searchVO searchVo) {
		// TODO Auto-generated method stub
		return (List<resultVO>) list("oneConditionSearch",searchVo);
	}
}
