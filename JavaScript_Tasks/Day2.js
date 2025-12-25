// Day-2
// Secret Number Games

// function written using closures
function numberGame(){
    secretNum=7;
    n=3
    return function outer(){
        for(let i=1;i<=n;i++){
            const guess=window.prompt("Guess Secret Number, You have only 3 choices");
            n--;
            if(guess < secretNum){
            console.log("Guess a little Higher");
            alert(`Guess a little Higher\nYou have only ${n} chances left`);
            console.log(`You have only ${n} chances left`);
            }
            else if(guess > secretNum){
                console.log("Guess a little Lower");
                alert(`Guess a little Lower\nYou have only ${n} chances left`);
                console.log(`You have only ${n} chances left`);
            }
            else if(guess==secretNum){
                console.log("Congratulations! You Guessed the right number");
                alert('Congratulations! You Guessed the right number');
                break;
            }
        }
    }
}

const output=new numberGame();
output();
