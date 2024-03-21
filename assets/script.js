const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Changement de slide */

let currentSlideIndex = 0;

function changeSlide(sens) {
    currentSlideIndex = currentSlideIndex + sens;
	
    if (currentSlideIndex < 0)
        currentSlideIndex = slides.length - 1;
    else if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}

    document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
	document.getElementById("text").innerHTML = slides[currentSlideIndex].tagLine;

}



/* Ajout des Events Listeners sur les flèches */

const clicArrowLeft = document.querySelector(".arrow_left");
const clicArrowRight = document.querySelector(".arrow_right");

clicArrowLeft.addEventListener("click", function() {
    const nbreDots = document.querySelectorAll(".dot");
    const slideActive = document.querySelector(".dot_selected");

    let selectedIndex;
    for (let i = 0; i < nbreDots.length; i++) {
        if (nbreDots[i] === slideActive) {
            selectedIndex = i;
            break;
        }
    }

    const newSelectedIndex = (selectedIndex - 1 + nbreDots.length) % nbreDots.length;
    slideActive.classList.remove("dot_selected");
    nbreDots[newSelectedIndex].classList.add("dot_selected");

    changeSlide(newSelectedIndex);
});


clicArrowRight.addEventListener("click", function() {
    const nbreDots = document.querySelectorAll(".dot");
    const slideActive = document.querySelector(".dot_selected");

    let selectedIndex;
    for (let i = 0; i < nbreDots.length; i++) {
        if (nbreDots[i] === slideActive) {
            selectedIndex = i;
            break;
        }
    }

    const newSelectedIndex = (selectedIndex + 1) % nbreDots.length;
    slideActive.classList.remove("dot_selected");
    nbreDots[newSelectedIndex].classList.add("dot_selected");

    changeSlide(newSelectedIndex);

});


/* Ajout des dots sur le slider */

const div_dots = document.querySelector("#banner .dots");

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    if (i === 0) {
        dot.classList.add("dot_selected");
    }
    div_dots.appendChild(dot);
}

