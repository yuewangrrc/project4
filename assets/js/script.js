let currentSlide = 0;

// Descriptions for each image
// const descriptions = [
//     "RRC Polytech – In Front of What’s Ahead",
//     "RRC Polytech offers over 150 full- and part-time degree, diploma, post-diploma, and certificate options",
//     "RRC Polytech is committed to your academic and personal success",
//     "Celebrating 20 Years of Research Partnerships & Innovation",
//     "Anything you need is within walking distance of your classroom"
// ];

/**
 * Show the slide at the specified index.
 * @param {number} index - The index of the slide to show.
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    // const description = document.getElementById('image-description');

    // Loop back to the first slide if the index exceeds the number of slides
    if (index >= slides.length) currentSlide = 0;
    // Loop back to the last slide if the index is less than 0
    if (index < 0) currentSlide = slides.length - 1;

    // Update the active slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
            // description.textContent = descriptions[currentSlide]; // Update description
        }
    });
}

/**
 * Change the current slide by the specified direction.
 * @param {number} direction - The direction to change the slide (1 for next, -1 for previous).
 */
function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

/**
 * Automatically change slides at a set interval.
 */
function autoplay() {
    setInterval(() => {
        changeSlide(1); // Automatically go to the next slide
    }, 3000); // Change slide every 3 seconds
}

// Initialize the carousel
showSlide(currentSlide);
autoplay();

/**
 * Initialize snowflakes effect.
 */
var snowflakes = new Snowflakes({
    color: '#fff', // Color of the snowflakes. Default: "#5ECDEF"
    // container: document.querySelector('#container'), // Container for the snowflakes. Default: document.body
    count: 100, // Number of snowflakes. Default: 50
    minOpacity: 0.1, // Minimum opacity of snowflakes. From 0 to 1. Default: 0.6
    maxOpacity: 0.95, // Maximum opacity of snowflakes. From 0 to 1. Default: 1
    minSize: 20, // Minimum size of snowflakes. Default: 10
    maxSize: 50, // Maximum size of snowflakes. Default: 25
    rotation: true, // Enable rotation of snowflakes. Default: true
    speed: 0.5, // Speed of falling snowflakes. Default: 1
    wind: false, // Enable wind effect. Default: true
    width: 500, // Width of the container. Default: width of container
    height: 250, // Height of the container. Default: height of container
    zIndex: 100, // z-index of the snowflakes. Default: 9999
    autoResize: true // Automatically resize the snowflakes. Default: true
});