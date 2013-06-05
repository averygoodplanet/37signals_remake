$(document).ready(function () {
	$(".box").mouseenter(function (event) {
		var current = $(event.currentTarget).attr("id");
		/* console.log(current); */
		var id = current.substr(0, 3) + "text";
		/* console.log(id); */
		$("#hl_boxes_wrapper").find(".selected").removeClass("selected");
		$("#"+ id).addClass("selected");
	});
	$(".box").mouseleave(function (event) {
		$("#hl_boxes_wrapper").find(".selected").removeClass("selected");
		$("#hl-text").addClass("selected");
	});
});