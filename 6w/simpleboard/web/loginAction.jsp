<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ page import="dao.UserDAO" %>
<%@ page import="java.io.PrintWriter" %>
<jsp:useBean id="user" class="dto.UserDTO" scope="page" />
<jsp:setProperty name="user" property="userID" />
<jsp:setProperty name="user" property="userPW" />
<%
	PrintWriter script = response.getWriter();
	script.println("<script>");
	String userID = null;
	if(session.getAttribute("userID") != null) {
	    userID = (String) session.getAttribute("userID");
	}
	if(userID != null) {
	    script.println("alert('이미 로그인이 되어있습니다')");
	    script.println("location.href = 'index.jsp'");
	} else {

		UserDAO userDAO = new UserDAO();
		int result = userDAO.login(user.getUserID(), user.getUserPW());

		if (result == 1) {
			session.setAttribute("userID", user.getUserID());
			script.println("location.href = 'index.jsp'");
		} else if (result == 0) {
			script.println("alert('비밀번호가 틀립니다')");
			script.println("history.back()");
		} else if (result == -1) {
			script.println("alert('존재하지 않는 아이디입니다.')");
			script.println("history.back()");
		} else if (result == -2) {
			script.println("alert('데이터 베이스 오류가 발생했습니다.')");
			script.println("history.back()");
		}
	}

	script.println("</script>");
%>