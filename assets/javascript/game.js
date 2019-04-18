
        //array of letters for cpu to randomize
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        //variables
        var wins = 0;
        var losses = 0;
        var numGuesses = 9;
        var guessChoices = [];
       
        //user input
        document.onkeyup = function (event) {

            var userGuess = event.key;

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            //user options
            var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
            function generateAlphabet(){
                var alphabet = [];
                for(var i = 97; i <= 122; i++){
                  var letter = String.fromCharCode(i)
                  alphabet.push(letter);
                }
                return alphabet;
              }
              
              var options = generateAlphabet();
              
              console.log(options);

            if (options.indexOf(userGuess) > -1) {

                if (userGuess === computerGuess) {
                    wins++;
                    numGuesses = 9;
                    guessChoices = [];
                    document.getElementById("myImg").src = "assets/images/wisely.giphy.gif";
                }

                if (userGuess != computerGuess) {
                    numGuesses--;
                    guessChoices.push(userGuess);
                    document.getElementById("myImg").src = "assets/images/choose_wisely.jpg";
                }

                if (numGuesses === 0) {

                    numGuesses = 9;
                    losses++;
                    guessChoices = [];
                    document.getElementById("myImg").src = "assets/images/poorly.giphy.gif"

                }

                var html =
                    "<p>Guess what letter I'm thinking of!</p>" +
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>" +
                    "<p>Guesses Left: " + numGuesses + "</p>" +
                    "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

                document.querySelector("#game").innerHTML = html;


            }
        };

