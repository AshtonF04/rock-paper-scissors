//Initiate global variables
let player_choice
let computer_choice
let player_score
let computer_score
let round_winner
let game_winner

const WINNER_TEXT = document.getElementById("winner_text")
const SCORE_TEXT = document.getElementById("score_text")

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

//Function to begin round and determine winner
function playRound(){
    if (player_choice == null || computer_choice == null){
        console.log("Error Generating Choices")
        return
    }

   if (player_choice == computer_choice){
    return('draw')

   }else if ((player_choice == "rock" && computer_choice == "scissors") || (player_choice == "paper" && computer_choice == "rock") || (player_choice == "scissors" && computer_choice == "paper")){
    player_score += 1
    return(`player`)

   }else if ((player_choice == "scissors" && computer_choice == "rock") || (player_choice == "rock" && computer_choice == "paper") || (player_choice == "paper" && computer_choice == "scissors")){
    computer_score += 1
    return(`computer`)

   }
}

//Reset on screen text
function resetUI(){
    WINNER_TEXT.innerText = "Select An Action To Begin The Game!"
    SCORE_TEXT.innerText = "0 - 0"
}

//Update on screen text
function updateUI() {
    if (round_winner == 'player'){
        WINNER_TEXT.innerText = `You win, ${player_choice} beats ${computer_choice}!`
    }else if (round_winner == "computer") {
        WINNER_TEXT.innerText = `Computer wins, ${computer_choice} beats ${player_choice}!`
    } else {
        WINNER_TEXT.innerText = `It's a draw, you both selected ${player_choice}!`
    }

    SCORE_TEXT.innerText = `${player_score} - ${computer_score}`
}

//Display game winner on text
function finishGameUI(){
    if (game_winner == null) {return}

    WINNER_TEXT.innerText = `Game over, ${game_winner} wins!`
}

//Initiate round from button click
function initiateRound(clicked_div){
    if (game_winner != null) {return}

    player_choice = clicked_div.srcElement.innerText.toLowerCase()
    computer_choice = getComputerChoice()
    round_winner = playRound()

    updateUI()

    if (player_score >= 5){
        game_winner = 'player'
    } else if (computer_score >= 5){
        game_winner = 'computer'
    }

    if (game_winner != null){
        finishGameUI()
    }
}

//Reset game
function startNewGame(){
    player_score = 0
    computer_score = 0
    player_choice = null
    computer_choice = null

    resetUI()
}

//Setup buttons
const div_list = Array.from(document.querySelectorAll(".button"))
div_list.forEach((curr_div) => {curr_div.addEventListener('click', (curr_div) => initiateRound(curr_div))})

startNewGame()