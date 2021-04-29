<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<jsp:include page="navbar.jsp" flush="false">
	<jsp:param name="title" value="로그인 페이지"/>
</jsp:include>
<div class="container">
	<div class="col-log-4"></div>
	<div class="col-log-4">
		<div class="jumbotron" style="padding-top: 20px;">
			<form action="registerAction.jsp" method="post">
				<h3 style="text-align: center;">회원가입 화면</h3>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="아이디" name="userID" maxlength="20">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" placeholder="비밀번호" name="userPW" maxlength="20">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="이름" name="userName" maxlength="20">
				</div>
				<div class="btn-group" data-toggle="buttons">
					<label class="btn btn-primary active">
						<input type="radio" name="userGender" style="visibility: hidden;" autocomplete="off" value="남자" checked>남자
					</label>
					<label class="btn btn-primary">
						<input type="radio" name="userGender" style="visibility: hidden;" autocomplete="off" value="여자">여자
					</label>
				</div>
				<div class="form-group">
					<input type="email" class="form-control" placeholder="이메일" name="userEmail" maxlength="50">
				</div>
				<div class="form-group">
					프로필 업로드: <input type="text" class="form-control" name="userProfile" maxlength="100" value="abcdef.png">
				</div>
				<input type="submit" class="btn btn-primary form-control" value="회원가입">
			</form>
		</div>
	</div>
<jsp:include page="footer.jsp" flush="false"/>