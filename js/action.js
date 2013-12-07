var trigger = 0

$(document).ready(function() {
	
	$("#nav").localScroll();
	$("#nav li").click(function(){
		$("#nav li").removeClass("active");
		$(this).addClass("active");
	});
	
	$("#thumbscreen").slides({
		container: "thumbscreen-slides",
		animationtype: 'fade',
		generateNextPrev: true,
		pagination: false
	});

	$("#INthumbscreen").slides({
	
		container: "INthumbscreen-slides",
		animationtype: 'fadeIn',
		generateNextPrev: true,
		pagination: false
	});
	
	$("#HOthumbscreen").slides({
		container: "HOthumbscreen-slides",
		animationtype: 'fade',
		speed: 'slow',
		generateNextPrev: true,
		pagination: false
	});

	$("#DEthumbscreen").slides({
		container: "DEthumbscreen-slides",
		generateNextPrev: true,
		pagination: false
	});

	

	});


