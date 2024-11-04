// EXPERTskills
let spans = document.querySelectorAll('.progressbar span');


spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML.top = span.dataset.width;
});
// EXPERTskills

// BACK TO TOP BUTTON
let body = document.querySelector('body');
let backTotop = document.querySelector('.backTotop');


const scrollProgress = (event) => {
   let bodyheight = body.clientHeight - window.innerHeight;
   let scrollTop = window.scrollY;
   let percentage = Math.round((100 / bodyheight) * scrollTop);


   backTotop.style.backgroundImage =`conic-gradient(#FFCC00 0% ${percentage}%,white 0% ${percentage}%)`;

}
window.addEventListener('scroll', scrollProgress );

backTotop.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
})
// BACK TO TOP BUTTON

// PRELOADER
let loader = document.getElementById('preloader');
    
window.addEventListener('load', function() {
   loader.style.display = 'none';
})
// PRELOADER

// NAVBAR
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',function() {
    let scrTop = window.scrollY;

  if(scrTop > 1600){
   navbar.classList.add('fixed')
  } else{
    navbar.classList.remove('fixed')
  }

 }
)
// NAVBAR