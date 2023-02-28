// namespace
const app = {}

// init method
app.init = () => {
    app.galleryListener()
};

// PSEUDOCODE

// 2. Create a for each condition with an event listener
// 3.  On click, modal appears
// 4. design an exit button for use to get out of modal

app.galleryListener = () => {
    // 1. Target all li elements in gallery wrapper
    const galleryImages = document.querySelectorAll('.galleryItem');
    console.log(galleryImages);

    galleryImages.forEach((image) => {
        image.addEventListener('click', function() {
            console.log('clicked')
        })
    });
}


app.init();