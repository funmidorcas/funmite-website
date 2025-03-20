// const imgs = document.querySelectorAll('.header-slider ul img');
// const prev_btn = document.querySelector('.control-prev');
// const next_btn = document.querySelector('.control-next');

// let n = 0;
// function changeSlide() {
//     for (let i = 0; i < imgs.length; i++){
//         imgs[i].style.display = 'none';
//     }
//     imgs[n].style.display = 'block';
// }
// changeSlide();

// prev_btn.addEventListener('click', (e)=>{
//     if(n > 0){
//         n--;
//     } else{
//         n = imgs.length - 1;
//     }
//     changeSlide();

// })
// next_btn.addEventListener('click', (e)=>{
//     if(n < imgs.length - 1){
//         n++
//     } else{
//         n = 0
//     }
//     changeSlide()

// })


// const scrollContainer = document.querySelectorAll('.product')
// for (const item of scrollContainer) {
//     item.addEventListener('wheel', (evt)=>{
//         evt.preventDefault();
//         item.scrollLeft += EventTarget.deltaY
//     })
// }


// Select the images and navigation buttons
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0; // Current slide index

// Function to change the visible slide
function changeSlide() {
    // Hide all images
    imgs.forEach((img, index) => {
        img.style.display = 'none';
    });
    // Show the current image
    if (imgs[n]) {
        imgs[n].style.display = 'block';
    }
}

// Initialize the slider
changeSlide();

// Event listener for the previous button
prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1; // Loop back to the last image if at the first
    changeSlide();
});

// Event listener for the next button
next_btn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0; // Loop back to the first image if at the last
    changeSlide();
});

// Add horizontal scrolling for product containers
const scrollContainers = document.querySelectorAll('.products'); // Corrected querySelectorAll
scrollContainers.forEach((container) => {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY; // Use deltaY for smoother horizontal scrolling
    });
});
