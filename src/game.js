class Game {
    constructor(board = Board, player = Player) {
        this.board = new Board;
        this.playerX = new player('X');
        this.playerO = new player('O');
        this.on = true;
        this.currentPlayer = this.playerX;
    }

    play(value) {
        this.currentPlayer.selectSquare(value);
        this.nextPlayer();
    };

    nextPlayer() {
        if (this.currentPlayer == this.playerX) {
            this.currentPlayer = this.playerO;
        } else {
            this.currentPlayer = this.playerX;
        }
    };
}