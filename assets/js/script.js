// Index Homepage: Variables
// Possible make variables for the navigation bar to redirect?
    // Start Quiz button (for both show and movies - focus on shows for now)
var startShowBtn = document.querySelector(".showBinger");
var startMovieBtn = document.querySelector(".movieFan");

    // add event listener to direct to quiz page

// Quiz page Variables
    // Variables for API Keys - GoogleBook API and TMBD
var googleBooksKey = "AIzaSyCtpFU2A6HSKklQfEKS0tabr54FI8fyQjc";
var imdbKey = "";
    // Questions: array with objects in it that include questions and choices
    // Empty array to push book ISBN based on selected shows
var userResults = [];
    // Answers array with show IDs
var questions [
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
]

    // For each show ID needs an array showing it's 5 book ISBN (25 variables) - Might be better to put the books into groups and create if statements for each answer?

var bookGroups = [
    {
        // The Witcher
        group: 1,
        showID: "tt5180504",
        bookIDs: ["9780316438988", "9781649374172", "9780316212298", "9780062564566", "9780316246279"]
    }
]

    // Select choices buttons with querySelector and function event to direct to next question
    // Function to display questions and choices
        // Next button click event (if else statement to make sure they've selected something)
    // Math.random to return 5 ISBN options to the results page
        // Call function for GoogleBooks API show the thumbnails



// Results
    // Array for recommendations to display books in box comes from empty array with pushed arrays into it (concat rather than push if both arrays, push if book IDs are only strings)
    // 
