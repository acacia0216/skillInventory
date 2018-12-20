package nexacro.sample.skillInventory.web;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.skillInventory.service.UserService;
import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class UserController {
	
//	@Autowired
//	UserImpl userService;
	@Resource(name = "userServiceImpl")
	private UserService userService;
	
	@RequestMapping(value = "/main/login.do")
	public NexacroResult userLogin(@ParamDataSet(name = "ds_login", required = false) userVO userVo){
		
		List<userVO> list = userService.myBatisUserLogin(userVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", list);
		return result;
	}
}
