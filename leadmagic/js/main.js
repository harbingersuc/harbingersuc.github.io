$(document).ready(function() {
	var scrollBtn = $(".cta__scroll");
	var formOffset = $(".form").offset().top;
	console.log(formOffset);

	$(scrollBtn).click(function(e) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: formOffset
		}, 1000,);
		$("input[name='name']").focus().css("outline", "1px solid #44bfff");
		$("input[name='name']").blur(function() {
			$(this).css("outline", "none");
		});
	});
});