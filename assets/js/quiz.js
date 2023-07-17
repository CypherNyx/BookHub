// Quiz page Variables
    // Variables for API Keys - GoogleBook API and TMBD
    var googleBooksKey = "AIzaSyCtpFU2A6HSKklQfEKS0tabr54FI8fyQjc";

    var tmdbKey = "&api_key=1866aca8e0c0dfcbef153230d45d9a50";
    
    // Variable for API URLs

        // Questions: array with objects in it that include questions and choices
        // Empty array to push book ISBN based on selected shows
        var selectedShows = [];
        var userResults = [];
        var quizShowContent = document.getElementById('fiveShowsPage');
        // Answers array with show IDs
    var questions = [
        {
            questionText: "Let's say you were having a really awful day, which of these shows would you watch?",
            showOptions:  ['tt5180504','tt2707408', 'tt8740790', 'tt4955642', 'tt5057054' ]
        },
       /* {
            questionText: "If you were bored and had nothing to do, which show would you go to first?",
            showOptions: []
        },
        {
            questionText: "Which of these shows would you always recommend to a friend?",
          showOptions: []
        },
        {
            questionText: "Which of these shows would you recommend to a complete stranger?",
            showOptions: []
        },
        {
            questionText: "Last but not least, out of these 5 shows based on books, pick one that you've loved reading or want to read.",
            answerOptions: []
        }*/
    ];
    
        // For each show ID needs an array showing it's 5 book ISBN (25 variables) - Might be better to put the books into groups and create if statements for each answer?
    
    var bookGroups = [
        {
            // The Witcher
            group: 1,
            title: "The Witcher",
            showID: "tt5180504",
            bookIDs: ["9780316438988", "9781649374172", "9780316212298", "9780062564566", "9780316246279"],
        },
        {
            // LOTR: The Rings of Power
            group: 2,
            title: "Lord of the Rings: The Rings of Power",
            showID: "tt7631058",
            bookIDs: ["9780007264896", "9780008376062", "9780593237649", "9781423136149", "9780547851396"]
        },
        {
            // Narcos
            group: 3,
            title: "Narcos",
            showID: "tt2707408",
            bookIDs: ["9781537296302", "9780393336641", "9781912885039", "9780993021596", "9781548433536"]
        },
        {
            // Bridgerton
            group: 4,
            title: "Bridgerton",
            showID: "tt8740790",
            bookIDs: ["9780063078901", "9780593438152", "9781922733337", "9781984805683", "9781420155235"]
        },
        {
            // The Good Place
            group: 5,
            title: "The Good Place",
            showID: "tt4955642",
            bookIDs: ["9780307476531", "9780593722909", "9781982167363", "9780393341768", "9781451626650"]
        },
        {
            // True Blood
            group: 6,
            title: "True Blood",
            showID: "tt0844441",
            bookIDs: ["9780441008537", "9781101619902", "9780575129481", "9780593335154", "9780061742095"]
        },
        {
            // American Horror Story
            group: 7,
            title: "American Horror Story",
            showID: "tt1844624",
            bookIDs: ["9781639361205", "9781637896075", "9781941147177", "9781639361205", "9781501142970"]
        },
        {
            // Jack Ryan
            group: 8,
            title: "Jack Ryan",
            showID: "tt5057054",
            bookIDs: ["9780425248607", "9780525538431", "9781101603758", "9780451413192", "9780515153651"]
        },
        {
            // Lost
            group: 9,
            title: "Lost",
            showID: "tt0411008",
            bookIDs: ["9780374104092", "9780425278901", "9780316449052", "9781481440882", "9780358211587"]
        },
        {
            // My. Robot
            group: 10,
            title: "Mr. Robot",
            showID: "tt4158110",
            bookIDs: ["9780307454546", "9781477828496", "9781612195216", "9780441007462", "9780996066624"]
        }
    ];
    var questionIndex = 0;

    function newQuestion(){
        quizShowContent.innerHTML ='';

        for ( var i = 0; i < 5; i++) {
            var show = questions[questionIndex].showOptions;
            console.log(show);
            var showInfo = {
                fetchInfo: function (show) {
                    fetch ('https://api.themoviedb.org/3/find/' + show[i] + '?external_source=imdb_id' + tmdbKey
                    )
                    .then((response) => response.json())
                    .then((data) => this.displayShowInfo(data))
                },
                displayShowInfo: function (data) {
                    const { original_name, poster_path } = data.tv_results[0];
                    //   console.log(data);
                    //   console.log(poster_path);
                    var showBtn = document.createElement("button");
                    var showTitle = document.createElement("h3");
                    var showImg = document.createElement("img");
                    
                    showImg.src = 'https://image.tmdb.org/t/p/w342' + poster_path;
                    showTitle.innerHTML = original_name;

                    quizShowContent.appendChild(showBtn);
                    showBtn.append(showTitle, showImg);
        
                    // display question with for loop
                    // display showOptions with for loop
                },
            
            
        };

        showInfo.fetchInfo(show);


    }
    };

    newQuestion();