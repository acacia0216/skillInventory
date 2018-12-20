package nexacro.sample.skillInventory.service.impl;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import nexacro.sample.skillInventory.service.SearchService;
import nexacro.sample.skillInventory.service.dao.ibatis.SearchDao;
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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SearchImpl implements SearchService{
	
	@Autowired
	SearchDao searchDao;
	
	@Override
	public List searchAll(userVO userVo) {
		// TODO Auto-generated method stub
		return searchDao.searchAll(userVo);
	}
	
	@Override
	@Transactional
	public Map searchUser(userVO userVo) {
		// TODO Auto-generated method stub
		resumeVO resumeVo = searchDao.searchResume(userVo);
		List<educationVO> educationVo = searchDao.searchEducation(userVo);
		List<certificateVO> certificationVo = searchDao.searchCertificate(userVo);
		List<companyVO> companyVO = searchDao.searchCompany(userVo);
		List<trainingVO> trainingVo = searchDao.searchTraining(userVo);
		List<technologyVO> technologyVo = searchDao.searchTechnology(userVo);
		List<projectVO> projectVo = searchDao.searchProject(userVo);
		
		Map<String, Object> map = new HashMap();
		map.put("resume", resumeVo);
		map.put("education", educationVo);
		map.put("certification", certificationVo);
		map.put("company", companyVO);
		map.put("training", trainingVo);
		map.put("technology", technologyVo);
		map.put("project", projectVo); 
		
		return map;
	}

	@Override
	public List<resultVO> conditionalSearch(searchVO searchVo) {
		// TODO Auto-generated method stub
		if(searchVo.getCondition() == null){//조건검색
			if(searchVo.getCareer() != null){
				String[] careerTemp = searchVo.getCareer().split("/");//가져오는 형식 = 4/이상
				System.out.println("가져온 연차 : "+careerTemp[0]+"년 "+careerTemp[1]);
				//연차 계산
				searchVo.setCareer(careerTemp[0]);
				if(careerTemp[1].equals("이상")){
					searchVo.setCareerState("up");
				}else{
					searchVo.setCareerState("down");
				}
			}
			
			System.out.println("어디가 널인가요111111 : "+searchVo.toString());
			System.out.println("나이가 널인가요????"+searchVo.getAge());
			if(searchVo.getAge() != null){
				//나이계산
				String[] ageTemp = searchVo.getAge().split("/");//가져오는 형식 = 13~16
				System.out.println("가져온 나이 : "+ageTemp[0]+"살 부터"+ageTemp[1]+"살 까지");
				Calendar cal = Calendar.getInstance();
				int year = cal.get(cal.YEAR);//현재 연도 형식 yyyy
				System.out.println(year);
				int age1 = year - Integer.parseInt(ageTemp[0])+1;
				System.out.println(year);
				int age2 = year - Integer.parseInt(ageTemp[1]+1);
				System.out.println(year);
				System.out.println("나이 연도 계산결과 : "+age1+" / "+age2);
				String fromAge = String.valueOf(age1).substring(2,4);
				String toAge = String.valueOf(age2).substring(2,4);
				System.out.println(fromAge+"년생 부터 "+toAge+"년생 까지");
				
				searchVo.setFromAge(fromAge);
				searchVo.setToAge(toAge);
			}
			
			System.out.println("어디가 널인가요22222 : "+searchVo.toString());
			return searchDao.conditionalSearch(searchVo);
		}else{//단일검색
			return searchDao.oneConditionSearch(searchVo);
		}
	}
	
}
