const nextBtn = document.querySelector("button")
let totalSlides = 5


let currentSlide = 0

function next(){
    // currentSlide = (currentSlide+1) % totalSlides
    if(currentSlide == totalSlides-1){
        currentSlide = 0
    }else{
        currentSlide = currentSlide+1
    }

    console.log(currentSlide);
}

nextBtn.addEventListener("click", next)


