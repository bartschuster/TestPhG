(function($) {
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({
				init: function(loaded, total) {},
				loaded: function(img, loaded, total) {},
				loaded_all: function(loaded, total) {}
			}, option);
			var total = imgArr.length;
			var loaded = 0;
			
			setting.init(0, total);
			for(var i in imgArr) {
				imgList.push($("<img />")
					.attr("src", imgArr[i])
					.load(function() {
						loaded++;
						setting.loaded(this, loaded, total);
						if(loaded == total) {
							setting.loaded_all(loaded, total);
						}
					})
				);
			}
			
		}
	});
})(jQuery);


$(function() {
	$.preload([
		"images/bg_manufactured.png",
		"images/ajax-loader.gif",
		"images/home_bg.jpg",
		"images/home_sprite_frei.png",
		"images/bg_content_border.png",
		"images/projects_bg.jpg",
		"images/design_bg.jpg",
		"images/design_sprite_frei.png",
		"images/design_frei.png",
		"images/technik_bg.jpg",
		"images/technik_sprite_frei.png",
		"images/technik_frei.png",
		"images/technik_content.png",
		"images/lab_bg.jpg",
		"images/lab_sprite_frei.png",
		"images/lab_frei.png",
		"images/about_bg.jpg",
		"images/about_sprite_frei.png",
		"images/jobs_bg.jpg",
		"images/bg_trigger_status.png",
		"images/bg_project-slider_nav.png",
		"images/bg_project-slider_close.png",
		
		], {
		init: function(loaded, total) {
			$("#top, #bottom, #home, #projects, #design, #technik, #lab, #about, #contact").hide();
			$("#loadingtext").html("Inhalte werden geladen... bitte warten");
		},
		loaded: function(img, loaded, total) {
			var loader = 245-((loaded/total)*245);
			var prozent = Math.round(loaded/total*100);
			$("#loadingtext").html("Lade jede Menge Inhalte: "+prozent+"%");
			//$("#loadingtext").html("Lade jede Menge Inhalte: "+loaded+"/"+total);
			$("#loadingbar").css({"background-position" : "0px "+loader+"px"});
		},
		loaded_all: function(loaded, total) {
			$("#loadingtext").html("Alle Inhalte geladen.<br />Ready for Relaunch!");
			$("#preloader").delay(500).fadeOut();
			$("#top, #bottom, #home, #projects, #design, #technik, #lab, #about, #contact").delay(1000).fadeIn("slow");
		}
	});

});
