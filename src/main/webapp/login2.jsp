<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/checkjs2.js"></script>


</head>
<body>
	<form name="loginForm" action="loginOk.jsp" onsubmit="return checkText()">
		아이디:<input type="text" name="id"><br>
		비밀번호:<input type="text" name="pw"><br>
		<input type="submit" value="로그인" onclick="checkText()"><br>
	</form>
</body>
</html>