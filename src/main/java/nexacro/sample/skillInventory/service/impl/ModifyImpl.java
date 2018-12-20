package nexacro.sample.skillInventory.service.impl;

import java.util.List;

import nexacro.sample.skillInventory.service.ModifyService;
import nexacro.sample.skillInventory.service.dao.ibatis.ModifyDao;
import nexacro.sample.skillInventory.vo.certificateVO;
import nexacro.sample.skillInventory.vo.companyVO;
import nexacro.sample.skillInventory.vo.educationVO;
import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resumeVO;
import nexacro.sample.skillInventory.vo.technologyVO;
import nexacro.sample.skillInventory.vo.trainingVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class ModifyImpl extends EgovAbstractServiceImpl implements ModifyService{

	@Autowired
	ModifyDao modifyDao;

	@Override
	@Transactional
	public void modifyList(List<resumeVO> resumeVo,
			List<educationVO> educationVo, List<certificateVO> certificateVo,
			List<companyVO> companyVo, List<trainingVO> trainingVo,
			List<technologyVO> technologyVo, List<projectVO> projectVo) {
		// TODO Auto-generated method stub
		int tempResumeNo = 0;
		int tempUserNo = 0;
		//이력
		System.out.println("비었나 확인 : "+resumeVo.isEmpty());
		if(!resumeVo.isEmpty()){
			int resumeSize = resumeVo.size();
	        for (int i=0; i<resumeSize; i++) {
	            resumeVO resume = resumeVo.get(i);
	            System.out.println("타입변환 가능? : "+(resume instanceof DataSetRowTypeAccessor)); 
				if (resume instanceof DataSetRowTypeAccessor){
		            DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) resume;
		            System.out.println("확인 이력서 : "+accessor.getRowType());
		            if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
		            	modifyDao.insertResume(resume);
		            }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
		            	modifyDao.updateResume(resume);
		            }
		        }
	        }
			System.out.println("확인 이력서 끝나고 나서 : "+resumeVo);
			tempResumeNo = resumeVo.get(0).getResumeNo();
			tempUserNo = resumeVo.get(0).getUserNo();
		}
		
		System.out.println("확인 이력서 끝나고 나서 : "+tempResumeNo+" / "+tempUserNo);
		
		//학력
		if(!educationVo.isEmpty()){
			int educationSize = educationVo.size();
	        for (int i=0; i<educationSize; i++) {
	           educationVO education = educationVo.get(i);
	           education.setResumeNo(tempResumeNo);
	           
	            if (education instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) education;
	                
	                System.out.println("확인 학력 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertEducation(education);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateEducation(education);
	                }else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteEducation(education);
	                }
	            }   
	        }
		}
		
		//자격
		if(!certificateVo.isEmpty()){
			int certificateSize = certificateVo.size();
	        for (int i=0; i<certificateSize; i++) {
	            certificateVO certificate = certificateVo.get(i);
	            certificate.setResumeNo(tempResumeNo);
	            
	            if (certificate instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) certificate;
	                
	                System.out.println("확인 자격 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertCertificate(certificate);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateCertificate(certificate);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteCertificate(certificate);
	                }
	            }   
	        }
		}
        
		//회사
		if(!companyVo.isEmpty()){
			int companySize = companyVo.size();
	        for (int i=0; i<companySize; i++) {
	            companyVO company = companyVo.get(i);
	            company.setResumeNo(tempResumeNo);
	            
	            if (company instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) company;
	                
	                System.out.println("확인 회사 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertCompany(company);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateCompany(company);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteCompany(company);
	                }
	            }   
	        }
		}
        
		//교육
		if(!trainingVo.isEmpty()){
			int trainingSize = trainingVo.size();
			for (int i=0; i<trainingSize; i++) {
	        	trainingVO training = trainingVo.get(i);
	        	training.setResumeNo(tempResumeNo);
	        	
	            if (training instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) training;
	                
	                System.out.println("확인 교육 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertTraining(training);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateTraining(training);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteTraining(training);
	                }
	            }   
	        }
		}
       
		//기술
		if(!technologyVo.isEmpty()){
			int technologySize = technologyVo.size();
			for (int i=0; i<technologySize; i++) {
	        	technologyVO technology = technologyVo.get(i);
	        	technology.setResumeNo(tempResumeNo);
	        	
	            if (technology instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) technology;
	                
	                System.out.println("확인 기술 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertTechnology(technology);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateTechnology(technology);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteTechnology(technology);
	                }
	            }   
	        }
		} 
       
        //프로젝트
		if(!projectVo.isEmpty()){
			int projectSize = projectVo.size();
	        for (int i=0; i<projectSize; i++) {
	        	projectVO project = projectVo.get(i);
	        	project.setUserNo(tempUserNo);
	        	
	            if (project instanceof DataSetRowTypeAccessor){
	                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) project;
	                
	                System.out.println("확인 프로젝트 : "+accessor.getRowType());
	                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	                	modifyDao.insertProject(project);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                	modifyDao.updateProject(project);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                	modifyDao.deleteProject(project);
	                }
	            } 
	        }
		}
       
	}//
	
	
}
