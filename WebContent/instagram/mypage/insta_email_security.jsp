<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Instagram에서 보낸 이메일 • Instagram</title>
<c:set var="cp" value="${pageContext.request.contextPath}"/>
<link rel="shortcut icon" type="image/x-icon" href="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico"/>
<link rel="stylesheet" type="text/css" href="${cp}/css/yooncheol/E_mail/E_mail.css"/>
</head>
<body style="height:100%; background-color: rgba(var(--b3f,250,250,250),1); margin:0;">
	<nav>
		<div class="header">
			<div class="insta_logo">
				<a href=""><img src="${cp}/img/yooncheol/header/logo.png"></a>
			</div>
			<div class="search2">
				<input type="search" class="search" placeholder="검색">
			</div>
			<div class="insta_menu">
				<a href=""><img src="${cp}/img/yooncheol/header/home.png"></a>
				<a href=""><img src="${cp}/img/yooncheol/header/dm.png"></a>
				<a href=""><img src="${cp}/img/yooncheol/header/upload.png"></a>
				<a href=""><img src="${cp}/img/yooncheol/header/algorithm.png"></a>
				<a href=""><img src="${cp}/img/yooncheol/header/alert.png"></a>
				<a href="${cp}/instagram/mypage/mypage.jsp"><img src="${cp}/img/yooncheol/header/mypage.png"></a>
			</div>
		</div>
	</nav>
	<article>
		<div class="wrap" style="background-color: white;">
			<div class="list">
				<ul>
					<a href="${cp}/user/UserEditProfile.us"><li>프로필 편집</li></a>
					<a href="${cp}/user/UserChangePassword.us"><li>비밀번호 변경</li></a>
					<a href="${cp}/instagram/mypage/app_website.jsp"><li>앱 및 웹사이트</li></a>
					<a href="${cp}/instagram/mypage/email_and_sms.jsp"><li>이메일 및 SMS</li></a>
					<a href="${cp}/instagram/mypage/push.jsp"><li>푸시 알림</li></a>
					<a href="${cp}/instagram/mypage/contact.jsp"><li>연락처 관리</li></a>
					<a href="${cp}/instagram/mypage/personal_information.jsp"><li>개인정보 및 보안</li></a>
					<a href=""><li>로그인 활동</li></a>
					<a href="${cp}/instagram/mypage/insta_email_security.jsp"><li>Instagram에서 보낸 이메<br>일</li></a>
					<a href="${cp}/instagram/mypage/Help.jsp"><li>도움말</li></a>
					<a href="${cp}/instagram/mypage/professional_account.jsp"><li class="change">프로페셔널 계정으로 전환</li></a>
				</ul>
			</div>
			<div class="set">
				<img src="${cp}/img/yooncheol/list/meta.png">
				<a href=""><h4 class="center">계정 센터</h4>
				<div>스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을 관리하세요.</div></a>
			</div>
		<div class="div_right">
			<div class="title_cover">
				<h2 class="title">Instagram에서 보낸 이메일</h2>
			</div>
			<div style="align-items: stretch; align-content: stretch; flex: 0 0 auto;">
				<div style="text-align:center; width:100%; border: 0 solid #000;">
					<a class="security" role="tab" href="${cp}/instagram/mypage/insta_email_security.jsp">
						<span>보안</span>
					</a>
					<a class="etc" role="tab" href="${cp}/instagram/mypage/insta_email_etc.jsp">
						<span>기타</span>
					</a>
				</div>
				<div>
					<div class="center_info_cover">
						<h3 class="center_info">최근 14일 동안 Instagram에서 보낸 보안 및 로그인 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은 이메일이 실제 instagram에서 보낸 것이 맞는지 확인할 수 있습니다.
						<a href="https://help.instagram.com/760602221058803" target="_blank" style="color: #00376b;">더 알아보기.</a>
						</h3>
					</div>
					<div>
						<div>
							<hr class="hr">
						</div>
						<div class="cover2">
							<div class="big">
							Windows에서 Chrome 브라우저를 통해 새로운 Instagram 로그인 발생
							</div>
							<div>
								<div class="medium">
								2022년 1월 11일 오후 9:14
								</div>
							</div>
							<div class="small">
							받는 사람: OOO@OOOOOO.OOO
							 · 
							security@mail.instagram.com에서 전송됨 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</article>
	<footer>
	<div class="footer">
		<a href="" class="color"><span>Meta</span></a>
		<a href="" class="color"><span>소개</span></a>
		<a href="" class="color"><span>블로그</span></a>
		<a href="" class="color"><span>채용 정보</span></a>
		<a href="" class="color"><span>도움말</span></a>
		<a href="" class="color"><span>API</span></a>
		<a href="" class="color"><span>개인정보처리방침</span></a>
		<a href="" class="color"><span>약관</span></a>
		<a href="" class="color"><span>인기 계정</span></a>
		<a href="" class="color"><span>해시태그</span></a>
		<a href="" class="color"><span>위치</span></a>
		<a href="" class="color"><span>Instagram Lite</span></a><br><br>
		 	한국어 © 2022 Instagram from Meta
    </div>
	</footer>
</body>
</html>