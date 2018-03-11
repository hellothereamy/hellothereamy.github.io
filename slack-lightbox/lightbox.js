
/* variable to store current index */
var currentIndex; 

/* 
	function opens lightbox 
	* @param {int} index of current image 
*/	
var showLightBox = function(index){
	var lightBox = document.getElementById('light-box');
	lightBox.style.display = 'flex';

	var allPhotos = document.getElementsByClassName('photo');
	var currentPhoto = allPhotos[index];
	replacePhoto(currentPhoto);

};

/* 
	function is a closure that stores the index of the current photo and calls showLightBox to open the lightbox 
	* @param {int} index of current photo 
*/	

var currentPhoto = function(index){
	return function(){
		currentIndex = index;
		showLightBox(index);
	}
}

/* 
	function adds the current photo into the DOM element
	* @param {object} current photo object
*/	

var replacePhoto = function(currentPhoto){
	var photoPlaceHolder = document.getElementById('current-photo');
	var images = photoPlaceHolder.getElementsByTagName('img');

	if(images.length){
		photoPlaceHolder.removeChild(images[0]);
	} 
		var imgSource = currentPhoto.getAttribute('src');
		var altText = currentPhoto.getAttribute('alt');

		var photo = document.createElement('IMG');
			photo.setAttribute('alt', altText);
			photo.setAttribute('src',imgSource);
			photoPlaceHolder.appendChild(photo);

		var title = document.getElementById('light-box-header');
			title.innerHTML = altText;
}

/* 
	function closes lightbox and removes the photo from the DOM
*/	

var closeLightBox = function(){
	var lightBox = document.getElementById('light-box');
	lightBox.style.display = 'none';

	var photoPlaceHolder = document.getElementById('current-photo');
	var img = photoPlaceHolder.getElementsByTagName('img')[0];
	photoPlaceHolder.removeChild(img);

	var title = document.getElementById('light-box-header');
	title.innerHTML = "";
};


/* 
	function determines if the user selected next or previous photo and replaces
	the photo accordinly 

	* @param {boolean} if user has selected next photo
*/	

var changePhoto = function(next){
	var allPhotos = document.getElementsByClassName('photo');

	if(currentIndex === allPhotos.length -1 && next){
		currentIndex = 0;
	} else if(currentIndex == 0 && !next ){
		currentIndex = allPhotos.length - 1;
	} else {
		currentIndex = next ? currentIndex + 1 : currentIndex - 1;
	}
	replacePhoto(allPhotos[currentIndex]);
};