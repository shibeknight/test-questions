class Connect4 {
  //create a multidimensional array to handle the grid(columns and rows) of the board
  private grid: number[][]
  private currentPlayer: number

  constructor() {
    // Good luck
    //create the array of 7 columns and 6 rows on each
    this.grid = Array.from({ length: 7 }, () => Array(6).fill(0));
    this.currentPlayer = 1
  }

  play(col: number): string {
    // Good luck
    console.log("disc place in column ", col);
    console.log(`Player ${this.currentPlayer} has a turn`)
    //check if column is full
    if(this.grid[col].filter(row => row === 0).length === 0){
      console.log(`Column ${col} is full`)
      return "Column full!"
    }

    //loop starting from the last row in the given column, after finding a 0, change it to 1
    for(let row = this.grid[col].length-1; row >= 0; row--){
      if(this.grid[col][row] === 0){

        this.grid[col][row] = 1

        break
      }
    }
    // console.log('grid is here ', this.grid[3])
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    return `Player has a turn`;
  }
}

const newGame = new Connect4();
newGame.play(3)
newGame.play(3)
newGame.play(3)
newGame.play(3)
newGame.play(3)
newGame.play(3)
newGame.play(3)
