//Function to randomly generate the computers choice
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3) + 1
    switch(rand){
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissors"
            break
        default:
            return null
    }
}

//Function to take input for the player choice
function getPlayerChoice(){
    let choice = prompt("Enter 'Rock', 'Paper', or 'scissors'").toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice
    } else {
        return null
    }
}

//Function to begin round and determine winner
function startRound(playerChoice, computerChoice){
    if (playerChoice == null || computerChoice == null){
        console.log("Error Generating Choices")
        return
    }

   if (playerChoice == computerChoice){
    return('draw')

   }else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
    return(`player`)

   }else if ((playerChoice == "scissors" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors")){
    return(`computer`)

   }
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for (i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()

        let winner = startRound(playerChoice, computerChoice)

        switch(winner){
            case 'player':
                playerScore += 1
                console.log(`You win! ${playerChoice} beats ${computerChoice}`)
                break

            case 'computer':
                computerScore += 1
                console.log(`You lose. ${computerChoice} beats ${playerChoice}`)
                break

            case 'draw':
                console.log('It was a draw!')
        }
    }

    if(playerScore > computerScore) {
        console.log(`The score is ${playerScore} - ${computerScore}, you win!`)
    } else if (computerScore > playerScore){
        console.log(`The score is ${computerScore} - ${playerScore}, you lose!`)
    } else {
        console.log(`The score is ${computerScore} - ${playerScore}, it's a draw!`)
    }
}

game()