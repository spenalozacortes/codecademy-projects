/* 
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
*/

const team = {
    _players: [
      { firstName: 'Teemu', lastName: 'Selänne', age: 52 },
      { firstName: 'Mikko', lastName: 'Koskinen', age: 34 },
      { firstName: 'Patrik', lastName: 'Laine', age: 24 }
    ],
    _games: [
      { opponent: 'United States', teamPoints: 4, opponentPoints: 1 },
      { opponent: 'Sweden', teamPoints: 2, opponentPoints: 3 },
      { opponent: 'Canada', teamPoints: 4, opponentPoints: 3 }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName, 
        lastName: newLastName,
        age: newAge
      };
  
      this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);