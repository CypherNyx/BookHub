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
    if (window.location.pathname === '/index.html') {
    window.location.replace('index.html');
    } else {
        window.location.replace('index.html');
    }
});

navExploreBtn.addEventListener('click', () => {
    if (window.location.pathname === '/index.html') {
    window.location.replace('./assets/pages/explore.html');
    } else {
        window.location.replace('explore.html');
    }
});
navBookshelfBtn.addEventListener('click', () => {
    if (window.location.pathname === '/index.html') {
    window.location.replace('./assets/pages/bookshelf.html');
} else {
    window.location.replace('bookshelf.html');
}
});
//Best sellers page is still a MAYBE for now?
navBestSellersBtn.addEventListener('click', () => {
    
    if (window.location.pathname === '/index.html') {
        window.location.replace('./assets/pages/quiz.html');
        } else {
            window.location.replace('quiz.html');
        }
});

