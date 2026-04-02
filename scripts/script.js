import { keyboard } from "./keyboard.js";
import { Hangman } from "./hangman.js";

let image        = document.getElementById('hangmanImg');
let guessedWord  = document.getElementById('guessedWord');
let wordHint     = document.getElementById('hint');
let keyboardBtns = document.getElementById('keyboard');
let keys         = document.getElementsByClassName('keys');
let newGame      = document.getElementById('newGame');

let wordToGuess = '';
let failNum = 6;
let tries = 0;
let guessedLetters = ''; 
let hangmanObj ;

// get word
    fetch("words.json")
        .then(function(response){
            if( response.ok ){
                return response.json();
            }
            else {
                console.log("Network error: fetch failed");
            }
        })
        .then(function(data){
            //Turn Word to hangman
            let setLen = data.length;
            let randNum = Math.floor(Math.random() * setLen);
            wordToGuess = data[randNum].word;
            hangmanObj = new Hangman(wordToGuess);
            guessedWord.innerHTML = hangmanObj.returnhtml();
            wordHint.innerText = data[randNum].hint;
        });  
//make keyboard
keyboardBtns.innerHTML += keyboard();
//check when button pressed
let index = 0;
while (index < keys.length){
    keys[index].addEventListener('click', function(){
       if (wordToGuess.includes(this.innerText)){
            if (guessedLetters.includes(this.innerText)) {
                console.log("letter already guessed.")
            }
            else {
                hangmanObj.updateHangman(guessedLetters);
                guessedWord.innerHTML = hangmanObj.returnhtml();
            }
        }
        guessedLetters += this.innerText;        
    })
    index ++;
}
newGame.addEventListener('click', function() {
    fetch("words.json")
        .then(function(response){
            if( response.ok ){
                return response.json();
            }
            else {
                console.log("Network error: fetch failed");
            }
        })
        .then(function(data){
            let setLen = data.length;
            let randNum = Math.floor(Math.random() * setLen);
            wordToGuess = data[randNum].word;
            hangmanObj = new Hangman(wordToGuess);
            guessedWord.innerHTML = hangmanObj.returnhtml();
            wordHint.innerText = data[randNum].hint;
        });  
})
