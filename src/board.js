class Board {
    constructor(x, y) {
        this.numSquares = x * y;
        this.table = [];
    }
    createBoard() {
        for (let i = 0; i < this.numSquares; i++) {
            var square = i;
            this.table.push(square);
        }
    }
};


