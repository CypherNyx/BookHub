// Should be on every single HTML for the clickable navbar to work
// Index Homepage: Variables
// NavBar Clickable: make variables for the navigation bar to redirect? - Dahlia

// Start Quiz button (for both show and movies - focus on shows for now)
var startShowBtn = document.querySelector(".showBinger");
var startMovieBtn = document.querySelector(".movieFan");
var navHomeBtn = document.getElementById("homeBtn");
var navExploreBtn = document.getElementById("explore");
var navBookshelfBtn = document.getElementById("bookshelf");
var navBestSellersBtn = document.getElementById("bestSellers");

// Event listeners for Home navbar - DG
navHomeBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='index.html';
    } else {
        window.location.href = '../../index.html';
                  
    }
});

navExploreBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='./assets/pages/explore.html';
    } else {
        window.location.href ='explore.html';
    }
});
navBookshelfBtn.addEventListener('click', () => {
    if (window.location.href.endsWith('index.html')) {
    window.location.href ='./assets/pages/bookshelf.html';
} else {
    window.location.href ='bookshelf.html';
}
});
//Best sellers page is still a MAYBE for now?
navBestSellersBtn.addEventListener('click', () => {
    
    if (window.location.href.endsWith('index.html')) {
        window.location.href ='./assets/pages/quiz.html';
        } else {
            window.location.href ='quiz.html';
        }
});


