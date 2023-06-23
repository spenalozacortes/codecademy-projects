/* 
A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.
Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.
*/

class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  const balloonAttack = (p1, p2) => {
    p1.balloonCount -= p2.hitsPerMinute * 10;
    p2.balloonCount -= p1.hitsPerMinute * 10;
  
    if(p1.balloonCount == p2.balloonCount) {
      return 'Tie';
    } else if(p1.balloonCount > p2.balloonCount) {
      return p1.name;
    } else {
      return p2.name;
    }
  };
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
   
  console.log(balloonAttack(p1, p2));