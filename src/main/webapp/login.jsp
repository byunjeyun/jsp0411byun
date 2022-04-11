<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<script type="text/javascript" src="js/checkForm.js"></script>
</head>
<body>
	<form name="loginForm" action="loginOk.jsp" onsubmit="return loginCheck()">
		아이디:<input type="text" name="id"><br>
		비밀번호:<input type="text" name="pw"><br>
		<input type="submit" value="로그인" onclick="loginCheck()"><br>
	</form>
</body>
</html>