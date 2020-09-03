var slideIndex = 1;
showSlides(slideIndex);

// FLECHAS 

function plusSlides(n) {
	showSlides (slideIndex += n);
}


// PUNTITOS

function currentSlide(n) {
	showSlides (slideIndex = n);
}

// FUNCION SHOWSLIDES 

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("punto");
	
	if (n > slides.length) { slideIndex = 1; }
	
	if (n < 1 ) { slideIndex = slides.length; }
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", " ");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}