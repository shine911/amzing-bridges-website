$(document).ready(function () {
	//Auto active navbar
	$("ul li").click(function(){
		$("ul li").removeClass("active");
		$(this).addClass("active")
	});
});