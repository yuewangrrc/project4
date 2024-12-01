let currentSlide = 0;

// Descriptions for each image
// const descriptions = [
//     "RRC Polytech – In Front of What’s Ahead",
//     "RRC Polytech offers over 150 full- and part-time degree, diploma, post-diploma, and certificate options",
//     "RRC Polytech is committed to your academic and personal success",
//     "Celebrating 20 Years of Research Partnerships & Innovation",
//     "Anything you need is within walking distance of your classroom"
// ];

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    // const description = document.getElementById('image-description');

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
            // description.textContent = descriptions[currentSlide]; // Update description
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}
// Autoplay functionality
function autoplay() {
    setInterval(() => {
        changeSlide(1); // Automatically go to the next slide
    }, 3000); // Change slide every 3 seconds
}
// Initialize the carousel
showSlide(currentSlide);
autoplay();
