package nexacro.sample.skillInventory.service;

import java.util.List;

import nexacro.sample.skillInventory.vo.certificateVO;
import nexacro.sample.skillInventory.vo.companyVO;
import nexacro.sample.skillInventory.vo.educationVO;
import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resumeVO;
import nexacro.sample.skillInventory.vo.technologyVO;
import nexacro.sample.skillInventory.vo.trainingVO;
import nexacro.sample.skillInventory.vo.userVO;

public interface ModifyService {

	void modifyList(List<resumeVO> resumeVo,
			List<educationVO> educationVo, List<certificateVO> certificateVo,
			List<companyVO> companyVo, List<trainingVO> trainingVo,
			List<technologyVO> technologyVo, List<projectVO> projectVo);

}
