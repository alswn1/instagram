package insta.app.user;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import insta.action.Action;
import insta.action.ActionForward;
import insta.app.dao.BoardDAO;
import insta.app.dao.BoardFileDAO;
import insta.app.dao.SeongHakDAO;
import insta.app.dao.UserDAO;
import insta.app.dto.BoardDTO;
import insta.app.dto.BoardFileDTO;
import insta.app.dto.UserDTO;

public class UserProfile implements Action{
	@Override
	public ActionForward execute(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		ActionForward forward = new ActionForward();
		if(req.getSession().getAttribute("loginUser") == null) {
			forward.setPath("/user/UserLogin.us");
			forward.setRedirect(false);
			return forward;
		}
		UserDAO udao = new UserDAO();
		BoardDAO bdao = new BoardDAO();
		BoardFileDAO bfdao = new BoardFileDAO();
		
		String userid = req.getParameter("userid");
		List<BoardDTO> getBoardList = bdao.getBoardList(userid);
		
		ArrayList<BoardFileDTO> board_info = new ArrayList<BoardFileDTO>();
		for(BoardDTO boardList:getBoardList) {
			BoardFileDTO boardFile = new BoardFileDTO();
			boardFile.setBoard_num(boardList.getBoard_num());
			boardFile.setFile_sysName(bfdao.getBoardFileSysName(boardList.getBoard_num()));
			board_info.add(boardFile);
		}
		String loginUserId = ((UserDTO)(req.getSession().getAttribute("loginUser"))).getUser_id();
		req.setAttribute("board_info", board_info);
		req.setAttribute("userInfo", udao.getUserInfo(userid));
		req.setAttribute("recommendUser", udao.getRecommendUser(((UserDTO)(req.getSession().getAttribute("loginUser"))).getUser_id()));
		
		ArrayList<Integer> board_follower_follow_cnt = new ArrayList<Integer>();
		SeongHakDAO hakDao = new SeongHakDAO();
		board_follower_follow_cnt.add(hakDao.getUserBoardList(userid).size());
		board_follower_follow_cnt.add(hakDao.getUserFollowerCnt(userid));
		board_follower_follow_cnt.add(hakDao.getUserFollowCnt(userid));
		req.setAttribute("board_follower_follow_cnt", board_follower_follow_cnt);
		boolean checkMyFollow = udao.checkMyFollow(loginUserId, userid);
		req.setAttribute("checkMyFollow", checkMyFollow);
		forward.setRedirect(false);
		forward.setPath("/instagram/story/story_view.jsp");
		return forward;
	}
}
