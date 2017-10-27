window.onload=function(){
		var box = document.getElementById("img_banner");
			var lis = box.children[0].children;
			
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.backgroundImage = "url(shou/" + (i + 1) + ".png)"
				lis[i].onmouseover = function() {
					for (var i = 0; i < lis.length; i++) {
						animate(lis[i], {
							width: 133
						});

					}
					animate(this, {
						width: 401
						
					});
				
//					this.style.display='block';
				}
				lis[i].onmouseout = function() {
					for (var i = 0; i < lis.length; i++) {
						animate(lis[i], {
							width: 172
						});

					}
				}
			}
}
