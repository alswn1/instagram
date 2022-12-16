//검색창
let search = document.getElementById("search");
let search_icon = document.getElementById("search-icon");
let delete_icon = document.getElementById("delete-icon");
delete_icon.addEventListener("mousedown", function(e) {
	search.value = "";
});
search.addEventListener("focus", function() {
	search_icon.style.display = "none";
	delete_icon.style.display = "block";
	search.style.textIndent = "4%";
	search.style.color = "black";
	this.select();
});
search.addEventListener("blur", function(){
	search_icon.style.display = "block";
	delete_icon.style.display = "none";
	search.style.textIndent = "15%";
	if(search.value !== ""){
		search.style.color = "gray";
	}
});

//검색창 클릭시 최근검색 팝업
let search_popup = document.querySelector(".search-popup");
search.addEventListener("click", function(e) {
	let recent_cnt = document.getElementsByClassName("recent-search-user").length;
	search_popup.style.display = "block";
	if(recent_cnt > 5){
		search_popup.style.overflowY = "scroll";
	} else if(recent_cnt == 0){
		document.querySelector(".recent-remove").style.display = "none";
	}
	document.querySelector(".main").addEventListener("click", function(e) {
		search_popup.style.display = "none";
	});
});

//검색창 팝업에서 모두 지우기
let recent_remove_all = document.querySelector(".recent-remove");
let recent_search_user_wrap = document.querySelector(".recent-search-user-wrap");
recent_remove_all.addEventListener("click", function(e) {
	let recent_search_user = document.getElementsByClassName("recent-search-user");
	recent_search_user_wrap.innerHTML = "";
	let recent_cnt = document.getElementsByClassName("recent-search-user").length;
	if(recent_cnt == 0) {
		document.querySelector(".recent-remove").style.display = "none";
		search_popup.style.overflowY = "hidden";
	}
});

//검색창 팝업에서 하나씩 지우기
function remove_recent_one(num){
	document.getElementById("recent-search-user-" + num).remove();
	let recent_cnt = document.getElementsByClassName("recent-search-user").length;
	if(recent_cnt <= 5 && recent_cnt > 0) {
		document.querySelector(".recent-remove").style.display = "flex";
		search_popup.style.overflowY = "hidden";
	} else if(recent_cnt == 0){
		document.querySelector(".recent-remove").style.display = "none";
	}
}

//스토리 좌우이동
let subStoryLeftBtn = document.getElementById("story-sub-left");
let subStoryRightBtn = document.getElementById("story-sub-right");
subStoryLeftBtn.addEventListener("click", function() {
	let x = document.getElementById("story-sub");
	subStoryRightBtn.style.display="block";
	x.scrollLeft = x.scrollLeft - 945;
	if(x.scrollLeft <= 1000) {
		subStoryLeftBtn.style.display = "none";
	}
});
subStoryRightBtn.addEventListener("click", function() {
	let x = document.getElementById("story-sub");
	subStoryLeftBtn.style.display = "block";
	x.scrollLeft = x.scrollLeft + 945;
	if(x.scrollLeft >= x.scrollWidth-2000) {
		subStoryRightBtn.style.display = "none";
	}
});

//스토리 7개보다 적을시 좌우이동키 안띄워줌
onload = function(){
	let story_cnt = document.getElementsByClassName("story-info").length;
	if(story_cnt <= 7){
		subStoryRightBtn.style.display = "none";
	}
}

//추천 계정 팝업
let recommend_popup_btn = document.getElementById("button2");
let recommend_popup = document.getElementById("popup-recommend");
let recommend_popup_remove = document.querySelector(".button2 > span");
recommend_popup_btn.addEventListener("click", function(e) {
	if(recommend_popup_remove.style.transform === "rotate(135deg)"){
		recommend_popup.style.display = "block";
		recommend_popup_remove.style.transform = "rotate(315deg)";
	} else {
		recommend_popup.style.display = "none";
		recommend_popup_remove.style.transform = "rotate(135deg)";
	}
});

//추천 계정 좌우이동
let recommend_right_btn = document.getElementById("recommend-right-btn");
let recommend_left_btn = document.getElementById("recommend-left-btn");
recommend_left_btn.addEventListener("click", function() {
	let x = document.getElementById("recommend-people");
	recommend_right_btn.style.display = "block";
	x.scrollLeft = x.scrollLeft - 945;
	if(x.scrollLeft <= 1000){
		recommend_left_btn.style.display = "none";
	}
});
recommend_right_btn.addEventListener("click", function() {
	let x = document.getElementById("recommend-people");
	x.scrollLeft = x.scrollLeft + 945;
	recommend_left_btn.style.display = "block";
	if(x.scrollLeft >= x.scrollWidth - 2000){
		recommend_right_btn.style.display = "none";
	}
});

//추천 계정 x 클릭시 목록에서 삭제 + 4개이하로 될시 오른쪽으로 이동키 삭제
function recommend_delete(userid){
	document.getElementById("recommend-people-wrap-" + userid).remove();
	let recommend_cnt = document.getElementsByClassName("recommend-people-wrap").length;
	if(recommend_cnt <= 4){
		recommend_right_btn.style.display = "none";
	}
}

//처음 접속시 추천 계정 5개보다 적을때 좌우 이동키 안띄워줌
onload = function(){
	let recommend_cnt = document.getElementsByClassName("recommend-people-wrap").length;
	if(recommend_cnt <= 4){
		recommend_right_btn.style.display = "none";
	}
}

//차단팝업
let block = document.getElementById("block");
let block_btn = document.getElementsByClassName("button3");
let popup_background = document.getElementById("popup-background");
let body = document.querySelector("body");
block_btn[0].addEventListener("click", function(e){
	popup_background.style.display = "block";
	popup_background.style.background = "rgba(0,0,0,0.7)";
	document.body.classList.add("stop-scroll");
});
popup_background.addEventListener("click", function(e) {
	if(e.target.id === "popup-background"){
		popup_background.style.display = "none";
		document.body.classList.remove("stop-scroll");
	}
});

//차단팝업 취소
let cancel_block_popup = document.querySelector(".cancel");
cancel_block_popup.addEventListener("click", function(e) {
	popup_background.style.display = "none";
});

//비슷한 계정 보기
let see_all_popup = document.getElementById("see-all-popup-open");
let popup_background_see_all = document.getElementById("popup-background-see-all");
see_all_popup.addEventListener("click", function(e) {
	popup_background_see_all.style.display = "block";
	document.body.classList.add("stop-scroll");
});

//비슷한 계정 닫기
let similar_close = document.getElementById("similar-account-close");
similar_close.addEventListener("click", function(e) {
	popup_background_see_all.style.display = "none";
	document.body.classList.remove("stop-scroll");
});

//태그됨 <-> 스토리
let tag = document.getElementById("tag");
let write = document.getElementById("write");
let tag_img = document.querySelector("#tag-img");
let write_img = document.querySelector("#write-img");
let story = document.querySelector(".story");
let tag_popup = document.querySelector(".tag-popup");
let footer = document.querySelector("footer");
tag.addEventListener("click", function(e) {
	write.style.borderTop = "none";
	write.style.color = "gray";
	write.style.cursor = "pointer";
	write_img.setAttribute("src", cp + "/img/daniel/story_view/write.png");
	tag.style.borderTop = "1px solid black";
	tag.style.color = "black";
	tag.style.cursor = "default";
	tag_img.setAttribute("src", cp + "/img/daniel/story_view/tag_on.png");
	story.style.display = "none";
	tag_popup.style.display = "block";
});
write.addEventListener("click", function(e) {
	tag.style.borderTop="none";
	tag.style.color = "gray";
	tag.style.cursor = "pointer";
	tag_popup.style.display = "none";
	tag_img.setAttribute("src", cp + "/img/daniel/story_view/tag.png");
	write.style.borderTop = "1px solid black";
	write.style.color = "black";
	write.style.cursor = "default";
	write_img.setAttribute("src", cp + "/img/daniel/story_view/write_on.png");
	story.style.display = "block";
});

//header 마이페이지쪽 띄워주기/닫기
let mypage_img = document.querySelector("#mypage-img");
let mypage_popup = document.querySelector(".mypage-popup");
mypage_img.addEventListener("click", function(e) {
	mypage_popup.style.display = "block";
	if(mypage_popup.style.display === "block"){
		document.querySelector(".main").addEventListener("click", function(e) {
			mypage_popup.style.display = "none";
		});
	}
});

//ajax로 유저 검색
function check_search() {
	let obj = null;
	let recent_menu = document.querySelector(".recent-menu");
	let search = document.getElementById("search").value;
	let recent_search_user_wrap = document.querySelector(".recent-search-user-wrap");
	// 배열 선언이유 : 최근 검색된 유저 보여주기위해
	// obj는 지역변수라 for문밖에서 못써서 그 값을 배열에 넣어줌
	let recent_search_id_save = new Array();
	let recent_search_name_save = new Array();
	let recent_search_img_save = new Array();
	recent_search_user_wrap.innerHTML = "";
	
	let xhr = new XMLHttpRequest();
		xhr.open("GET", cp + "/user/searchUser.us?search=" + search, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				if (xhr.status == 200 || xhr.status == 201) {
						obj = JSON.parse(xhr.responseText);
						for (let i = 0; i < obj.search_user.length; i++) {
						let node = ""
						node += "<div class='recent-search-user' id='recent-search-user-${i}'>"
							node += "<div class='recent-search-user-profile'>"
								if(obj.search_user[i].img == null){
									node += "<img src=\"" + cp + "/img/server_images/profile_image/basic_img.png\" class='recent-search-user-img-${i}' id='recent-search-user-img' onclick=\"location.href='" + cp + "/user/userProfile.us?userid=" + obj.search_user[i].id + "'\">"
								} else {
									node += "<img src=\"" + cp + "/img/server_images/profile_image/" + obj.search_user[i].img + "\" class='recent-search-user-img-${i}' id='recent-search-user-img' onclick=\"location.href='" + cp + "/user/userProfile.us?userid=" + obj.search_user[i].id + "'\">"
								}
							node += "</div>"
							node += "<div class='recent-search-user-link'>"
								node += "<div class='recent-search-user-name-${i}' id='recent-search-user-name'>" + obj.search_user[i].id + "</div>"
								if(obj.search_user[i].name == null){
									node += "<div class='recent-search-user-etc-${i}' id='recent-search-user-etc'></div>"
								} else{
									node += "<div class='recent-search-user-etc-${i}' id='recent-search-user-etc'>" + obj.search_user[i].name + "</div>"
								}
							node += "</div>"
							node += "<div class='recent-search-user-remove' id='recent-search-user-remove-${i}'>"
								node += "<img src='" + cp + "/img/daniel/story_view/recent_search_user_remove.png' class='recent_user_remove' onclick='remove_recent_one(${i});'>"
							node += "</div>"
						node += "</div>"
						
					document.getElementById("recent-search-user-wrap").insertAdjacentHTML("afterbegin", node);
					}
					let recent_cnt = document.getElementsByClassName("recent-search-user").length;
					if(recent_cnt > 5){
						search_popup.style.overflowY = "scroll";
					} else if(recent_cnt == 0){
						document.querySelector(".recent-remove").style.display = "none";
					}
				}
			}
		}
		xhr.send();
}





//게시글에서 말풍선 버튼 클릭 시 해당 게시물을 팝업창으로 띄움
//매개 변수에 해당 게시물 번호(실제 게시물 테이블의 primary key 값)도 필요할 것으로 보인다
//ajax 사용해서 json 형식으로 해당 게시물에 관련한 모든 정보를 받아와서 DOM으로 뿌려주어야 할 것 같다
//답글의 타입 (기본적으로 해당 게시물에 댓글 형태로 들어간다 하지만 존재하는 댓글이나 대댓글의 답글 달기 버튼을 클릭하는 순간 속해있는 댓글의 대댓글 형태로 들어간다, 게시를 완료하면 다시 기본값으로 바꿔주어 댓글 형태로 들어갈 수 있도록 한다)
let popupCommentType = "";
//답글의 타입이 re_re가 되면 어떤 댓글에 대한 대댓글인지 
let popupReplyNum = "";
function clickReplyLeaveBtn(paramReplyNum, paramToWhom) {
	const popupTextarea = document.getElementById("popup-textarea");
	popupCommentType = "re_re";
	popupReplyNum = paramReplyNum;
	popupTextarea.value = "@" + paramToWhom + " ";
	popupTextarea.focus();
}
function writeReplyInPopUp(loginUserId, boardNum) {
	const popupTextarea = document.getElementById("popup-textarea");
	//일반 댓글
	let content = popupTextarea.value.trim();
	if(content === "") {
		alert("댓글 내용을 입력하세요!");
		popupTextarea.value = "";
		popupTextarea.focus();
		return false;
	}
	if(content.length > 200) {
		alert("댓글은 200자 이하로 작성하세요!");
		popupTextarea.value = "";
		popupTextarea.focus();
		return false;
	}
	const pattern = /\s/g;
	if(content.replace(pattern, "") === "") {
		alert("공백만 입력할 수 없습니다!");
		popupTextarea.value = "";
		popupTextarea.focus();
		return false;
	}
	content = content.replace(/\r\n/gi, '<br>');
	content = content.replace(/\\n/gi, '<br>');
	content = content.replace(/\n/gi, '<br>');
	if(popupCommentType === "reply") {
		const targetPosition = document.getElementById("popup-content-writer-posting-wrap");
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReplyWrite.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let newReply = xhr.responseText.trim();
					targetPosition.insertAdjacentHTML("afterend", newReply);
					popupTextarea.value = "";
					popupCommentType = "reply";
					popupReplyNum = "";
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum + "&replyContent=" + content);
	}
	//대댓글
	else if(popupCommentType === "re_re") {
		let targetPosition = document.querySelector(".reply-seq-" + popupReplyNum + ":nth-last-child(1)");
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReReWrite.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let newReRe = xhr.responseText.trim();
					if(targetPosition !== null) {
						targetPosition.insertAdjacentHTML("afterend", newReRe);
						if(targetPosition.style.display === "flex") {
							document.querySelector(".reply-seq-" + popupReplyNum + ":nth-last-child(1)").style.display = "flex";
						}
					}
					else {
						targetPosition = document.querySelector("#reply-reply-show-btn-" + popupReplyNum);
						targetPosition.insertAdjacentHTML("afterend", newReRe);
						targetPosition.innerText = "답글 숨기기";
						document.querySelector(".reply-seq-" + popupReplyNum).style.display = "flex";
					}
					popupTextarea.value = "";
					popupCommentType = "reply";
					popupReplyNum = "";
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum + "&reReContent=" + content + "&replyNum=" + popupReplyNum);
	}
	//에러 없겠지만 넣어둠
	else {
		console.log("error");
	}
}
//대댓글 좋아요 함수
function likeReRe(re_re_num, loginUserId, isRed) {
	//빨간하트면 누른 상태이므로 좋아요 취소를 수행한다
	if(isRed === "true") {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReReLikeCancel.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					const responseText = xhr.responseText.trim();
					if(responseText !== "X") {
						const removeTarget = document.querySelector("#re-re-heart-wrap-" + re_re_num + " > div");
						removeTarget.remove();
						const reReHeartWrap = document.querySelector("#re-re-heart-wrap-" + re_re_num);
						let emptyHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png');\" onclick=\"likeReRe('" + re_re_num + "', '" + loginUserId + "', 'false');\"></div>";
						reReHeartWrap.insertAdjacentHTML("beforeend", emptyHeart);
						document.querySelector("#re-re-like-cnt-text-" + re_re_num).innerText = responseText;
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&reReNum=" + re_re_num);
	}
	//빈하트면 좋아요를 수행한다
	else {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReReLike.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					const responseText = xhr.responseText.trim();
					if(responseText !== "X") {
						const removeTarget = document.querySelector("#re-re-heart-wrap-" + re_re_num + " > div");
						removeTarget.remove();
						const reReHeartWrap = document.querySelector("#re-re-heart-wrap-" + re_re_num);
						let redHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png');\" onclick=\"likeReRe('" + re_re_num + "', '" + loginUserId + "', 'true');\"></div>";
						reReHeartWrap.insertAdjacentHTML("beforeend", redHeart);
						document.querySelector("#re-re-like-cnt-text-" + re_re_num).innerText = responseText;
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&reReNum=" + re_re_num);
	}
}
//대댓글 삭제
function removeReRe(reReNum, reReId, ref_reply_num) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", contextPath + "/popup/SHPopupReReRemove.bo", true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(xhr.readyState == XMLHttpRequest.DONE){
			if(xhr.status == 200 || xhr.status == 201){
				const responseText = xhr.responseText.trim();
				if(responseText === "O") {
					const removeTarget = document.querySelector("#reply-reply-wrap-" + reReNum);
					removeTarget.remove();
					let reply_seq = document.querySelectorAll(".reply-seq-" + ref_reply_num);
					if(reply_seq.length === 0) {
						document.getElementById("reply-reply-show-btn-" + ref_reply_num).innerText = "답글 보기";
					}
				}
			}
		}
	}
	xhr.send("reReId=" + reReId + "&reReNum=" + reReNum);
}
//댓글 좋아요
function likeReply(replyNum, loginUserId, isRed) {
	//빨간 하트이면 좋아요 취소를 하는 것이다
	if(isRed === "true") {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReplyLikeCancel.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					const responseText = xhr.responseText.trim();
					if(responseText !== "X") {
						const removeTarget = document.querySelector("#reply-heart-wrap-" + replyNum + " > div");
						removeTarget.remove();
						const replyHeartWrap = document.querySelector("#reply-heart-wrap-" + replyNum);
						let emptyHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png\');\" onclick=\"likeReply('" + replyNum + "', '" + loginUserId + "', 'false');\"></div>";
						replyHeartWrap.insertAdjacentHTML("beforeend", emptyHeart);
						document.querySelector("#reply-like-cnt-text-" + replyNum).innerText = responseText;
					}
				}
			}
		}
		xhr.send("replyLikeId=" + loginUserId + "&replyNum=" + replyNum);
	}
	//빈하트면 좋아요를 수행한다
	else {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/popup/SHPopupReplyLike.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					const responseText = xhr.responseText.trim();
					if(responseText !== "X") {
						const removeTarget = document.querySelector("#reply-heart-wrap-" + replyNum + " > div");
						removeTarget.remove();
						const replyHeartWrap = document.querySelector("#reply-heart-wrap-" + replyNum);
						let redHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png\');\" onclick=\"likeReply('" + replyNum + "', '" + loginUserId + "', 'true');\"></div>";
						replyHeartWrap.insertAdjacentHTML("beforeend", redHeart);
						document.querySelector("#reply-like-cnt-text-" + replyNum).innerText = responseText;
					}
				}
			}
		}
		xhr.send("replyLikeId=" + loginUserId + "&replyNum=" + replyNum);
	}
}
//댓글 삭제
function removeReply(replyNum, loginUserId) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", contextPath + "/popup/SHPopupReplyRemove.bo", true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(xhr.readyState == XMLHttpRequest.DONE){
			if(xhr.status == 200 || xhr.status == 201){
				const responseText = xhr.responseText.trim();
				if(responseText === "O") {
					const removeTarget = document.querySelector("#popup-content-reply-wrap-" + replyNum);
					removeTarget.remove();
				}
			}
		}
	}
	xhr.send("replyId=" + loginUserId + "&replyNum=" + replyNum);
}
//팝업창에서 게시물 좋아요 / 좋아요 취소
function popupBoardLike(boardNum, loginUserId, isRed) {
	//하트가 눌려저 있는 상황 (좋아요 취소)
	const targetWrap = document.querySelector("#popup-board-heart-wrap");
	if(isRed === "true") {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/like/SHCancelLikeClickBoard.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let txt = xhr.responseText.trim();
					if(txt !== "X") {
						const targetHeartIcon = document.querySelector("#popup-board-heart-wrap > div");
						targetHeartIcon.remove();
						let emptyHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png')\" onclick=\"popupBoardLike('" + boardNum + "', '" + loginUserId + "', 'false');\"></div>";
						targetWrap.insertAdjacentHTML("afterbegin", emptyHeart);
						const targetText = document.getElementById("popup-board-like-cnt-text");
						targetText.innerText = "좋아요 " + txt + "개";
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum);
	}
	//하트를 누르지 않은 상황 (좋아요)
	else {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/like/SHLikeClickBoard.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let txt = xhr.responseText.trim();
					if(txt !== "X") {
						const targetHeartIcon = document.querySelector("#popup-board-heart-wrap > div");
						targetHeartIcon.remove();
						let redHeart = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png')\" onclick=\"popupBoardLike('" + boardNum + "', '" + loginUserId + "', 'true');\"></div>";
						targetWrap.insertAdjacentHTML("afterbegin", redHeart);
						const targetText = document.getElementById("popup-board-like-cnt-text");
						targetText.innerText = "좋아요 " + txt + "개";
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum);
	}
}
//팝업창에서 게시물 북마크 / 북마크 취소
function popupBoardBookmark(boardNum, loginUserId, isBlack) {
	//북마크가 눌려 있는 상태이므로 북마크를 취소한다
	const targetWrap = document.getElementById("popup-bookmark-wrap");
	if(isBlack === "true") {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/bookmark/SHCancelBookmarkClickBoard.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let txt = xhr.responseText.trim();
					if(txt === "O") {
						const targetBookmarkIcon = document.querySelector("#popup-bookmark-wrap > div");
						targetBookmarkIcon.remove();
						let emptyBookmark = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/bookmark.png');\" onclick=\"popupBoardBookmark('" + boardNum + "', '" + loginUserId + "', 'false');\"></div>";
						targetWrap.insertAdjacentHTML("afterbegin", emptyBookmark);
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum);
	}
	//북마크가 눌려 있지 않은 상태이므로 북마크를 추가한다
	else {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", contextPath + "/bookmark/SHBookmarkClickBoard.bo", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status == 200 || xhr.status == 201){
					let txt = xhr.responseText.trim();
					if(txt === "O") {
						const targetBookmarkIcon = document.querySelector("#popup-bookmark-wrap > div");
						targetBookmarkIcon.remove();
						let redBookmark = "<div style=\"background-image: url('" + contextPath + "/img/seonghak/bookmark_black.png');\" onclick=\"popupBoardBookmark('" + boardNum + "', '" + loginUserId + "', 'true');\"></div>";
						targetWrap.insertAdjacentHTML("afterbegin", redBookmark);
					}
				}
			}
		}
		xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum);
	}
}
//팝업창 띄우기
function showPopup(selectedContentNum, loginUserId, boardNum) {
	document.body.classList.add("stop-scroll");
	const xhr = new XMLHttpRequest();
	xhr.open("POST", contextPath + "/board/SHPopupBoard.bo", true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(xhr.readyState == XMLHttpRequest.DONE){
			if(xhr.status == 200 || xhr.status == 201){
	//			기본값
				popupCommentType = "reply";
				
				const boardJSON = JSON.parse(xhr.responseText);
				console.log(boardJSON)
				let popupLeftWrap = document.getElementsByClassName("popup-window-left-wrap")[0];
				
				let count = 0;
				for(let i = 0; i < boardJSON.board_images.length; i++) {
					count++;
					if(count == 1) {
						popupLeftWrap.insertAdjacentHTML("beforeend", "<img class=\"popup-left-images\" id=\"popup-left-image-" + count + "\" style=\"border: 0;\" src=\"" + contextPath + "/img/server_images/board_images/" + boardJSON.board_images[i] +"\" />");
					}
					else {
						popupLeftWrap.insertAdjacentHTML("beforeend", "<img class=\"popup-left-images\" id=\"popup-left-image-" + count + "\" style=\"display: none; border: 0;\" src=\"" + contextPath + "/img/server_images/board_images/" + boardJSON.board_images[i] + "\" />");
					}
				}
				if(count > 1) {
					popupLeftWrap.insertAdjacentHTML("beforeend", "<div id=\"popup-image-move-left-btn\" style=\"display: none;\" onclick=\"movePopupImgLeft();\"></div>");
					popupLeftWrap.insertAdjacentHTML("beforeend", "<div id=\"popup-image-move-right-btn\" onclick=\"movePopupImgRight();\"></div>");
				}
				let popupRightWrap = document.getElementsByClassName("popup-window-right-wrap")[0];
	//			작성자 프로필 띄우기
				let writerProfileNode = "";
				writerProfileNode += "<div class=\"popup-content-writer-profile-wrap\">";
				writerProfileNode += 	"<div class=\"popup-content-writer-profile-image-wrap\">";
				if(boardJSON.board_writer_img === "null") {
					writerProfileNode +=	"<div class=\"popup-content-writer-profile-image\" style=\"background-image: url('" + contextPath + "/img/server_images/profile_image/unknown.png');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "'\"></div>";
				}
				else {
					writerProfileNode += 	"<div class=\"popup-content-writer-profile-image\" style=\"background-image: url('" + contextPath + "/img/server_images/profile_image/" + boardJSON.board_writer_img + "');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "'\"></div>";
				}
				writerProfileNode += 	"</div>";
				writerProfileNode += 	"<div class=\"popup-content-writer-profile-name-wrap\">";
				writerProfileNode += 		"<a href=\"" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "\">" + boardJSON.board_writer_id + "</a>";
				writerProfileNode += 	"</div>";
				writerProfileNode +=	"<div class=\"popup-content-writer-more-btn-wrap\">";
				if(boardJSON.board_owner_check === "true") {
					writerProfileNode +=	"<div onclick=\"showMorePopup('true', '" + boardJSON.board_num + "', '" + selectedContentNum + "');\"></div>";
				}
				else {
					writerProfileNode +=	"<div onclick=\"showMorePopup('false', '" + boardJSON.board_num + "', '" + selectedContentNum + "');\"></div>";
				}
				writerProfileNode +=	"</div>";
				writerProfileNode += "</div>";
				popupRightWrap.insertAdjacentHTML("beforeend", writerProfileNode);
	//			작성자가 게시물에 게시한 글과 댓글들 전체를 감싸는 wrapper 추가
				popupRightWrap.insertAdjacentHTML("beforeend", 
						"<div class=\"popup-window-right-reply-wrap\"" +
						
						"</div>"	
				);
				let popupRightReplyWrap = document.getElementsByClassName("popup-window-right-reply-wrap")[0];
	//			작성자 작성 내용 띄우기
				let writerContentNode = "";
				writerContentNode += "<div id=\"popup-content-writer-posting-wrap\" class=\"popup-content-writer-posting-wrap\">";
				writerContentNode += 	"<div class=\"popup-posting-profile-img-wrap\">";
				if(boardJSON.board_writer_img === "null") {
					writerContentNode += 	"<div class=\"popup-posting-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/unknown.png');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "'\"></div>";
				}
				else {
					writerContentNode += 	"<div class=\"popup-posting-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/" + boardJSON.board_writer_img +"');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "'\"></div>";
				}
				writerContentNode += 	"</div>";
				writerContentNode += 	"<div class=\"popup-posting-content-wrap\">";
				writerContentNode += 		"<span style=\"font-size: 13px;\">";
				writerContentNode += 			"<a href=\"" + contextPath + "/user/userProfile.us?userid=" + boardJSON.board_writer_id + "\" style=\"font-size: 13px; font-weight: bold; text-decoration: none; color:black;\">" + boardJSON.board_writer_id + "</a> ";
				writerContentNode += 			boardJSON.board_contents;
				writerContentNode += 		"</span>";
				writerContentNode += 		"<div style=\"padding-top: 15px; width: 300px; height: 20px; font-size: 12px; color: #9e9e9e; font-weight: 500;\">" + boardJSON.board_time_interval;
				writerContentNode += 		"</div>";
				writerContentNode += 	"</div>";
				writerContentNode += "</div>";
				popupRightReplyWrap.insertAdjacentHTML("beforeend", writerContentNode);
	//			댓글 띄우기
	//			댓글이 있으면 해당 게시물의 댓글 수만큼 반복해서 댓글을 생성해준다.
				if(boardJSON.reply_list !== "null") {
					for(let i = 0; i < boardJSON.reply_list.length; i++) {
	//					대댓글 먼저 노드 구성
						let reply_reply = "";
	//					해당 댓글의 대댓글이 있으면 아래 반복문을 통해 해당 댓글의 대댓글 수만큼 반복해서 대댓글을 생성해준다.
						if(boardJSON.reply_list[i].re_re_list !== "null") {
							for(let j = 0; j < boardJSON.reply_list[i].re_re_list.length; j++) {
								reply_reply += "<div id=\"reply-reply-wrap-" + boardJSON.reply_list[i].re_re_list[j].re_re_num +"\" class=\"reply-reply-wrap reply-seq-" + boardJSON.reply_list[i].reply_num + "\">";
								reply_reply += 		"<div class=\"popup-content-reply-profile-img-wrap\">";
								if(boardJSON.reply_list[i].re_re_list[j].re_re_writer_img === "null") {
									reply_reply += 		"<div class=\"popup-content-reply-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/unknown.png');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_id + "'\"></div>";
								}
								else {
									reply_reply += 		"<div class=\"popup-content-reply-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_img +"');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_id + "'\"></div>";
								}
								reply_reply += 		"</div>";
								reply_reply +=		"<div class=\"reply-reply-content-wrap\">";
								reply_reply +=			"<span style=\"font-size: 13px;\">";
								reply_reply +=				"<a href=\"" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_id + "\" style=\"color: black; font-size: 13px; font-weight: bold;\">" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_id + "</a> ";
								reply_reply +=				boardJSON.reply_list[i].re_re_list[j].re_re_contents;
								reply_reply +=			"</span>";
								reply_reply +=			"<div class=\"popup-content-reply-info-wrap\">";
								reply_reply +=				"<div>" + boardJSON.reply_list[i].re_re_list[j].re_re_time_interval +"</div>";
								reply_reply +=				"<div id=\"re-re-like-cnt-text-" + boardJSON.reply_list[i].re_re_list[j].re_re_num + "\">좋아요 " + boardJSON.reply_list[i].re_re_list[j].re_re_like_cnt + "개</div>";
								reply_reply +=				"<div onclick=\"clickReplyLeaveBtn('" + boardJSON.reply_list[i].re_re_list[j].ref_reply_num+ "', '" + boardJSON.reply_list[i].re_re_list[j].re_re_writer_id + "');\">답글 달기</div>";
								if(boardJSON.reply_list[i].re_re_list[j].re_re_owner_check === "true") {
									reply_reply += 			"<div onclick=\"removeReRe('" + boardJSON.reply_list[i].re_re_list[j].re_re_num + "', '" + loginUserId +"', '" + boardJSON.reply_list[i].reply_num +"');\">삭제</div>";
								}
								reply_reply +=			"</div>";
								reply_reply +=		"</div>";
								reply_reply +=		"<div id=\"re-re-heart-wrap-" + boardJSON.reply_list[i].re_re_list[j].re_re_num + "\" class=\"reply-heart-wrap\">";
								if(boardJSON.reply_list[i].re_re_list[j].re_re_like_check === "true") {
									reply_reply +=		"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png');\" onclick=\"likeReRe('" + boardJSON.reply_list[i].re_re_list[j].re_re_num + "', '" + loginUserId + "', 'true');\"></div>";
								}
								else {
									reply_reply +=		"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png');\" onclick=\"likeReRe('" + boardJSON.reply_list[i].re_re_list[j].re_re_num + "', '" + loginUserId + "', 'false');\"></div>";
								}
								reply_reply +=		"</div>";
								reply_reply += "</div>";
							}
						}
						let replyNode = "";
						replyNode += "<div id=\"popup-content-reply-wrap-" + boardJSON.reply_list[i].reply_num + "\" class=\"popup-content-reply-wrap\">";
						replyNode += 	"<div class=\"popup-content-reply-profile-img-wrap\">";
						if(boardJSON.reply_list[i].reply_writer_img === "null") {
							replyNode += 	"<div class=\"popup-content-reply-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/unknown.png');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].reply_writer_id + "'\"></div>";
						}
						else {
							replyNode += 	"<div class=\"popup-content-reply-profile-img\" style=\"background-image: url('" + contextPath +"/img/server_images/profile_image/" + boardJSON.reply_list[i].reply_writer_img +"');\" onclick=\"location.href='" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].reply_writer_id + "'\"></div>";
						}
						replyNode += 	"</div>";
						replyNode += 	"<div class=\"popup-content-reply-content-wrap\">";
						replyNode += 		"<span style=\"font-size: 13px;\">";
						replyNode +=			"<a href=\"" + contextPath + "/user/userProfile.us?userid=" + boardJSON.reply_list[i].reply_writer_id + "\" style=\"color: black; font-size: 13px; font-weight: bold;\">" + boardJSON.reply_list[i].reply_writer_id + "</a> ";
						replyNode +=			boardJSON.reply_list[i].reply_contents;
						replyNode +=		"</span>";
						replyNode +=		"<div class=\"popup-content-reply-info-wrap\">";
						replyNode +=			"<div>" + boardJSON.reply_list[i].reply_time_interval + "</div>";
						replyNode +=			"<div id=\"reply-like-cnt-text-" + boardJSON.reply_list[i].reply_num +"\">좋아요 " + boardJSON.reply_list[i].reply_like_cnt + "개</div>";
						replyNode +=			"<div onclick=\"clickReplyLeaveBtn('" + boardJSON.reply_list[i].reply_num + "', '" + boardJSON.reply_list[i].reply_writer_id + "');\">답글 달기</div>";
						if(boardJSON.reply_list[i].reply_owner_check === "true") {
							replyNode +=		"<div onclick=\"removeReply('" + boardJSON.reply_list[i].reply_num + "', '" + loginUserId + "');\">삭제</div>";
						}
						replyNode +=		"</div>";
						replyNode += 		"<div id=\"reply-reply-show-btn-" + boardJSON.reply_list[i].reply_num + "\" onclick=\"showReplyReply(" + boardJSON.reply_list[i].reply_num + ");\">";
						replyNode +=			"답글 보기";
						replyNode +=		"</div>";
						replyNode +=		reply_reply;
						replyNode +=	"</div>";
						replyNode +=	"<div id=\"reply-heart-wrap-" + boardJSON.reply_list[i].reply_num +"\" class=\"reply-heart-wrap\">";
						if(boardJSON.reply_list[i].reply_like_check === "true") {
							replyNode +=	"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png\');\" onclick=\"likeReply('" + boardJSON.reply_list[i].reply_num + "', '" + loginUserId + "', 'true');\"></div>";
						}
						else {
							replyNode +=	"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png\');\" onclick=\"likeReply('" + boardJSON.reply_list[i].reply_num + "', '" + loginUserId + "', 'false');\"></div>";
						}
						replyNode +=	"</div>";
						replyNode += "</div>";
						popupRightReplyWrap.insertAdjacentHTML("beforeend",	replyNode);
					}
				}
	//			댓글 달기 폼 추가, 아이콘들, 좋아요 개수, 게시 시간 추가
				let formNode = "";
				formNode += "<div class=\"popup-right-bottom-wrap\">";
				formNode +=		"<div class=\"popup-right-bottom-top-wrap\">";
				formNode +=			"<div class=\"popup-right-bottom-top-left-wrap\">";
				formNode +=				"<div class=\"popup-right-bottom-top-left-icons-wrap\">";
				formNode +=					"<div id=\"popup-board-heart-wrap\">";
				if(boardJSON.board_like_check === "true") {
					formNode +=					"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_red.png')\" onclick=\"popupBoardLike('" + boardJSON.board_num + "', '" + loginUserId + "', 'true');\"></div>";
				}
				else {
					formNode +=					"<div style=\"background-image: url('" + contextPath + "/img/seonghak/like_heart_empty.png')\" onclick=\"popupBoardLike('" + boardJSON.board_num + "', '" + loginUserId + "', 'false');\"></div>";
				}
				formNode +=					"</div>";
				formNode +=					"<div>";
				formNode +=						"<div style=\"background-image: url('" + contextPath + "/img/seonghak/bubble.png')\"></div>";
				formNode +=					"</div>";
				formNode +=					"<div>";
				formNode +=						"<div style=\"background-image: url('" + contextPath + "/img/seonghak/dm.png')\"></div>";
				formNode +=					"</div>";
				formNode +=				"</div>";
				formNode +=				"<div id=\"popup-board-like-cnt-text\">";
				formNode +=					"좋아요 " + boardJSON.board_like_cnt + "개";
				formNode +=				"</div>";
				formNode +=				"<div>";
				formNode +=					boardJSON.board_time_interval;
				formNode +=				"</div>";
				formNode +=			"</div>";
				formNode +=			"<div id=\"popup-bookmark-wrap\">";
				if(boardJSON.board_bookmark_check === "true") {
					formNode +=			"<div style=\"background-image: url('" + contextPath + "/img/seonghak/bookmark_black.png');\" onclick=\"popupBoardBookmark('" + boardJSON.board_num + "', '" + loginUserId + "', 'true');\"></div>";
				}
				else {
					formNode +=			"<div style=\"background-image: url('" + contextPath + "/img/seonghak/bookmark.png');\" onclick=\"popupBoardBookmark('" + boardJSON.board_num + "', '" + loginUserId + "', 'false');\"></div>";
				}
				formNode +=			"</div>";
				formNode +=		"</div>";
				formNode +=		"<div>";
				formNode +=			"<form>";
				formNode +=				"<textarea id=\"popup-textarea\" name=\"popupReplyContent\" spellcheck=\"false\" placeholder=\"댓글 달기...\"></textarea>";
				formNode +=				"<input type=\"button\" onclick=\"writeReplyInPopUp('" + loginUserId + "', '" + boardNum + "');\" value=\"게시\" />";
				formNode +=			"</form>";
				formNode +=		"</div>";
				formNode +=	"</div>";
				popupRightWrap.insertAdjacentHTML("beforeend", formNode);
				document.getElementById("popup-background-wrap").style.display = "block";
			}
		}
	}
	xhr.send("userId=" + loginUserId + "&boardNum=" + boardNum);

}
//팝업창 닫는 함수
function removePopup() {
	document.body.classList.remove("stop-scroll");
	let popupLeftWrap = document.getElementsByClassName("popup-window-left-wrap")[0];
	popupLeftWrap.innerHTML = "";
	let popupRightWrap = document.getElementsByClassName("popup-window-right-wrap")[0];
	popupRightWrap.innerHTML = "";
	if(document.getElementById("popup-background-wrap").style.display !== "none") {
		document.getElementById("popup-background-wrap").style.display = "none";
	}
	location.reload();
}
//해당 팝업창 바깥에서 클릭이 발생하면 팝업창을 닫음
document.getElementById("popup-background-wrap").addEventListener("click", function(e) {
	if(e.target.id === "popup-background-wrap" || e.target.id === "popup-remove-btn-wrap") {
		removePopup();
	}
});
function movePopupImgLeft() {
	let image_arr = document.getElementsByClassName("popup-left-images");
	let count = 1;
	for(let img of image_arr) {
		if(img.style.display !== "none") {
			count = parseInt(img.id.replace("popup-left-image-", ""));
		}
	}
	if(count !== 1) {
		document.getElementById("popup-left-image-" + count).style.display = "none";
		count--;
		document.getElementById("popup-left-image-" + count).style.display = "block";
		document.getElementById("popup-image-move-right-btn").style.display = "block";
		if(count === 1) {
			document.getElementById("popup-image-move-left-btn").style.display = "none";
		}
	}
}
function movePopupImgRight() {
	let image_arr = document.getElementsByClassName("popup-left-images");
	let count = 1;
	for(let img of image_arr) {
		if(img.style.display !== "none") {
			count = parseInt(img.id.replace("popup-left-image-", ""));
		}
	}
	if(count < image_arr.length) {
		document.getElementById("popup-left-image-" + count).style.display = "none";
		count++;
		document.getElementById("popup-left-image-" + count).style.display = "block";
		document.getElementById("popup-image-move-left-btn").style.display = "block";
		if(count === image_arr.length) {
			document.getElementById("popup-image-move-right-btn").style.display = "none";
		}
	}
}
//대댓글 보기 숨기기 함수
function showReplyReply(replySeqNum) {
	let reply_reply_list = document.getElementsByClassName("reply-seq-" + replySeqNum);
	//대댓글이 존재하고
	if(reply_reply_list.length !== 0) {
	//	해당 댓글의 첫번째 대댓글의 display가 none이거나 ""이면
		if(reply_reply_list[0].style.display === "none" || reply_reply_list[0].style.display === "") {
	//		대댓글을 모두 보여주고 text는 답글 숨기기로 바꿈
			for(let i = 0; i < reply_reply_list.length; i++) {
				reply_reply_list[i].style.display = "flex";
			}
			document.querySelector("#reply-reply-show-btn-" + replySeqNum).textContent = "답글 숨기기";
		}
	//	해당 댓글의 첫번째 대댓글의 display가 flex이면
		else {
	//		대댓글을 모두 숨겨준다.
			for(let i = 0; i < reply_reply_list.length; i++) {
				reply_reply_list[i].style.display = "none";
			}
	//		텍스트는 답글 보기로 바꿈
			document.querySelector("#reply-reply-show-btn-" + replySeqNum).textContent = "답글 보기";
		}
	}
	else {
		alert("답글이 존재하지 않습니다!");
	}

}
