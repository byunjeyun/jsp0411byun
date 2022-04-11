/**
 * 
 */
 
 
function gradeCheck()
{
	var f1 = document.gradeForm;
	alert ("추천도서 : " + f1.book.value+ "\n" + "평점 :" + f1.grade.value);
}


function loginCheck()
{
	var f = document.loginForm;
	
	for(i=0; i<f.id.value.length; i++)
	{
		var ch = f.id.value.charAt(i); //대문자 판별 설정;
		if((ch < 'A' || ch>'Z')&&(ch>'a'||ch<'z')&&(ch>'0'||ch<'9'))
		{
			alert("아이디는 모두 대문자로 입력하여야 합니다.");
			f.id.focus();
			return false;
		}
	}
	
	if(f.id.value == "") // 널 값 경고 
	{
		alert ("아이디는 필수 입력 사항입니다.");
		f.id.focus();
		return false;
	}
	else if(f.id.value.length <4 || f.id.value.length >15) // 길이 설정
	{
		alert("아이디는 4~15자 사이로 입력해주세요")
		f.id.focus();
		return false;
	}
	else if(f.id.value.length <4 || f.id.value.length >15) // 길이 설정
	{
		alert("아이디는 4~15자 사이로 입력해주세요")
		f.id.focus();
		return false;
	}
	else if(f.pw.value.length <6 || f.pw.value.length >10) // 길이 설정
	{
		alert("패스워드는 6~9자 사이로 입력해주세요")
		f.pw.focus();
		return false;
	}
	else if(isNaN(f.pw.value)) // 숫자만 입력 가능
	{
		alert("비밀번호는 숫자만 입력가능합니다.")
		f.pw.focus();
		return false;
	}
	
	
	
}