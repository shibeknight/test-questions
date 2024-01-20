export class Connect4 {
  //create a multidimensional array to handle the grid(columns and rows) of the board
  private grid: number[][];
  private currentPlayer: number;

  constructor() {
    // Good luck
    //create the array of 7 columns and 6 rows on each
    this.grid = Array.from({ length: 7 }, () => Array(6).fill(0));
    this.currentPlayer = 1;
  }

  play(col: number): string {
    // Good luck
    console.log("disc place in column ", col);
    console.log(`Player ${this.currentPlayer} has a turn`);
    //check if column is full
    if (this.grid[col].filter((row) => row === 0).length === 0) {
      console.log(`Column ${col} is full`);
      return "Column full!";
    }

    //loop starting from the last row in the given column, after finding a 0, change it to player number
    for (let row = this.grid[col].length - 1; row >= 0; row--) {
      if (this.grid[col][row] === 0) {
        this.grid[col][row] = this.currentPlayer;
        break;
      }
    }
    //winning check for current col played
    if(this.checkWin(col)){
      return `Player ${this.currentPlayer} wins!`
    }
    // console.log('grid is here ', this.grid[3])
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    return `Player ${this.currentPlayer === 1 ? 2 : 1} has a turn`;
  }

  //winning conditions
  checkWin(col: number): boolean {
    //find "coordinates of last row,col combination"
    const row = this.findLastFilledRow(col);

    //check winning combinations based on all 4 directions
    if (this.checkDirection(row, col, 0, 1, this.currentPlayer)) return true;
    if (this.checkDirection(row, col, 1, 0, this.currentPlayer)) return true;
    if (this.checkDirection(row, col, 1, 1, this.currentPlayer)) return true;
    if (this.checkDirection(row, col, 1, -1, this.currentPlayer)) return true;

    return false;
  }

  //same as "basic play", just finding row played in col to check if it is a "winning move"
  findLastFilledRow(col: number): number {
    for (let row = this.grid[col].length - 1; row >= 0; row--) {
      if (this.grid[col][row] !== 0) {
        return row;
      }
    }
    return -1;
  }

  checkDirection(row: number, col: number, rowIncrement: number, colIncrement: number, player: number): boolean {
    //counter for how many chips the player has in a certain direction
    let count = 1;

    //loop around the last row,col placed chip, row and col increment are used to move in the grid in all 4 directions
    for (let i = 1; i < 4; i++) {
      const newRow = row + i * rowIncrement;
      const newCol = col + i * colIncrement;
      //check if the chip belongs to the player (1 or 2)
      if (this.grid[newCol][newRow] === player) {
        count++;
      } else {
        break;
      }
    }
    return count >= 4;
  }
}

const newGame = new Connect4();
newGame.play(3);
newGame.play(3);
newGame.play(3);
newGame.play(3);
newGame.play(3);
newGame.play(3);
newGame.play(3);
