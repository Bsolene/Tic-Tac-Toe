class Game {
    constructor(dimensionBoard, board = Board, player = Player) {
        this.board = new board(dimensionBoard);
        this.playerX = new player('X');
        this.playerO = new player('O');
        this.on = false;
        this.currentPlayer = this.playerX;
    }

    setStartingConditions(){
        if (!this.on) {
            this.board.setBoardToPlay();
            this.on = true;
        }
    };

    play(value) {
        this.setStartingConditions();
        this.currentPlayer.selectSquare(value);
  
        if (this.currentPlayer.selectedSquares.length >= this.board.dimensionBoard && this.isWinner()) {
            this.on = false
           return `The winner is $(this.currentPlayer.type)`; 
        }
        this.nextPlayer();
    };

    nextPlayer() {
        if (this.currentPlayer == this.playerX) {
            this.currentPlayer = this.playerO;
        } else {
            this.currentPlayer = this.playerX;
        }
    };

    isWinner() {
        for (let i = 0; i < this.board.winningCombinations.length; i++) {
            if (JSON.stringify(this.currentPlayer.selectedSquares.sort()) == JSON.stringify(this.board.winningCombinations[i])) {
                return true;
            }    
        }
    };
}