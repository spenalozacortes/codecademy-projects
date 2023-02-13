const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("Invalid choice.");
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
  
    if(randomNumber == 0) {
      return 'rock';
    } else if(randomNumber == 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === "bomb") {
      return "You won!";
    }
  
    if(userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if(userChoice === "rock") {
      if(computerChoice === "paper") {
        return "The computer won.";
      } else {
        return "You won!";
      }
    }
  
    if(userChoice === "paper") {
      if(computerChoice === "scissors") {
        return "The computer won.";
      } else {
        return "You won!";
      }
    }
  
    if(userChoice === "scissors") {
      if(computerChoice === "rock") {
        return "The computer won.";
      } else {
        return "You won!";
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice("BOMB");
    let computerChoice = getComputerChoice();
  
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  console.log('hi');
  playGame();