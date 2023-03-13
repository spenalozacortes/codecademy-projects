const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.x = 0;
    this.y = 0;
    this.field[0][0] = pathCharacter;
  }

  print() {
    for(let row of this.field) {
      console.log(row.join(''));
    }
  }

  runGame() {
    let playing = true;
    while(playing) {
    this.print();
    this.askQuestion();
    if(!this.isInbounds()) {
      console.log("You're outside the field!");
      playing = false;
    } else if(this.isHole()) {
      console.log("You fell down a hole!");
      playing = false;
    } else if(this.isHat()) {
      console.log("You found your hat! Congrats!");
      playing = false;
    }
    this.field[this.y][this.x] = pathCharacter;  
    }
  }

  askQuestion() {
    const answer = prompt('Which way? ').toLowerCase();
    switch(answer) {
      case 'u':
        this.y -= 1;
        break;
      case 'd':
        this.y += 1;
        break;
      case 'r':
        this.x += 1;
        break;
      case 'l':
        this.x -= 1;
        break;
      default:
        console.log("Enter u, d, r or l !!!");
        this.askQuestion();
        break;
    }
  }

  isInbounds() {
    return this.x >= 0 && this.y >= 0 && this.x < this.field[0].length && this.y < this.field.length;
  }

  isHole() {
    return this.field[this.y][this.x] === hole;
  }

  isHat() {
    return this.field[this.y][this.x] === hat;
  }

  static generateField(height, width) {
    const field = new Array(height)
        .fill(0)
        .map(element => new Array(width));

    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            const prob = Math.random();
            if(prob >= 0.2) {
                field[y][x] = fieldCharacter;
            } else {
                field[y][x] = hole;
            }
        }
    }

    const hatLocation = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    };

    while(hatLocation.x === 0 && hatLocation.y === 0) {
        hatLocation.x = Math.floor(Math.random() * width);
        hatLocation.y = Math.floor(Math.random() * height);
    }

    field[hatLocation.y][hatLocation.x] = hat;

    return field;
  }
}

const myField = new Field(Field.generateField(10, 10));

myField.runGame();