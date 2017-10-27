window.onload = function() {
	var inpuser = document.getElementById("phone");
	var message = document.getElementById("message");
	var pwd = document.getElementById("pwd");
var pwdd = document.getElementById("pwdd");
	var ph1 = document.getElementById("ph1");
	var ph2 = document.getElementById("ph2");
		var pwd1 = document.getElementById("pwd1");
	var pwd2= document.getElementById("pwd2");
	
	
	
	//用户名

	inpuser.onfocus = function() {
		ph1.innerHTML = "请填写手机号！";
		ph1.style.fontSize = "13px";
		ph1.style.color = "#888";
	}
	inpuser.onblur = function() {
			if (/^[0-9]{11}$/.test(this.value)) {
				ph1.innerHTML = "输入正确！";
				ph1.className = "right";
			} else {
				ph1.innerHTML = "请输入正确的手机号！";
				//				ph1.className = "wrong";
				ph1.style.color = "#f00";
			}
		}
		//验证码
	message.onfocus = function() {

		ph2.innerHTML = "请填写收到的短信验证码！";
		ph2.style.fontSize = "13px";
		ph2.style.color = "#888";
	}
	message.onblur = function() {

		ph2.innerHTML = "";

	}
	
	
	
	pwd.onfocus = function() {

		pwd1.innerHTML = "6到30个字符或数字组成";
		pwd1.style.fontSize = "13px";
		pwd1.style.color = "#888";
	}
	pwd.onblur = function() {

		pwd1.innerHTML = "";

	}

	pwdd.onfocus = function() {

		pwd2.innerHTML = "请再次输入密码";
		pwd2.style.fontSize = "13px";
		pwd2.style.color = "#888";
	}
	pwdd.onblur = function() {

		pwd2.innerHTML = "";

	}

	 
}