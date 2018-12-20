package nexacro.sample.skillInventory.service;

import java.util.List;

import nexacro.sample.skillInventory.vo.userVO;

public interface UserService {

	public List<userVO> userLogin(userVO userVo);

	List<userVO> myBatisUserLogin(userVO userVo);
}
