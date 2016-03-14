// 1.	Slide the header element up when it is clicked on.
$('header').click(function(){
 	$(this).slideUp('slow');
});

// 2.	Remove the purplebox class from everything.
$('#box2').click(function(){
	$('.purplebox').removeClass('purplebox');
});	

// 3.	Hide all of the div’s in #row4
$('#box6').click(function(){
	$('#row4 div').hide(); // <-- hiding the divs, but the article is technically a div...
	$('#box14').show(); // <-- showing the article within row 4 to display the removal of the purplebox class
}); 	

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('#box8').click(function(){
	$('.add-para').append('<p>I have been added</p>');
});

// 5.	Add a class in your css and add it to all items with the class .box
$('#box10').click(function(){
	$('.box').removeClass('article-bkg');
	$('.box').addClass('sub-box');
});

// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').click(function(){
	$('footer').show();
});

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box12').click(function(){
	$('#box3 span').addClass('beautiful-span');
});

// 8.	Add a unique class to your CSS and add it to the articles in #row1
$('#box1').click(function(){
	$('#row1 article').addClass('box-logo');
});

// 9.	Change the background color of all the articles
$('#box16').click(function(){
	$('article').addClass('article-bkg');
});

// 10.	Change the font color of all the articles in row 2
$('#box13').click(function(){
	$('#row2 article').addClass('article-font');
});

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
$('#box15').click(function(){
	$('h4').siblings('span').hide();
});

// 12.	Clicking on #box7 should hide the span within the h2
$('#box7').click(function(){
	$(this).find('span').hide();
});

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$('#box5').click(function(){
	$('#box12').prepend('<h3>Hello there!</h3>');
});

// 14.	SlideUp all the h1s on the page
$('#box9').click(function(){
	$('h1').slideUp('fast');
});

// 15. Add the selected class [already in the CSS] to the divs in #row4
$('#box11').click(function(){
	$('#row4 div').addClass('selected');
});

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$('#reset').click(function(){
	console.log('reset button clicked');
	$('.selected').removeClass('selected');

	// set the opacity of the header, footer and .box class to zero
	$('header, .box, footer').fadeTo(0, 0.0);
	// show all hidden elements
	$('header, .box, footer').show();
	// fade in header, footer and .box class elements
	$('header, .box, footer').fadeTo(1000, 1.5);
});

// Need a way to hide the footer
$('#box4').click(function(){
	$('footer').hide();
});

// hide box 11's span by selecting the h4
$('#box11 h4').click(function(){
	$('#box11 span').hide();
})