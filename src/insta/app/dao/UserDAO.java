package insta.app.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import insta.app.dto.UserDTO;
import insta.mybatis.SqlMapConfig;

public class UserDAO {
	SqlSession sqlSession;
	
	public UserDAO() {
		sqlSession = SqlMapConfig.getFactory().openSession(true);
	}
	
	public UserDTO getUserInfo(String userid) {
		return sqlSession.selectOne("User.getUserInfo", userid);
	}
	
	public List<UserDTO> getRecommendUser(String userid) {
		return sqlSession.selectList("User.getRecommendUser", userid);
	}

	public List<UserDTO> getSearchInfo(String search) {
		return sqlSession.selectList("User.getSearchInfo", search);
	}

	public int searchUserCnt(String search) {
		return sqlSession.selectOne("User.searchUserCnt", search);
	}

	public boolean checkMyFollow(String loginUserId, String userid) {
		HashMap<String, String> conditions = new HashMap<String, String>();
		conditions.put("loginUserId", loginUserId);
		conditions.put("userId", userid);
		int result = sqlSession.selectOne("User.checkMyFollow", conditions);
		
		return result == 1;
	}
}
