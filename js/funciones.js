jQuery(document).ready(listo);

function listo()
{
	jQuery(".hamb").clik(function(e){
	e.preventdefaut();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times")
	});
	jQuery("header .container nav").clik(function){
		jQuery("header .container nav").removeClass("open");
		jQuery("hamb i").removeClass("fas-time");
		var dev=jQuery(this).attr("href");
		jQuery("html,body").animate({
			"scrolltop":jQuery(dev).offset().top-76
		})
	}
}