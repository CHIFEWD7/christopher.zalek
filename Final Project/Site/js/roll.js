// Variable to hold request
var request;

// Populate the die type selection sets and initialize quantity values
var dieTypes = [ 2, 3, 4, 6, 8, 10, 12, 20, 100 ];
var set1TypeSelect = document.getElementById('setOneType');

var pting = new Audio();
pting.src = 'audio/beep_1.mp3';

populateTypeOptions( dieTypes, set1TypeSelect );
set1TypeSelect.value = [6];
createSet2TypeList();

init();

function init() {

	document.getElementById('setOneQty').value = 1;
	document.getElementById('setTwoQty').value = 0;
	document.getElementById('rollMod').value = 0;
	updateFormula();
}


// Define die type sets
function populateTypeOptions ( dieList, setName ) {

		for ( var i = 0; i < dieList.length ; i++ ) {
			var option = document.createElement('option');
			option.value = dieList[i];
			option.innerHTML = "d" + dieList[i];
			setName.options.add(option);
		} 
}

function createSet2TypeList() {
	
	var newDieList = [ 2, 3, 4, 6, 8, 10, 12, 20, 100 ];
	var number = document.getElementById('setOneType').value;
	var set2TypeSelect = document.getElementById('setTwoType');

	for(var i = newDieList.length - 1; i >= 0; i--) {
	    if(newDieList[i] == number) {
	       newDieList.splice(i, 1);
	    }
	}

    populateTypeOptions( newDieList , set2TypeSelect );
}

// Set 1 Updates
function updateSet1Type() {
	document.getElementById("setTwoQty").value = 0;
	document.getElementById("modOperand").value = "+";
	document.getElementById("rollMod").value = 0;
	updateFormula();
	removeOptions(document.getElementById("setTwoType"));
	createSet2TypeList();
}


function removeOptions(selectbox) {
    
    var i;
    
    for( i = selectbox.options.length-1 ; i >= 0 ; i-- )
    {
        selectbox.remove(i);
    }
}

// Update formula
function updateFormula() {

	// Die Set variables
	var qSet1 = Number(document.getElementById("setOneQty").value);
	var tSet1 = Number(document.getElementById("setOneType").value);
	var qSet2 = Number(document.getElementById("setTwoQty").value);
	var tSet2 = Number(document.getElementById("setTwoType").value);
	var modValue = document.getElementById("modOperand").value;
	var modNum = Number(document.getElementById("rollMod").value);

	var modifier = 0;
	if (modValue === "+") {
		modifier = modNum;
		//console.log('modifier is positive: ' + modifier);
	} else {
		modifier = (-1) * modNum;
		//console.log('modifier is negative:' + modifier);
	}

	var modOp = " &#43; ";
	var formula = qSet1 + "d" + tSet1;

	// Add a second set, if applicable
	if ( qSet2 > 0 ) {

		formula = formula + " &#43; " + qSet2 + "d" + tSet2;
	}

	// Add the Roll Modifier, if applicable
	if ( modifier != 0 ) {

		// Update the formula
		determineOperand(modifier);
		//console.log("modOp: " + modOp);
		formula = formula + modOp + Math.abs(modifier);
	}

	function determineOperand(modifier) {
		if ( modifier < 0 ) {
			modOp = " &#45; ";
		}
	}

	rollFormula.innerHTML = "Current Roll: " + formula;
	//console.log('formula calculated');

}

// Update Range
function updateRange() {
	
	// Die Set variables
	var qSet1 = Number(document.getElementById("setOneQty").value);
	var tSet1 = Number(document.getElementById("setOneType").value);
	var qSet2 = Number(document.getElementById("setTwoQty").value);
	var tSet2 = Number(document.getElementById("setTwoType").value);
	var modValue = document.getElementById("modOperand").value;
	var modNum = Number(document.getElementById("rollMod").value);

	var modifier = 0;
	if (modValue === "+") {
		modifier = modNum;
	} else {
		modifier = (-1) * modNum;
	}

	var rangeMin = qSet1 + qSet2 + modifier;
	var rangeMax = (qSet1 * tSet1) + (qSet2 * tSet2) + modifier;

	// Deliver the range
	document.getElementById("range").innerHTML = "Range: " + rangeMin + " to " + rangeMax;
	document.getElementById("median").innerHTML = "Median: " + (((rangeMax - rangeMin) / 2) + rangeMin);
}

function parseText( text, ele ) {

	var qty1;
	var x = text;
	var loc = String(ele);
	var min = 0

	min = ( loc == "setOneQty" ) ? 1 : 0;

	qty1 = ( x && !isNaN( x ) ) ? parseInt ( x ) : min;
	qty1 = Math.min ( Math.max (qty1, min), 99 );
	
	document.getElementById(loc).value = qty1;
	document.getElementById(loc).blur();
	updateFormula();
}

function runScript( event, text, ele ) {
    if (event.which == 13 || event.keyCode == 13) {
        
        parseText( text, ele );
        return false;
    }
    
    return true;
}

// Changing a die or modifier quantity
	// Select the content on click
$("#setOneQty, #setTwoQty, #rollMod").click(function(){

	this.select();

});
	// Key press
$("#setOneQty, #setTwoQty, #rollMod").keypress(function(){

	return runScript( event, this.value, this.id );

});
	// Check the Value
$("#setOneQty, #setTwoQty, #rollMod").change(function(){

	parseText( this.value, this.id );

});


// Changing Die Set 1 type
$("#setOneType").change(function(){

	updateSet1Type();

});

// Changing Die Set 2 type
$("#setTwoType").change(function(){

	updateFormula();

});

// Toggling the modifier Operand
$("#modOperand").click(function(){

	toggle(this);

});


// Roll 
// Bind to the click event of the form
$("#roll").click(function(){
	console.log('click');

	// play sound
	pting.play();
	
	rollBonez();

	// From http://stackoverflow.com/questions/5004233/jquery-ajax-post-example-with-php/5004276#5004276
	// Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $("#rollSetup");

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // fire off the request to /form.php  
    // https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwESEZYa2i446Nt3JYHslFRjr7BDx8LBiwxk-0AaOKfX3gY-6Y/exec",
            type: "post",
            data: serializedData
        });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();

    //
});


function rollBonez() {

	// update the Range and Median
	updateRange();

	// Die Set variables
	var qSet1 = Number(document.getElementById("setOneQty").value);
	var tSet1 = Number(document.getElementById("setOneType").value);
	var qSet2 = Number(document.getElementById("setTwoQty").value);
	var tSet2 = Number(document.getElementById("setTwoType").value);
	var modValue = document.getElementById("modOperand").value;
	var modNum = Number(document.getElementById("rollMod").value);

	var modifier = 0;
	if (modValue === "+") {
		modifier = modNum;
	} else {
		modifier = (-1) * modNum;
	}
	
	// Info variables
	var subtotalSet1 = 0;
	var subtotalSet2 = 0;
	var subtotals = [ subtotalSet1, subtotalSet2 ]
	var total = 0;
	var modOp = " &#43; ";
	var formula = qSet1 + "d" + tSet1;


	var rollFormula =document.getElementById("rollFormula");
	var bonezTotal = document.getElementById("bonezTotal");
	var resultFormula =document.getElementById("resultFormula");
	var resultMedian = document.getElementById("resultMedian");
	var rollPercent = document.getElementById("rollPercent");
	var detailsDiv = document.getElementById("rollDetails");
	var totalString = "( "

	// Percentage variables
	var percentage = 0
	var adjTotal = 0;
	var numInt = 1 + ( qSet1 * tSet1 ) + ( qSet2 * tSet2 ) - qSet1 - qSet2;

	// Roll the first set
	detailsDiv.innerHTML = "";
	detailsDiv.innerHTML += "<b>" + qSet1 + "d" + tSet1 + ":</b>" + " ( ";
	// Change the roll details box height to 'auto'
	$("#rollDetails").addClass("results-details");

	rollSet( qSet1, tSet1, 1 );

	// Roll a second set, if applicable
	if ( qSet2 > 0 ) {
		detailsDiv.innerHTML += "<b>" + qSet2 + "d" + tSet2 + ":</b>" + " ( ";
		rollSet( qSet2, tSet2, 2 );
		formula = formula + " &#43; " + qSet2 + "d" + tSet2;
	}

	// Add the Roll Modifier
	if ( modifier != 0 ) {

		// Update the formula
		determineOperand(modifier);
		formula = formula + modOp + Math.abs(modifier);
		detailsDiv.innerHTML += "<p><b>Modifier:</b> " + modOp + Math.abs(modifier) + "</p>";
		totalString = totalString + " &plus; [ " + modifier + " ] ";
	}


	function determineOperand(modifier) {
		if ( modifier < 0 ) {
			modOp = " &#45; ";
		}
	}

	total = subtotalSet1 + subtotalSet2 + modifier;

	// Determine the percentage of the roll range
	calculatePercent();

	// Deliver the results
	bonezTotal.innerHTML = total;
	resultFormula.innerHTML = "Result (" + formula + "):";
	// rollPercent.innerHTML = percentage.toFixed(0) + "%";

	if ( qSet2 > 0 || ( modNum > 0 )) {
		detailsDiv.innerHTML += "<p><b>Total:</b> " + totalString + " ) = " + total + "</p>";
	}
	
	// rolls a Set of Dice
	function rollSet( q, t, setNum ) {
		var dieRoll = 0;
		var rollTally = [];
		var num = 0;

		for ( var i = 0 ; i < q ; i++ ) {
			dieRoll = getRandomIntInclusive(1,t);
			rollTally.push(dieRoll);
		}

		getSubtotal( rollTally, setNum );

	}

	function getSubtotal( rollTally, setNum ) {
		rollList = rollTally;
		x = rollList.length;
		setNumber = setNum;
		subtotal = 0;
			
		for ( var i = 0 ; i < x ; i++ ) {
			y = rollList[i];
			subtotal += y;
			detailsDiv.innerHTML += y;

			if ( i == ( x - 1) ) {
				detailsDiv.innerHTML += " ) = " + subtotal + "<p/>";
			} else {
				detailsDiv.innerHTML += " + ";
			}
		}

		if ( setNumber == 1 ) {
			subtotalSet1 = subtotal;
			totalString = totalString + subtotalSet1;
		} else {
			subtotalSet2 = subtotal;
			totalString = totalString + " &plus; " + subtotalSet2;
		}

	}
	
	function calculatePercent() {
		adjTotal = 1 + subtotalSet1 + subtotalSet2 - qSet1 - qSet2;
		percentage = ( 100 * ( adjTotal / numInt ) );
	}
	
}

// Determine the character to display for the formula's operand 
/*function determineOperand(modifier) {
	if ( modifier < 0 ) {
		modOp = " &#45; ";
	}
}
*/

// Toggle the modifier Operand
function toggle(button) {
  if (button.value == "+") {
    button.value = "-";
  } else {
    button.value = "+";
  }
  updateFormula();
  //console.log('mod operand was toggled');
}

// Returns a random integer between min (included) and max (included)
function getRandomIntInclusive(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}


