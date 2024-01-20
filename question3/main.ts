class Connect4 {
  //create a multidimensional array to handle the grid(columns and rows) of the board
  private grid: number[][]
  private currentPlayer: number

  constructor() {
    // Good luck
    //create the array of 6 columns and 7 rows on each
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1
  }

  play(col: number): string {
    // Good luck
    console.log("disc place in column ", col);
    console.log(`Player ${this.currentPlayer} has a turn`)
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    return `Player has a turn`;
  }
}

const newGame = new Connect4();
newGame.play(3)
newGame.play(2)
newGame.play(3)
newGame.play(3)
newGame.play(3)
newGame.play(3)
