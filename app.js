
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
function getWinner(playerChoice){
    let computerChoice = getComputerChoice()

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

function main(){
    const div_list = Array.from(document.querySelectorAll(".button"))

    div_list.forEach((curr_div) => {curr_div.addEventListener('click', () => console.log("button Clicked"))})
}

main()