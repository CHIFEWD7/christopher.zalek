// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


$('#fahrenheit_to_celsius').on('click', function () {

	/// reset the page
	resetPage();

	// grab the user input value
	var userValue = $('#temperature').val();
	
	// validate the input
	if (isNaN(userValue) || (userValue == '')) {

		displayError();

	} else {

	// run the getCelsius function and store the result in a converted value
	var convertedValue = getCelsius(userValue);

	// display the result
	$('#result').html(userValue + '&deg;F = ' + convertedValue + '&deg;C');
	clearField();

	// change the color of the background based on fahrenheit
	changeBackgroundColor(userValue);

	}

});


$('#celsius_to_fahrenheit').on('click', function () {

	// reset the page
	resetPage();

	// grab the user input value
	var userValue = $('#temperature').val();
	
	// validate the input
	if (isNaN(userValue) || (userValue == '')) {

		displayError();

	} else {

	// run the getFahrenheit function and store the result in a converted value
	var convertedValue = getFahrenheit(userValue);

	// display the result
	$('#result').html(userValue + '&deg;C = ' + convertedValue + '&deg;F');
	clearField();

	// change the color of the background based on fahrenheit
	changeBackgroundColor(convertedValue);

	}
	
});

function getCelsius(fahrenheit) {
	
	fahrenheit = parseFloat(fahrenheit);

	// convert
	var celsius = (fahrenheit - 32) / 1.8;
	celsius = celsius.toFixed(2);

	return celsius;
	
}

function getFahrenheit(celsius) {

	celsius = parseFloat(celsius);

	// convert
	var fahrenheit = 1.8 * celsius + 32;
	fahrenheit = fahrenheit.toFixed(2);

	return fahrenheit;

}

function clearField() {

	$('#temperature').val('');

}

function displayError() {
	
	$('.error-message').show();
	$('#temperature').addClass('error');

}

function resetPage() {

	// remove any error indications
	$('.error-message').hide();
	$('#temperature').removeClass('error');

	// remove the color background of <body>
	$('body').removeClass();

}

function changeBackgroundColor(fahrenheit) {

	if (fahrenheit < 45) {

			$('body').addClass('cold');

		} else if (fahrenheit < 70) {

			$('body').addClass('moderate');

		} else {

			$('body').addClass('warm');

		}
}