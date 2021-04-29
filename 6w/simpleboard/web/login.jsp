<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<jsp:include page="navbar.jsp" flush="false">
	<jsp:param name="title" value="로그인 페이지"/>
</jsp:include>
<div class="container">
	<div class="col-log-4"></div>
	<div class="col-log-4">
		<div class="jumbotron" style="padding-top: 20px;">
			<form action="loginAction.jsp" method="post">
				<h3 style="text-align: center;">로그인 화면</h3>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="아이디" name="userID" maxlength="20">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" placeholder="비밀번호" name="userPW" maxlength="20">
				</div>
				<input type="submit" class="btn btn-primary form-control" value="로그인">
			</form>
		</div>
	</div>
	<div class="col-log-4">
	</div>
<jsp:include page="footer.jsp" flush="false"/>