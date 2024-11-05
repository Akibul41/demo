const slides = document.querySelectorAll('.slide img'); 
const description = document.getElementById('description');
const descriptions = [
  'Description of Image 1',
  'Description of Image 2',
  'Description of Image 3'
];
let currentIndex = 0;

function slideshow() {
  slides.forEach((slide) => slide.classList.remove('active')); // Remove active class from all slides
  slides[currentIndex].classList.add('active'); // Add active class to current slide
  description.textContent = descriptions[currentIndex]; // Update description
  currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
}

// Show the first image immediately
slideshow();

// Run the slideshow every 3 seconds
setInterval(slideshow, 3000);
