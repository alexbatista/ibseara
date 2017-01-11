/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp9').waypoint(function() {
		$('.wp9').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.wp11').waypoint(function() {
		$('.wp11').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp12').waypoint(function() {
		$('.wp12').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});
	$('.wp13').waypoint(function() {
		$('.wp13').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.wp14').waypoint(function() {
		$('.wp14').addClass('animated fadeInDown');
	}, {
		offset: '50%'
	});
	$('.wp15').waypoint(function() {
		$('.wp15').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.wp16').waypoint(function() {
		$('.wp16').addClass('animated fadeInDown');
	}, {
		offset: '50%'
	});
	$('.wp17').waypoint(function() {
		$('.wp17').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp18').waypoint(function() {
		$('.wp18').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp19').waypoint(function() {
		$('.wp19').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});
	$('.wp20').waypoint(function() {
		$('.wp20').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.wp21').waypoint(function() {
		$('.wp21').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.wp22').waypoint(function() {
		$('.wp22').addClass('animated fadeInDown');
	}, {
		offset: '50%'
	});
	$('.wp23').waypoint(function() {
		$('.wp23').addClass('animated fadeInLeft');
	}, {
		offset: '50%'
	});
	$('.wp24').waypoint(function() {
		$('.wp24').addClass('animated fadeInRight');
	}, {
		offset: '50%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

// $(function() {
//
// 	$('a[href*=#]:not([href=#])').click(function() {
// 		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html,body').animate({
// 					scrollTop: target.offset().top
// 				}, 2000);
// 				return false;
// 			}
// 		}
// 	});
//
// });

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	$('#vasSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

/************** parallax effect *********************/
// $(document).ready(function() {
// 	$("#vas").parallax({
// 	  // calibrateX: false,
// 	  // calibrateY: true,
// 	  invertX: true,
// 	  invertY: true,
// 	  limitX: false,
// 	  limitY: false,
// 	  scalarX: 10,
// 	  scalarY: 20,
// 	  frictionX: 0.2,
// 	  frictionY: 0.8,
// 	  originX: 0.0,
// 	  originY: 1.0
// 	});
// 	$("#hope").parallax({
// 	  // calibrateX: false,
// 	  // calibrateY: true,
// 	  invertX: true,
// 	  invertY: true,
// 	  limitX: false,
// 	  limitY: false,
// 	  scalarX: 10,
// 	  scalarY: 20,
// 	  frictionX: 0.2,
// 	  frictionY: 0.8,
// 	  originX: 0.0,
// 	  originY: 1.0
// 	});
// });

$('section.bgParallax').each(function(){
	var $obj = $(this);
	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed'));
		var bgpos = '50% '+ yPos + 'px';
		$obj.css('background-position', bgpos );
	});
});
