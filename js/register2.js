$(function(){
	$("#check").click(function(){
		   $("#ca").fadeToggle(1);
	});
	
	$(".habbit").click(function(){
		   $(".hab").fadeToggle(1);
	});
	
	$("#show").click(function(){
		   $(".bott").fadeToggle(1);
	});
	

	$("#news").click(function(){
		$(".bot").fadeToggle(1);
		$(".top").css("border","1px solid #fff");
		$(".news").css("border","1px solid #ccc");
	});
});


