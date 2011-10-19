/* Author: 

*/
$.reject({
    reject: {
        safari: false, // Apple Safari
        chrome: false, // Google Chrome
        firefox3: true,firefox: false, // Mozilla Firefox
        msie6: true,msie7: true,msie8: false, // Microsoft Internet Explorer
        opera: false, // Opera
        konqueror: true, // Konqueror (Linux)
        unknown: true // Everything else
    },
	imagePath: '../architekci/img/',
	browserInfo: { // Settings for which browsers to display
		firefox: {
			text: 'Firefox 7+', // Text below the icon
			url: 'http://www.mozilla.com/firefox/' // URL For icon/text link
		},
		safari: {
			text: 'Safari 5+',
			url: 'http://www.apple.com/safari/download/'
		},
		opera: {
			text: 'Opera 11+',
			url: 'http://www.opera.com/download/'
		},
		chrome: {
			text: 'Chrome 14+',
			url: 'http://www.google.com/chrome/'
		},
		msie: {
			text: 'Internet Explorer 9',
			url: 'http://www.microsoft.com/windows/Internet-explorer/'
		},
		gcf: {
			text: 'Google Chrome Frame',
			url: 'http://code.google.com/chrome/chromeframe/',
			allow: { all: false, msie: true } // This browser option will only be displayed for MSIE
		},
	}
});
$('#container').imagesLoaded( function(){
	$(this).isotope({
  		masonry : {
    		columnWidth : 80
  		}
	});
});

















