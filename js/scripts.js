$(document).ready(function(){

	$("#form").submit(function(event) {

	// function main() {
		var countTo = parseInt($("input#countTo").val());
		// = /* parseInt */(prompt("What number should we count to?"));

		var countBy = parseInt($("input#countBy").val());
		// = /* parseInt */(prompt("What number should we count by?"))



		if(countTo, countBy) {
			if (countTo <= 0 || countBy <= 0 || countBy > countTo) {
	  // if (countTo <= 0 || countTo == null || countBy <= 0 || countBy == null || countBy > countTo) {
	  	alert ("What were you thinking");
			console.log(countBy);
			console.log(countTo);
	  	}
	  // if (countTo == checkValue("countTo"))
		  else {
		  	countTo = parseInt(countTo);
		    countBy = parseInt(countBy);
		  	for (var i = 0; i <= countTo; i = i + by) {
		  		alert(i);
				// }

				}
			}
		}else {
			alert("You never input a number!!");
		}
   event.preventDefault();

	});
});
