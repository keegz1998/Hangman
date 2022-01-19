// Function to take the setter function as a parameter and change its value to true for 2 seconds and then change to flase
export function showNotification(setter){
    setter(true);
    setTimeout(()=>{
        setter(false);
    }, 2000);
}
// Function to take the setter function as a parameter and change its value to true for 10 seconds and then change to false. used to display rules
export function displayRules(setter){
    setter(true);
    setTimeout(()=>{
        setter(false);
    }, 10000);
}
export function checkWin(correct,wrong,word){
    // set default status to won
    let status = 'win';
    // check if correct does not contain the letter, this tells us the word is not correct nor is the game over
    word.split('').forEach(letter=>{
        if(!correct.includes(letter)){
            status='';
        }
    });

    // Check the length of the wrong letters array to see if the user has entered 6 wrong characters.
    if(wrong.length ===6) status = 'lose';
    return status;
}