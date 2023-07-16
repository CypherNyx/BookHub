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

// Event listeners for navbar - DG
navHomeBtn.addEventListener('click', () => {
    window.location.replace('index.html');
});

navExploreBtn.addEventListener('click', () => {
    window.location.replace('./assets/pages/explore.html');
});
navBookshelfBtn.addEventListener('click', () => {
    window.location.replace('./assets/pages/bookshelf.html');
});
//Best sellers page is still a MAYBE for now?
navBestSellersBtn.addEventListener('click', () => {
    window.location.replace('./assets/pages/explore.html');
});

