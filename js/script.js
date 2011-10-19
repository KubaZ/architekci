/* Author: 

*/
$.reject({
    reject: {
        safari: false, // Apple Safari
        chrome: false, // Google Chrome
        firefox: false, // Mozilla Firefox
        msie: true, // Microsoft Internet Explorer
        opera: false, // Opera
        konqueror: true, // Konqueror (Linux)
        unknown: true // Everything else
    }
});
$('#container').imagesLoaded( function(){
	$(this).isotope({
  		masonry : {
    		columnWidth : 80
  		}
	});
});

















