// Quiz page Variables
    // Variables for API Keys - GoogleBook API and TMBD
    var googleBooksKey = "AIzaSyCtpFU2A6HSKklQfEKS0tabr54FI8fyQjc";

    var tmdbKey = "&api_key=1866aca8e0c0dfcbef153230d45d9a50";
    
    // Variable for API URLs

        // Questions: array with objects in it that include questions and choices
        // Empty array to push book ISBN based on selected shows
        var selectedShows = [];
        
        var quizShowContent = document.getElementById('fiveShowsPage');
        // Answers array with show IDs
    var questions = [
        {
            questionText: "Let's say you were having a really awful day, which of these shows would you watch?",
            showOptions:  ['tt5290382','tt2861424', 'tt13918776', 'tt4955642', 'tt5071412' ]
            // MindHunter, Rick & Morty, The Night Agent, The Good Place, Ozark
        },
        {
            questionText: "If you were bored and had nothing to do, which show would you go to first?",
            showOptions: ['tt7631058', 'tt0411008','tt1844624', 'tt3398228', 'tt9059760' ]
            // LOTR: Rings of Power, Lost, American Horror Story, Bojack Horseman, Normal People
        },
        {
            questionText: "Which of these shows would you always recommend to a friend?",
            showOptions: ['tt2707408','tt4158110', 'tt2560140', 'tt8577458', 'tt6548228']
            // Narcos, Mr. Robot, Attack on Titan, High Fidelity, Castle Rock
        },
        {
            questionText: "Which of these shows would you recommend to a complete stranger?",
            showOptions: ['tt14452776', 'tt2802850', 'tt11247158', 'tt4574334','tt5753856']
            // The Bear, Fargo, The Legend of Vox Machina, Stranger Things, Dark
        },
        {
            questionText: "Last but not least, out of these 5 shows based on books, pick one that you've loved reading or want to read.",
            showOptions: ['tt8740790', 'tt7335184', 'tt5180504', 'tt5057054', 'tt0844441']
            // Bridgerton, You, The Witcher, Jack Ryan, True Blood tt5180504
        }
    ];
    
        // For each show ID needs an array showing it's 5 book ISBN (25 variables) - Might be better to put the books into groups and create if statements for each answer?
    

    var questionIndex = 0;

    function newQuestion(){
        var quizQuest = document.getElementById("quiz-question");
        quizQuest.textContent = questions[questionIndex].questionText;
        quizShowContent.innerHTML ='';
        var noneBtn = document.createElement("button");
        noneBtn.innerHTML = "None of These";
        quizShowContent.appendChild(noneBtn);
        noneBtn.addEventListener("click", function(){
            nextQuestion();
        });
        

        for ( var i = 0; i < 5; i++) {
            var show = questions[questionIndex].showOptions;
            // console.log(show);
            var showInfo = {
                fetchInfo: function (show) {
                    fetch ('https://api.themoviedb.org/3/find/' + show[i] + '?external_source=imdb_id' + tmdbKey
                    )
                    .then((response) => response.json())
                    .then((data) => this.displayShowInfo(data))
                },
                displayShowInfo: function (data) {
                    const { original_name, poster_path, id } = data.tv_results[0];
                    //   console.log(data);
                    //   console.log(poster_path);
                    var showBtn = document.createElement("button");
                    var showTitle = document.createElement("h3");
                    var showImg = document.createElement("img");
                    var noneBtn = document.createElement("button");
                    
                    showImg.src = 'https://image.tmdb.org/t/p/w342' + poster_path;
                    showTitle.innerHTML = original_name;
                    noneBtn.innerHTML = "None of These";

                    quizShowContent.appendChild(showBtn);
                    showBtn.append(showTitle, showImg);

                    showBtn.addEventListener("click", function() {
                        selectedShows.push(id)
                        localStorage.setItem("Show ID", JSON.stringify(selectedShows))
                        // console.log(selectedShows)
                        nextQuestion();
                    })

        
                    // display question with for loop
                    // display showOptions with for loop
                },
            
            
        };

        showInfo.fetchInfo(show);


    }
    

    };

    function nextQuestion() {
        if (questionIndex < questions.length -1) {
            questionIndex++;
            newQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz () {
        // Function to redirect to results page
        window.location.href ='quizResults.html';
    }

    newQuestion();