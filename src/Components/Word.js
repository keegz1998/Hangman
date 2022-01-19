import React from 'react'
// Component to display the word. Using destructured parameters instead of props
const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word">
          {
                // Split the selected word into an array of characters and map through each letter 
                selectedWord.split('').map((letter, i) => {
                    return(
                        // Assign the letter a class and key for reference when mapping
                    <span className="letter" key={i}>
                        {/* Check if the letter of the word is in the correctLetters array */}
                        {correctLetters.includes(letter) ? letter:''}
                    </span>
                    );
                })
            }
        </div>
    )
}
export default Word
