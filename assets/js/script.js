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


var snowflakes = new Snowflakes({
    color: '#fff', // Default: "#5ECDEF"
    // container: document.querySelector('#container'), // Default: document.body
    count: 100, // 100 snowflakes. Default: 50
    minOpacity: 0.1, // From 0 to 1. Default: 0.6
    maxOpacity: 0.95, // From 0 to 1. Default: 1
    minSize: 20, // Default: 10
    maxSize: 50, // Default: 25
    rotation: true, // Default: true
    speed: .5, // The property affects the speed of falling. Default: 1
    wind: false, // Without wind. Default: true
    width: 500, // Default: width of container
    height: 250, // Default: height of container
    zIndex: 100, // Default: 9999,
    autoResize: true // Default: true
});