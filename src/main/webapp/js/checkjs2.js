/**
 * 
 */
 
 function checkText()
 {
	var f = document.loginForm;
	
	var jId = f.id.value;
	var jPw = f.pw.value;
	
	var regExId = /^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	
	var regExPw =/^[0-9]*$/;


	if(!regExId.test(jId))
	{
		alert("아이디는 숫자로 시작할 수 없습니다.");
		f.id.focus;
		return false;
	}
	
	if(!regExPw.test(jPw))
	{
		alert("비밀번호는 숫자만 입력 가능합니다.");
		f.pw.focus;
		return false;
	}
}


