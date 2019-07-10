$(document).ready(function(){

	var pull_menu = $("#nav_toggle");
	var nav_menu = $("nav ul");


		pull_menu.on("click", function(e){
			e.preventDefault();
			//отмена дефолтного поведения браузера
			
			nav_menu.slideToggle();
			//скрыть/открыть меню

			$(this).toggleClass('menu__button--active');
			
			$(window).resize(function(){
				var w = $(window).width();
				if(w > 640 && nav_menu.is(':hidden')){
					nav_menu.removeAttr('style');
				}
			})
			//отмена display:none при работе slideToggle, когда ширина экрана >1040
		})

		var w = $(window).width();
			if ( w < 992) {
				$('.menu a').on("click", function(){
					nav_menu.slideToggle();
				})
			}
		
		//slider
		$("#slider__content").owlCarousel({
			singleItem:true,
			items: 1,
			navigation: true,
			dots: true,
			theme: "slider-theme",
			slideSpeed: 900
		});
		
		//scroll speed
		$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    	highlightSelector:"nav a",
	    	scrollSpeed: 700,
  			scrollingEasing: "easeInOutQuint"
		});
		$("a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    	highlightSelector:"arrow",
	    	scrollSpeed: 700,
  			scrollingEasing: "easeInOutQuint"
		});

});




  
     
      	
     
