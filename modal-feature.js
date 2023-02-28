// namespace
const app = {}

// init method
app.init = () => {
    app.galleryListener()
};

// PSEUDOCODE



// 4. design an exit button for use to get out of modal

app.galleryListener = () => {
    // 1. Target all li elements in gallery wrapper
    const galleryImages = document.querySelectorAll('.galleryItem');

    // 2. Create a for each condition with an event listener
    galleryImages.forEach((image) => {
        image.addEventListener('click', function() {
           // 3.  On click, modal appears
           
        })
    });
}


app.init();