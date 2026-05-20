const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Open Sidebar
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});



const slider = document.getElementById('main-slider');
let counter = 0;
const totalSlides = 3; // Change this if you add more images

setInterval(() => {
    counter++;
    
    // If we reach the end, reset to the first image
    if (counter >= totalSlides) {
        counter = 0;
    }
    
    // Move the slider left by 100%, 200%, etc.
    slider.style.transform = `translateX(${-counter * 100 / totalSlides}%)`;
    
    /* Note: Because the .slider width is 300%, moving it by 1/3 
       of its total width shows the next slide. 
    */
    slider.style.transform = `translateX(${-counter * (100 / totalSlides)}%)`;

}, 5000); // 5000ms = 5 seconds