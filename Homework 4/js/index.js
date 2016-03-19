// Create a global variable for the total
var total = 0

// Create a function you can run when you submit the field Hint: .submit() in jQuery
$('form').submit(function() {

	// assuming the user only has access to number and '.' keys
	var itemCost = $('#newEntry').val();
	itemCost = parseInt(itemCost);

	// clear the form
		$('#newEntry').val('');
	
	// if the itemCost is greater than zero...
	if (itemCost > 0) {

		// add the item cost as a cell on the table
		addToReceipt(itemCost);

		//update the total
		updateTotal(itemCost);

		// stop the form from refreshing the page
		return false;
		
	} else {

		return false;
	}
	
});


function addToReceipt(itemCost) {

	//remove the current '+' symbol
	removePlus();

	// create a new table td
	$('#entries').append('<tr><td></td><td>+ $' + formatPrice(itemCost) + '</td></tr>');

}

function updateTotal(itemCost) {

	// update the total cost
	total = total + itemCost;
	$('#total').html('$' + formatPrice(total));

} 

function formatPrice(price) {

	formattedPrice = price.toFixed(2);
	return formattedPrice;

}

function removePlus () {

	var lastItem = $('td:last').text();
	lastItem = lastItem.substring(2);
	$('td:last').html(lastItem);

}











// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
