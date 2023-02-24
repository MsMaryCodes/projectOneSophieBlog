// namespace
const app = {}

// init method
app.init = () => {
    app.hamBtnListener()
};

// method to listen for click on hamburger menu button
app.hamBtnListener = () => {
    // hamburger menu button element saved in a variable
    const hamButton = document.getElementById("hamBtn");
    // nav menu element saved in a variable
    const nav = document.getElementById("navMenu");

    // listen to click of menu
    hamButton.addEventListener('click',function(){
        // add/remove class to nav menu
        nav.classList.toggle('show');
    })
}

app.init();