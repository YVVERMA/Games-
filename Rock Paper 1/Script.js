let userScore = 0;
let computerScore = 0;
const msg = document.getElementById("msg")
const userpoint = document.querySelector(".user-score")
const computerpoint = document.querySelector(".com-score")
const reset = document.querySelector("#Reset")

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randmidx  = Math.floor(Math.random() * 3)
    return options[randmidx]
}

const drowGame = () => {
    console.log("Game was drow");
    msg.innerHTML  = "Game was Drow. Play Again";
    msg.style.backgroundColor = "grey";
    msg.style.color = "black";
}

const showWinner = (userWin,UserChoice,computerChoice) => {
    if(userWin){
        console.log("User won!");
        msg.innerHTML = `You won Your ${UserChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        userpoint.innerText = userScore
    }else {
        console.log("You lose ");
        msg.style.backgroundColor = "red";
        msg.style.color = "white"

        msg.innerText = `You lost ${computerChoice} beats Your ${UserChoice}`
        computerScore++;
        computerpoint.innerHTML = computerScore;
        
    }
};

const playGame = (UserChoice) => {
    console.log("User choice:", UserChoice);
    const computerChoice = genCompChoice();
    console.log(" computer choice: ",computerChoice);
    

    if(UserChoice === computerChoice){
        drowGame();
    }else {
        let userWin = true;
        if(UserChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(UserChoice === "paper"){
            userWin = computerChoice === "scissors"? false : true; 
        }else {
            userWin = computerChoice === 'rock' ? false : true
        }
        showWinner(userWin,UserChoice,computerChoice)
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const UserChoice = choice.getAttribute("id")
        // console.log(UserChoice);
        playGame(UserChoice)
        
    })
})