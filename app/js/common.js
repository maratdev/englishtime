$(function() {



	$(".scroll").click(function(event){
//Перехватываем обработку по умолчанию события нажатия мыши
		event.preventDefault();

//Получаем полный url - например, mysitecom/index.htm#home
		var full_url = this.href;

//Разделяем url по символу # и получаем имя целевой секции - home в адресе mysitecom/index.htm#home
		var parts = full_url.split("#");
		var trgt = parts[1];

//Получаем смещение сверху для целевой секции
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

//Переходим в целевую секцию установкой позиции прокрутки страницы в позицию целевой секции
		$('html, body').animate({scrollTop:target_top}, 1500);
	});


	//Анимация при скроле
	$(".mouse-icon").click(function() {
		$("html, body").animate({ scrollTop: $(".service").height()+290 }, "slow");
		return false;
	});

	$(".top_wrapper").animated("zoomIn");
	$(".reasons .row h2").animated("fadeInLeft");
	$(".item").animated("fadeIn");
	$(".results .item-circle i").animated("rotateIn");
	$(".results .item-circle p").animated("zoomIn");


	//Валидатор формы
	$('#myForm').validator();

	//Mobile Menu Toggle Button
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	//Header во весь экран
	function heightDetect(){
		$("header").css("height", $(window).height());
	}

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//Меню
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")){
			$(".top_text").removeClass("h_opacity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		}
		else{
			$(".top_text").addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(document).ready( function() {
		//enabling stickUp on the '.navbar-wrapper' class
		$('.top_line').stickUp({
			parts: {
				0:'home',
				1:'service',
				2: 'reasons',
				3: 'work',
				4: 'results',
				5: 'reviews',
				6: 'contacts'
			},
			itemClass: 'menuItem',
			itemHover: 'active'
		});


	});

});


var card = $(".card");

$(window).on("mousemove",function(e) {
	var ax = -($(window).innerWidth()/2- e.pageX)/100;
	var ay = ($(window).innerHeight()/2- e.pageY)/100;
	card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");
});







