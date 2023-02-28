// namespace
const app = {}
const body = document.querySelector('body');

// init method
app.init = () => {
    app.hamBtnListener();
    app.scrollListener();
};



// method to listen for click on hamburger menu button
app.hamBtnListener = () => {
    // hamburger menu button element saved in a variable
    const hamButton = document.getElementById("hamBtn");
    // nav menu element saved in a variable
    const nav = document.getElementById("navMenu");

    const sophieBtn = document.getElementById("sophieLogo");

    // listen to click of menu
    hamButton.addEventListener('click',function(){
        // add/remove class to nav menu
        nav.classList.toggle('show');

        // disable scrolling when menu is visible
        if (nav.classList.contains('show') === true) {
            body.classList.add('removeScrolling');
        } else {
            body.classList.remove('removeScrolling');
        }
    })

    // when sophie home button is clicked, remove nav menu
    sophieBtn.addEventListener('click',function() {
        nav.classList.remove('show');
        body.classList.remove('removeScrolling');
    })
}

// on scroll, scroll back to the top button appears
app.scrollListener = () => {
    // target scroll to the top button
    const scrollBtn = document.querySelector('#topBtn');

    document.addEventListener("scroll", function() {
        if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    })
    
}

app.init();