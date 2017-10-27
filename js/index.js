$(function(){
	$(".china").click(function(){
		$(this).css({
			"border-right":"1px solid #fff",
			"background": "#fff"
		});
		$("#chian").show();
		$("#hotel").hide();
		$("#ao").hide();
		
		
		$(".hotel").css({
			"border-right":"1px solid #ccc",
			"background": "#f3f3f3",
		});

		
			$(".ao").css({
			"border-right":"1px solid #ccc",
			"background": "#f3f3f3",
		});

		
		
		
	});
	
	
	
	
	$(".hotel").click(function(){
		$(this).css({
			"border-right":"1px solid #fff",
			"background": "#fff",
		});
		
		$("#chian").hide();
		$("#hotel").show();
		$("#ao").hide();
		
		$(".china").css({ 
			"border-right":"1px solid #ccc",
			"border-bottom":"1px solid #ccc",
			"background": "#f3f3f3",
		});
		
			$(".ao").css({
			"border-right":"1px solid #ccc",
			"background": "#f3f3f3",
		});

		
		 
	});
	
	
	
	
	$(".ao").click(function(){
		$(this).css({
			"border-right":"1px solid #fff",
			"background": "#fff",
			"border-bottom":"1px solid #ccc",
		});
		
		$("#chian").hide();
		$("#hotel").hide();
		$("#ao").show();
		
		
		
		
		
		$(".china").css({ 
			"border-right":"1px solid #ccc",
			"border-bottom":"1px solid #ccc",
			"background": "#f3f3f3",
		});
		
			$(".hotel").css({
			"border-right":"1px solid #ccc",
			"background": "#f3f3f3",
		});

		
		 
	});
});
