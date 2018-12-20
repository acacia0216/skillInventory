package nexacro.sample.skillInventory.web;

import java.util.List;

import nexacro.sample.skillInventory.service.ModifyService;
import nexacro.sample.skillInventory.vo.certificateVO;
import nexacro.sample.skillInventory.vo.companyVO;
import nexacro.sample.skillInventory.vo.educationVO;
import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resumeVO;
import nexacro.sample.skillInventory.vo.technologyVO;
import nexacro.sample.skillInventory.vo.trainingVO;
import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class ModifyController {
	
	@Autowired
	ModifyService modifyService;

	@RequestMapping("/modify.do")
	public NexacroResult modifyList(
			@ParamDataSet(name = "ds_resume", required = false) List<resumeVO> resumeVo,
			@ParamDataSet(name = "ds_education", required = false) List<educationVO> educationVo,
			@ParamDataSet(name = "ds_certification", required = false) List<certificateVO> certificateVo,
			@ParamDataSet(name = "ds_company", required = false) List<companyVO> companyVo,
			@ParamDataSet(name = "ds_training", required = false) List<trainingVO> trainingVo,
			@ParamDataSet(name = "ds_technology", required = false) List<technologyVO> technologyVo,
			@ParamDataSet(name = "ds_project", required = false) List<projectVO> projectVo){
		
		modifyService.modifyList(resumeVo,educationVo,certificateVo,companyVo,trainingVo,technologyVo,projectVo);
		
		NexacroResult result = new NexacroResult();
		//result.addDataSet("output1", list);
		return result;
	}
}
