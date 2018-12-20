package nexacro.sample.skillInventory.service.dao.ibatis;

import java.util.List;

import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("userDao")
public class UserDao extends NexacroIbatisAbstractDAO {

//	@Autowired
//	private UserMapper userMapper;
//	@Resource(name = "userMapper")
//	private UserMapper userMapper;
//
	public List<userVO> userLogin(userVO userVo) {
		// TODO Auto-generated method stub
		return (List<userVO>) list("userLogin", userVo);
	}
	
	
	//login 로그인
	//insertUser 회원가입?
}
