$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


			// get current URL path and assign 'active' class
			// var pathname = window.location.pathname;
			// $('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');

			var url = window.location;
		 // Will only work if string in href matches with location
		 $('ul.nav a[href="'+ url +'"]').parent().addClass('active');

		 // Will also work for relative and absolute hrefs
		 $('ul.nav a').filter(function() {
		     return this.href == url;
		 }).parent().addClass('active');



});
