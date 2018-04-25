$(document).ready(function() {

	var champions = [
	"<h2><strong>NADJA BERNECHE:</strong><h2> <br> HEALTHY COMPREHENSIVE PLAN DIRECTOR, <br> TERRA SOMA FOOD INFRASTRUCTURE", 
	"<h2><strong>AMANDA SHONGO:<strong><h2> <br> STATEWIDE HEALTH IMPROVEMENT PROGRAMS (SHIP) COORDINATOR, <br> LEECH LAKE BAND OF OJIBWE FOOD ACCESSIBILITY", 
	"<h2><strong>AMANDA SHONGO:</strong><h2> <br> STATEWIDE HEALTH IMPROVEMENT PROGRAMS (SHIP) COORDINATOR, <br> LEECH LAKE BAND OF OJIBWE FOOD ACCESSIBILITY", 
	"<h2><strong>REGINALDO HASLETT-MARROQUIN:</strong><h2> <br> CHIEF STRATEGY OFFICER, <br> MAIN STREET PROJECT FOOD INFRASTRUCTURE"
	]; //create an array
	var images = ["champion1.jpg", "champion2.jpg", "champion3.jpg", "champion4.jpg"];   //results are stored in different variable

	var x = Math.floor(Math.random() * images.length);

	$("#random").html(champions[x]);
	// floor function rounds number down

	$("#footer").css({"background-image": "url(img/" + images[x] + ")"}); //this chunk creates a random image

		
});