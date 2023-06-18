// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerTwoMoveOneValue;
let playerTwoMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerTwoMoveTwoValue;
let playerTwoMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveThreeValue;
let playerTwoMoveThreeType;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (moveOneType && moveTwoType && moveThreeType) {
        if (moveOneValue && moveTwoValue && moveThreeValue) {
            if (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
                if (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
                    if (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
                        if (moveOneValue > 0 && moveOneValue < 100 && moveTwoValue > 0 && moveTwoValue < 100 && moveThreeValue > 0 && moveThreeValue < 100) {
                            if ((moveOneValue + moveTwoValue + moveThreeValue) < 100) {
                                if (player === 'Player One') {
                                    playerOneMoveOneType = moveOneType;
                                    playerOneMoveOneValue = moveOneValue;
                                    playerOneMoveTwoType = moveTwoType;
                                    playerOneMoveTwoValue = moveTwoValue;
                                    playerOneMoveThreeType = moveThreeType;
                                    playerOneMoveThreeValue = moveThreeValue;
                                } else if (player === 'Player Two') {
                                    playerTwoMoveOneType = moveOneType;
                                    playerTwoMoveOneValue = moveOneValue;
                                    playerTwoMoveTwoType = moveTwoType;
                                    playerTwoMoveTwoValue = moveTwoValue;
                                    playerTwoMoveThreeType = moveThreeType;
                                    playerTwoMoveThreeValue = moveThreeValue;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function getRoundWinner(round) {
    if (playerOneMoveOneType && playerTwoMoveOneType && playerOneMoveOneValue && playerTwoMoveOneValue) {
        if (round === 1) {
            if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors') {
                return 'Player One';
            } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock') {
                return 'Player One';
            } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper') {
                return 'Player One';
            } else if (playerOneMoveOneType === playerTwoMoveOneType) {
                if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return 'Player One';
                } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                    return 'Tie';
                } else {
                    return 'Player Two';
                }
            } else {
                return 'Player Two';
            }
        } else if (round === 2) {
            if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors') {
                return 'Player One';
            } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock') {
                return 'Player One';
            } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper') {
                return 'Player One';
            } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
                if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                    return 'Player One';
                } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                    return 'Tie';
                } else {
                    return 'Player Two';
                }
            } else {
                return 'Player Two';
            }
        } else if (round === 3) {
            if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors') {
                return 'Player One';
            } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock') {
                return 'Player One';
            } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper') {
                return 'Player One';
            } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
                if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                    return 'Player One';
                } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                    return 'Tie';
                } else {
                    return 'Player Two';
                }
            } else {
                return 'Player Two';
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function getGameWinner() {
    let playerOne = 0;
    let playerTwo = 0;

    if (getRoundWinner(1) && getRoundWinner(2) && getRoundWinner(3)) {
        if (getRoundWinner(1) === 'Player One') {
            playerOne++;
        } else if (getRoundWinner(1) === 'Player Two') {
            playerTwo++;
        }
    
        if (getRoundWinner(2) === 'Player One') {
            playerOne++;
        } else if (getRoundWinner(2) === 'Player Two') {
            playerTwo++;
        }
    
        if (getRoundWinner(3) === 'Player One') {
            playerOne++;
        } else if (getRoundWinner(3) === 'Player Two') {
            playerTwo++;
        }
    
        if (playerOne > playerTwo) {
            return 'Player One';
        } else if (playerOne < playerTwo) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    } else {
        return null;
    } 
}

function randomMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

function setComputerMoves() {
    playerTwoMoveOneType = randomMove();
    playerTwoMoveTwoType = randomMove();
    playerTwoMoveThreeType = randomMove();

    playerTwoMoveOneValue = Math.floor(Math.random() * 97) + 1; 
    playerTwoMoveTwoValue = Math.floor(Math.random() * (98 - playerTwoMoveOneValue)) + 1;
    playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}