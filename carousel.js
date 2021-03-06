const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);


const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const setSlidePosition = (slide, index)=>{
	slide.style.left = slideWidth * index+ 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide)=>{
	track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}

dotsNav.addEventListener('click', e=>{

const targetDot=e.target.closest('button');
if(!targetDot) return;

const currentSlide = track.querySelector('.current-slide');



const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot===targetDot);
const targetSlide = slides[targetIndex];


moveToSlide(track, currentSlide, targetSlide);

currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
})