package nexacro.sample.skillInventory.service.impl;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.skillInventory.service.UserService;
import nexacro.sample.skillInventory.service.dao.ibatis.UserDao;
import nexacro.sample.skillInventory.service.dao.mybatis.UserMapper;
import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;



@Service("userServiceImpl")
public class UserImpl extends EgovAbstractServiceImpl implements UserService{

	//iBatis 사용
	@Autowired
	UserDao userDao;

	@Override
	public List<userVO> userLogin(userVO userVo) {
		// TODO Auto-generated method stub
		return userDao.userLogin(userVo);
	}
	
	//myBatis 사용
	@Resource(name = "userMapper")
	private UserMapper userMapper;
	
	@Override
	public List<userVO> myBatisUserLogin(userVO userVo) {
		// TODO Auto-generated method stub
		return userMapper.userLogin(userVo);
	}
}
