 // get info from google document

$(document).ready(function() {
	$.getJSON('https://spreadsheets.google.com/feeds/list/1VP_dEv7GuxVji61PyA9Sx7I75HyioR07EcmDQhgT80g/od6/public/values?alt=json', function(data) {
		
		// count the number or rows
		var dataRows;
		dataRows = (data.feed.entry.length - 1);

		// assign this number to the home page roll counter
		if (dataRows > 0){

			// populate the page roll info
			$('.roll-counter div p').html('<b>Gogobones rolls to date:</b>');
			$('#ggbRollCount').html(dataRows);
		}
	});
});