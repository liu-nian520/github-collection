//模拟倒计时
			//打开页面后，在倒计时发布会时间
			//1、创建一个当前日期的对象设计一个定时器，没一毫秒刷新一次div内容
			//2、获取时间差
			//3 、
			window.onload = function() {
				//定义一个定时器
				var div = document.getElementById("time1");
				setInterval(function() {
					var futureTime = new Date("2017/10/08 01:00:00");
					var nowTime = new Date();
					var sumSM = futureTime.getTime() - nowTime.getTime();
					//天的获取
					var day = parseInt(sumSM / 1000 / 60 / 60 / 24);
					//小时,完整的24小时都给天，其他都给天
					var hour = parseInt(sumSM / 1000 / 60 / 60 % 24);
					//分
					var min = parseInt(sumSM / 1000 / 60 % 60);
					//秒
					var second = parseInt(sumSM / 1000 % 60);

					//问题处理：所有的时间当小于十的时候自动补零，毫秒值双补零
					day = day < 10 ? "0" + day : day;
					hour = hour < 10 ? "0" + hour : hour;
					min = min < 10 ? "0" + min : min;
					second = second < 10 ? "0" + second : second;
				
					div.innerHTML = "距离活动结束还有:" + day + "天" + hour + "时" + min + "分" + second + "秒"
//					  
//					  div.style.fontSize='15px';
					  
					  
				}, 1);
			}