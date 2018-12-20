package nexacro.sample.skillInventory.web;

import java.util.List;
import java.util.Map;

import nexacro.sample.skillInventory.service.SearchService;
import nexacro.sample.skillInventory.vo.resultVO;
import nexacro.sample.skillInventory.vo.searchVO;
import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class SearchController {
	
	@Autowired
	SearchService searchService;
	
	@RequestMapping("/searchAll.do")
	public NexacroResult searchAll(@ParamDataSet(name = "ds_login", required = false) userVO userVo){
		List<userVO> list = searchService.searchAll(userVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", list);
		return result;
	}
	
	@RequestMapping("/searchUser.do")
	public NexacroResult searchUser(@ParamDataSet(name = "ds_searchUser", required = false) userVO userVo){
		System.out.println("searchUser 확인용 : "+userVo.toString());
		Map<String, Object> map = searchService.searchUser(userVo);
		
		System.out.println(map.get("resume").toString());
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_resume", map.get("resume"));
		result.addDataSet("ds_education", map.get("education"));
		result.addDataSet("ds_certification", map.get("certification"));
		result.addDataSet("ds_company", map.get("company"));
		result.addDataSet("ds_training", map.get("training"));
		result.addDataSet("ds_technology", map.get("technology"));
		result.addDataSet("ds_project", map.get("project"));
		
		return result;
	}
	
	@RequestMapping("/conditionalSearch.do")
	public NexacroResult conditionalSearch(@ParamDataSet(name = "ds_search", required = false) searchVO searchVo){
		System.out.println("조건검색 확인"+searchVo.toString());
		List<resultVO> list = searchService.conditionalSearch(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", list);
		return result;
	}
	
}
