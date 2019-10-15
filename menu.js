var i = 0, rightSidetext;
rightSidetext = "Hi, I am Eunbyul"

function typing() {

  if(i < rightSidetext.length){
    document.getElementById("rightSidetext").innerHTML += rightSidetext.charAt(i);
    i ++;
    setTimeout(typing, 70);
  }
}
typing();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlide')
  if( n > slides.length) {
    slideIndex  = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
