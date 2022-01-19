import React from 'react'
// Header component to display at top of website
const Header = ({playAgain, showRules}) => {
    return (
        <>
           <h1>Welcome to Keegan's Hangman Game!</h1> 
           <p>Enter a letter using your keyboard to guess the letters of the mystery word!</p>
           <div className="btnBlock">
           <button onClick={playAgain} >New Word</button>
           <button onClick={showRules} >Show Rules</button>
           </div>
        </>
    )
}

export default Header
