import React, {useEffect} from 'react'
import { checkWin } from '../Helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable,playAgain}) => {
    let finalMessage='';
    let finalMessageRevealWord='';
    let playable=true;
    // Call checkWin function and pass in the parameters to see if the user won
    if(checkWin(correctLetters,wrongLetters,selectedWord)=== 'win'){
        finalMessage="Congratulations!";
        playable =false;
    }
    // Call checkWin function and pass in the parameters to see if the user lost
    else if(checkWin(correctLetters,wrongLetters,selectedWord)=== 'lose'){
        finalMessage="You lost!";
        finalMessageRevealWord=`The word was ${selectedWord}`;
        playable =false;
    }
    // Update the playable props
    useEffect(() => setPlayable(playable));
    

    return (
        <div className="popup-container" style={finalMessage!== '' ? {display:'flex'}:{}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3 >{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup

