// namespace
const app = {}

// init method
app.init = () => {
    app.galleryListener();
    app.closeButton();
};

const modalContainer = document.querySelector('.modalContainer');
// PSEUDOCODE

app.galleryListener = () => {
    // 1. Target all li elements in gallery wrapper
    const galleryImages = document.querySelectorAll('.galleryItem');
    const modalImg = document.querySelector('.modalImg');
    const modalPara = document.querySelector('.modalPara')
    
    // 2. Create a for each condition with an event listener
    galleryImages.forEach((image) => {
        image.addEventListener('click', function() {
           // 3.  On click, modal appears
            modalContainer.style.display = "block";

            modalImg.src = image.src;
            modalImg.alt = image.alt;
            modalPara.innerHTML = image.alt;
        })
    });
}

// 4. design an exit button for use to get out of modal
app.closeButton = () => {
    const modalClose = document.querySelector('#modalClose');

    modalClose.addEventListener('click', function() {

        modalContainer.style.display = "none";
    })
}



app.init();