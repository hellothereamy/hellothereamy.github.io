(function(){
	/* function to gall api  */ 
	var getData = function(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var response = JSON.parse(xhttp.responseText).items;
				processImages(response);
		    }
		};
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyCTxQ58Pi5ONo0SnoJDlNBw5ejPT6j4SMQ&q=instagram%20brunch&cx=009447617606377411253:1ujrnr1ruse&searchType=image", true);	

		xhttp.send();
	};

	/* 
		function loops through each image (return from the api) in the array and create an img element with respective src and
		alt attribute. Also attachs an on click handler on each image 

 		* @param {array} images - reponse array from api 
 	*/	
 var processImages = function(images){
 	var i;
	for(i = 0; i < images.length; i++){
		var photoDiv = document.createElement("DIV");
		photoDiv.classList.add("photo-div");
		var img = document.createElement("IMG");
		img.classList.add("photo");
		img.setAttribute("src",images[i].link);
		img.setAttribute("alt", images[i].title);
		img.onclick = currentPhoto(i);

		photoDiv.appendChild(img);
		document.getElementById("photo-container").appendChild(photoDiv);
	};
};

	getData();

}());
