$(document).ready(function(){
	
	var tlIntro = new TimelineMax();

	tlIntro.from(".cta-oferta", 1 , {left: -150 , ease: Bounce.easeOut}, "+=0.0");
	tlIntro.from(".c3-container", 1 , {bottom: -150 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.from(".car-name", 1 , {opacity: 0 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.to(".car-name", 1 , {opacity: 1 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.from(".car-price", 0.2 , {opacity: 0 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.to(".car-price", 1 , {opacity: 1 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.from(".car-price-2", 1 , {opacity: 0 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.to(".car-price-2", 1 , {opacity: 1 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.from(".tasa", 0.5 , {bottom: -150 , ease: Power3.easeOut}, "+=0.0");
	tlIntro.from(".button-cta", 1 , {opacity: 0 , ease: Power2.easeOut}, "+=0.5");
	tlIntro.to(".button-cta", 1 , {opacity: 1 , ease: Power2.easeOut}, "+=0.5");




		   
		   
		   
		   
		   
	tlMaster
		.add(tlIntro);
});
		/*.add(tlSlogan , 7)
		.add(tlAnuncio , 12);	   
		*/




	/*
	var tlIntro = new TimelineMax();

	tlIntro.to("#logo_fortunato_grande", 1 , {opacity: 0 , ease:Power1.easeInOut} , "+=1.5")
		   .from("#titulo_c4_grande", 1 , {opacity: 0 , ease:Power1.easeInOut} , "-=0.5")
		   .to("#c4_grande", 3 , {left: -100, ease:Power1.easeInOut} , "-=1")
		   .to("#c4_grande", 2 , {left: -350, ease:Power1.easeInOut})
		   .to("#c4_grande", 1 , {opacity: 0, ease:Power1.easeInOut} , "-=0.7")
		   .to("#titulo_c4_grande", 1 , {opacity: 0 , ease:Power1.easeInOut} , "-=1");


	var tlSlogan = new TimelineMax();
		   
	tlSlogan.to(".slogan_background", 0.5 , {opacity: 1 , ease:Power1.easeInOut})
			.to("#slogan_01", 0.2 , {opacity: 1 , ease:Power1.easeInOut})
			.to("#slogan_02", 0.2 , {opacity: 1 , ease:Power1.easeInOut})
			.to("#slogan_03", 0.2 , {opacity: 1 , ease:Power1.easeInOut} , "+=0.5")
			.to("#slogan_04", 0.2 , {opacity: 1 , ease:Power1.easeInOut})
			.to("#slogan_05", 0.2 , {opacity: 1 , ease:Power1.easeInOut} , "+=0.5")
			.to("#slogan_06", 0.2 , {opacity: 1 , ease:Power1.easeInOut})
			.to(".slogan_background , #slogan_06", 1 , {opacity: 0 , ease:Power1.easeInOut}, "+=1");
	
	var tlAnuncio = new TimelineMax();

	tlAnuncio.from("#uno", 0.35 , {top: -150 , ease:Power1.easeInOut})
			 .from("#dos", 0.35 , {bottom: -600 , ease:Power1.easeInOut}, "-=0.35")
			 .from("#tres", 0.35 , {bottom: -600 , ease:Power1.easeInOut}, "-=0.35");
	
	//Timeline Master

	var tlMaster = new TimelineMax();

	tlMaster
		.add(tlIntro)
		.add(tlSlogan , 7)
		.add(tlAnuncio , 12);
	*/	
	/*		
	var variable = getElementById("xxx");

	var variable = $(".xxx");

	$(".xxx").animate({"width":"+200px"},300);
	*/






