// Author: Peter Himmelreich, with help from Thinkful.com mentor, Justin Aguilar.
// Website: averygoodplanet.com
// Email: averygoodplanet@gmail.com
// 
// RE: COMMENTSI'm new to jQuery and I've used a lot of comments below as a learning exercise--I recognize that I've used more comments than is recommended by normal style guidelines.
//
// RE: RUNNING WEBPAGE This has to be loaded into Chrome from a public link (e.g. Dropbox or live website) for the jQuery to work.

$(document).ready(function () {  // Waits till DOM is loaded "document ready" to run jQuery.

	//This section determines today's day of week for use in #day_of_week, upper-left hand corner of the webpage, e.g. "Happy Saturday."
	var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = new Date();
	var thisDay = days_of_week[today.getDay()];
	$("#day_of_week").text(thisDay);


// On mouseenter .box, by adding and removing .selected class, hide default headline, and show corresponding headline (e.g. for #bc-box, show #bc-text headline).
	$(".box").mouseenter(function (event) { // When mouse enters a box class div, then execute this function.
		var current = $(this).attr("id"); // Store this box class div's id in variable current, e.g. var current = "bc-box".
		//var current = $(event.currentTarget).attr("id");  // $(event.currentTarget) is usually equivalent to $(this)
		console.log("\nMouseenter variable current: "+current); // e.g. "Mouseenter variable current: bc-box"
		var id = current.substr(0, 3) + "text"; // e.g. "bc-box" --> "bc-" + "text" --> "bc-text"; id = "bc-text". "bc-text" is the id of a .headline div.
		console.log("Mousenter variable id: "+id); // e.g. "bc-text"
		$("#hl_boxes_wrapper").find(".selected").removeClass("selected"); // The default headline div ("Making collaboration...") has class including .selected. Goes to div #hl_boxeswrapper finds default headline div and removes .selected. The selected class is "display: block!important". The "!important" declaration basically overrides any other CSS.
		console.log("Class of #"+id+" before change: "+$("#"+id).attr("class"));
		$("#"+ id).addClass("selected");  // Find id e.g. "bc-text"--> $("#bc-text") and add the selected class, so that the #bc-text div displays (display: block!important).
		console.log("Class of #"+id+" after change: "+$("#"+id).attr("class"));
	});
// On mouseleave .box, by removing and adding .selected class, hide corresponding headline and show default headline.
	$(".box").mouseleave(function (event) { //When mouseleaves .box class execute this function.
		console.log("Mouseleave before removeClass .selected, id of div with .selected: "+$(".selected").attr("id"));
		$("#hl_boxes_wrapper").find(".selected").removeClass("selected"); // Removes .selected from this .box class div--hiding this headline.
		$("#hl-text").addClass("selected"); //Adds .selected to default headline (with id="hl-text"), displaying it.
		console.log("Mouseleave after removeClass and addClass selected, id of div with .selected: "+$(".selected").attr("id"));
	});
	
	//This section changes the photo above the "Meet some customers" link from black-and-white to color and back on mouseenter and mouseleave.
	//There is an unresolved issue that I did not crop the images exactly the same, so that the image appears to move.
	$("#customers_image").on("mouseenter", function (event) {
		$("#customers_image").attr("src", "images/customers_color2.png");
	});
	$("#customers_image").on("mouseleave", function (event) {
		$("#customers_image").attr("src", "images/customers_bw.png");
	});
});