(function(){

	"use strict";
	let currentImage = 0;

	const container = document.querySelector('#content');
	const myPhoto = ["image1.jpg","image2.jpeg","image3.jpg","image4.jpg","image5.jpeg"];
	const nextBtn = document.querySelector("#next");
	const previousBtn = document.querySelector("#previous");

	function swapImage(){
		let newSlide = document.createElement("img");
		newSlide.src = `folder/${myPhoto[currentImage]}`;
		newSlide.className = 'fadeinimg';
		container.appendChild(newSlide);
	
		if (container.children.length > 1){
			container.removeChild(container.children[0])
		}
	}
		nextBtn.addEventListener('click', function(event){
			event.preventDefault();

			currentImage++;
			if (currentImage > myPhoto.length-1){
				currentImage = 0;
			}
			swapImage();

		});
		previousBtn.addEventListener("click", function(event1){
			event1.preventDefault();

			currentImage--;
			if (currentImage < 0){
				currentImage = 4;
			}
			swapImage();
		});
	

})();