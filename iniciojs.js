const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

let currentIndex = 0;

// Move to a slide
function moveToSlide(track, currentIndex, targetIndex) {
  track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
  currentIndex = targetIndex;
}

// Next button
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveToSlide(track, currentIndex - 1, currentIndex);
  }
});

// Previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(track, currentIndex + 1, currentIndex);
  }
});
