package nexacro.sample.skillInventory.service;

import java.util.List;

import nexacro.sample.skillInventory.vo.projectVO;
import nexacro.sample.skillInventory.vo.resultVO;
import nexacro.sample.skillInventory.vo.searchVO;
import nexacro.sample.skillInventory.vo.userVO;

public interface SearchService {
	
	public List searchAll(userVO userVo);//초기화면 전체리스트

	public java.util.Map searchUser(userVO userVo);//유저 한명의 정보

	public List<resultVO> conditionalSearch(searchVO searchVo);//조건검색

}
