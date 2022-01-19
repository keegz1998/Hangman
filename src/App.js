import './App.css';
import React, {useState,useEffect} from 'react';
// Import components to be displayed
import Header from'./Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Notification from './Components/Notification';
import Popup from './Components/Popup';
import {showNotification as show} from './Helpers/helpers';
import {displayRules as dispRules} from './Helpers/helpers';
import Rules from './Components/Rules';

// Array of possible words to choose from
const words =['fridge','javascript','sausage','magic'];
// Choose a random word within the array
let selectedWord = words[Math.floor(Math.random()* words.length)];


function App() {
  // Use setState Hook to store variable to determine if the game is over or being played
  const [playable, setPlayable] = useState(true);
  // Use set state to create array for correct and incorrect letters
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Create a useEffect function to check for user keyboardinput after render and be able to call it later after the DOM updates have been performed
useEffect(() => {
  // store event and destructure it to have access to key and keycode values
  const handleKeyDown = event =>{
    const{ key, keyCode}=event;
    // Check if game is playable and if the keycode of the key being pressed is between the range of ASCII values for letters
    if(playable && keyCode >= 65 && keyCode <= 90){
      const letter = key.toLowerCase();
      // Check if the word chosen contains the letter and add it the correct letters array if it does not already exist
      if(selectedWord.includes(letter)){
        if(!correctLetters.includes(letter)){
          setCorrectLetters(currentLetters =>[...currentLetters, letter]);
        }else{
          // Call the show Notification function to inform user that they have entered the letter before
          show(setShowNotification);
        }
      }// The chosen word does not contain the letter so the letter is added to the wrongLetters array using the setIncorret letters useState
      else{
        if(!wrongLetters.includes(letter)){
          setWrongLetters(wrongLetters =>[...wrongLetters, letter]);

        } else{
          // Call the show Notification function to inform user that they have entered the letter before
           show(setShowNotification);
        }
      }
    }
  }
  // Add the event listener to the browser window and call the handleKeyDown fucntion when a key is pressed
  window.addEventListener('keydown',handleKeyDown);
  // Remove all existing event key listeners so there is only 1 active keyevent listener per reload so the browser does not become slower due to the amount of eventlisteners active
  return () => window.removeEventListener('keydown',handleKeyDown);
},[correctLetters,wrongLetters,playable]);
// Function to reset Game
function playAgain() {
  setPlayable(true);
  //Reset all arrays 
  setCorrectLetters([]);
  setWrongLetters([]);
  const randdom=Math.floor(Math.random()* words.length);
  selectedWord = words[randdom];
}



// Call helper function to set the state value of showing rules to true and display rules 
function displayRules(){ 
  dispRules(setShowRules); 
}
  return (
    <>
    {/*Header component to inform user about game*/}
      <Header playAgain={playAgain} showRules={displayRules}/>
      {/*Div containing Hangman Figure component used to illustrate hangman lives remaining*/ }
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />      
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord ={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        <Notification showNotification={showNotification}/>
        <Rules showRules={showRules}/>
    </>
  );
}

export default App;
