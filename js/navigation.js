//Add some sort of detection if an element is already transitioning -> wait
/*
var hoverLinks = document.querySelectorAll('span.value a[hover-img]');
var queuedTimeouts = 0;
var changeBackground = function(new_url) {
	queuedTimeouts--;
	if (queuedTimeouts > 0) {
		// There's a newer timeout in the queue, so skip this one
		return;	
	}
	document.body.style.backgroundImage = "url('" + new_url + "')";
	document.body.className += ' linkHover';
}


for (var i = hoverLinks.length - 1; i >= 0; i--) {
	hoverLinks[i].addEventListener('mouseover', function(e){
		window.setTimeout(
			changeBackground, 
			200,
			e.target.attributes['hover-img'].value
		);
		queuedTimeouts++;
	});
	hoverLinks[i].addEventListener('mouseout', function(e){
		document.body.className = document.body.className.replace(/linkHover/g,'');
	});
};



var links = window.document.getElementsByTagName('a')


for (var i = links.length - 1; i >= 0; i--) {
	links[i].addEventListener('click', function(e){
		//if not 'mailto:'
		e.preventDefault();
		console.log('navigating to: ');
		console.log(e);
	});
};

var openInFrame = function(page_url){

}
*/

var backgroundImages = document.querySelectorAll('div#backgrounds > img');
var hoverLinks = Array.prototype.slice.call(document.querySelectorAll('a[hover-img]'));

hoverLinks.forEach(function(link,i){
	var targetImg = null,
		desiredImgURL = hoverLinks[i].attributes['hover-img'].value;
	targetImg = document.querySelector('div#backgrounds > img[src="'+desiredImgURL+'"]');
	hoverLinks[i].addEventListener('mouseover', function(e) {
		targetImg.classList.add('img-hover');
	});
	hoverLinks[i].addEventListener('mouseout', function(e) {
		targetImg.classList.remove('img-hover');
	});
});