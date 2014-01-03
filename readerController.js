$( document ).ready(function() {
	var readerWidth = $("#reader").width();
	var readerHeaderHeight = $("#reader-header").height();
	var readerFooterHeight = $("#reader-footer").height();
	var displayHeight = $(window).height();
	var calculatedReaderContentHeight = displayHeight - (readerHeaderHeight + readerFooterHeight);

	var contentPadding = 30;

	$("#reader-content-container").css("height", calculatedReaderContentHeight);
	$("#reader-content").css("height", (calculatedReaderContentHeight-contentPadding/2)+"px");

	$("#reader-content").css("padding-left", (contentPadding/2)+"px");
	$("#reader-content").css("padding-right", (contentPadding/2)+"px");
	$("#reader-content").css("padding-top", (contentPadding/2)+"px");
	$("#reader-content").css("column-width", (readerWidth - 2*contentPadding)+"px");
	$("#reader-content").css("column-gap", contentPadding+"px");
	//alert($("#reader-content").css("column-width"));

	var page = 1;
	var maxPages = 0;
	var leftOffset = 0;

	maxPages = ($("#offsetmarker").position().left / (readerWidth+contentPadding)) + 1;

	$( "#reader-left" ).click(function() {
		if(page > 1){
			leftOffset += readerWidth;
			page -= 1;
			$("#reader-content").animate({"left": leftOffset}, "slow");
		}
	  
	});

	$( "#reader-right" ).click(function() {
		if(page < maxPages){
			leftOffset -= readerWidth;
	  		page += 1;
	  		$("#reader-content").animate({"left": leftOffset}, "slow");
	  	}
	});
});	