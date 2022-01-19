import React from 'react'
// Component to display the wrong letters. Using destructured parameters instead of props
const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div >
                {/*Check if there are more than 0 wrong letters* and if there are more than 0 wrong letters, then we notify the user by displaying "Wrong!"*/ }
                {wrongLetters.length > 0 && <p>Incorret letter!</p>}
                {/*If there is an incorrect chatacter, we need to map through the array of wrong characters and display them to the UI, seperating them with commas by using a reducer function
                which calls a callback function to each element in the array and checks if there is a previous element or not and adds a comma inbetween if there is */}
                {wrongLetters.map((letter,i)=><span key={i}>{letter}</span>)
                .reduce((prev,curr)=>prev===null ? [curr]:[prev,', ',curr], null)}
            </div>
            
        </div>
    )
}

export default WrongLetters
