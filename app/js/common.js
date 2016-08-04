$(function() {

	$("a[href=#callback]").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

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
			$('.success').addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass("visible");
				$.magnificPopup.close();
			}, 2500);
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

(function (d, w, c) {
	(w[c] = w[c] || []).push(function() {
		try {
			w.yaCounter37668435 = new Ya.Metrika({
				id:37668435,
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
			});
		} catch(e) { }
	});

	var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () { n.parentNode.insertBefore(s, n); };
	s.type = "text/javascript";
	s.async = true;
	s.src = "https://mc.yandex.ru/metrika/watch.js";

	if (w.opera == "[object Opera]") {
		d.addEventListener("DOMContentLoaded", f, false);
	} else { f(); }
})(document, window, "yandex_metrika_callbacks");

$("#map_canvas").load("test.php", { 'choices[]': ["Jon", "Susan"] } );










