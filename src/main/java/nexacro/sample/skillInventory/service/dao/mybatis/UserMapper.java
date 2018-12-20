package nexacro.sample.skillInventory.service.dao.mybatis;

import java.util.List;

import nexacro.sample.skillInventory.vo.userVO;

import org.springframework.stereotype.Repository;

@Repository("userMapper")
public interface UserMapper {

	List<userVO> userLogin(userVO userVo);

}
