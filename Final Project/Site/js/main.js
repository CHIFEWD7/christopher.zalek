$('.hamburger-icon').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');

  //if hamburger-icon is open (x), then show the main-nav
  if ( $(this).hasClass('active') ){
  	$('.main-navigation').show();
  }else{
  	  // if not, then hide the main-nav
  	$('.main-navigation').hide();
  }
  
});

 //close the hamburger menu (x) when resizing the window ??

$(window).resize(function(){
	//console.log($(window).width());

	if ($(window).width() >= 780) {
		//console.log('show the main nav');
		$('.main-navigation').show();
  		$('.hamburger-icon').hide();
	} else {
		//console.log('hide the main nav');
  		$('.main-navigation').hide();
		$('.hamburger-icon').show();
		if ( $('.hamburger-icon').hasClass('active') ){
  			$('.hamburger-icon').toggleClass('active');
  		}
	}

});

$(window).ready(function(){
	console.log($(window).width());

	if ($(window).width() >= 780) {
		//console.log('show the main nav');
		$('.main-navigation').show();
  		$('.hamburger-icon').hide();
	} else {
		//console.log('hide the main nav');
  		$('.main-navigation').hide();
		$('.hamburger-icon').show();
	}

}); 


