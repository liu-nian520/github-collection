window.onload = function() {
	var container = document.getElementById("container");
	var list = document.getElementById("list");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev")
	var next = document.getElementById("next")

	var index = 1;
	var timer;

	//	点击箭头时按钮变亮
	function showButton() {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == "on") {
				buttons[i].className = "";
				break;
			}
		}
		buttons[index - 1].className = "on";
	}

	//	封装箭头点击函数
	function animate(offset) {
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + 'px';

		if (newLeft > -1000) {
			list.style.left = -6775 + 'px';
		}
		if (newLeft < -6775) {
			list.style.left = -1000 + 'px';
		}
	}

	function play() {
		//		播放,可以一直执行,setTimeOut之后执行一次
		timer = setInterval(function() {
			next.onclick();
		}, 3000);
	}

	function stop() {
		clearInterval(timer);
	}

	next.onclick = function() {
		if (index == 5) {
			index = 1;
		} else {
			index = index + 1;

		}
		animate(-1000);
		showButton();
	}
	prev.onclick = function() {
		if (index == 1) {
			index = 5;
		} else {
			index = index - 1;

		}
		animate(1000);
		showButton();

	}

	//	点击按钮时出现相应图片
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {
			if (this.className == 'on') {
				return;
			}
			
			
			
			//获得对应按钮值
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -1000 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	play();

}