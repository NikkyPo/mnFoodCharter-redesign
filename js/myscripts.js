$(document).ready(function() {

	var champions = [
	"<h3><strong>NADJA BERNECHE:</strong><h3><h5>HEALTHY COMPREHENSIVE PLAN DIRECTOR, <br> TERRA SOMA FOOD INFRASTRUCTURE</h5><h6>'This is fun and important work, because policy affects all lives, and I love to see people understand policy processes, find their voices, and get excited about policy change'</h6>", 
	"<h3><strong>AMANDA SHONGO:<strong><h3><h5> STATEWIDE HEALTH IMPROVEMENT PROGRAMS (SHIP) COORDINATOR, <br> LEECH LAKE BAND OF OJIBWE FOOD ACCESSIBILITY<h5><h6>'My passion for food access, sustainable food systems, and food sovereignty stems from my personal history growing up in extreme poverty'</h6>", 
	"<h3><strong>MARY JO FORBOD:</strong><h3><h5> COORDINATOR, MORRIS HEALTHY EATING, <br> UNIVERSITY OF MINNESOTA, MORRIS</h5><h6>'We want to make healthy foods accessible and affordable to everyone in our community, regardless of income, age, or where they live'</h6>", 
	"<h3><strong>REGINALDO HASLETT-MARROQUIN:</strong><h3><h5> CHIEF STRATEGY OFFICER, <br> MAIN STREET PROJECT FOOD INFRASTRUCTURE<h5><h6>'Food is not just about feeding people. It's about ensuring folks take ownership and control of systems and infrastructure'</h6>"
	]; //create an array
	var images = ["champion1.jpg", "champion2.jpg", "champion3.jpg", "champion4.jpg"];   //results are stored in different variable

	var x = Math.floor(Math.random() * images.length);

	$("#random").html(champions[x]);
	// floor function rounds number down

	$("#footer").css({"background-image": "url(img/" + images[x] + ")"}); //this chunk creates a random image

		
});