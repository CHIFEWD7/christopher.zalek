$('.hamburger-icon').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');

  //if hamburger-icon is open (x), then show the main-nav
  if ( $(this).hasClass('active') ){
  	$('.main-navigation').show();
  	$('.main-navigation').css('display: block');
  }else{
  	  // if not, then hide the main-nav
  	$('.main-navigation').hide();
  	$('.main-navigation').css('display: none');
  }
  
});

/* close the hamburger menu (x) when resizing the window

$(window).resize(function(){
    // hamburger-icon is "active"
    if ( $('.hamburger-icon').hasClass('active') ){

    	console.log('hambuger menu is open')
  		$('.hamburger-icon').toggleClass('active');
    }

});
*/


