class Board {
    constructor(dimensionBoard) {
        this.numSquares = dimensionBoard * dimensionBoard;
        this.table = [];
        this.winningRows = [];
        this.winningColumns = [];
        this.dimensionBoard = dimensionBoard;
    }
    createBoard() {
        for (let i = 0; i < this.numSquares; i++) {
            var square = i;
            this.table.push(square);
        };
    };

    winningCombinationRows() {
        for (let i = 0; i < this.table.length; i += this.dimensionBoard) {
            this.winningRows.push(this.table.slice(i, i + this.dimensionBoard))
        };
    };

    winningCombinationColumns() {
        var sortedSquares = [];

        for (let i = 0; i < this.dimensionBoard; i ++) {
            for (let j = 0; j < this.dimensionBoard; j++) {
                sortedSquares.push(this.winningRows[j][i])
            };
        };

        for (let z = 0; z < sortedSquares.length; z += this.dimensionBoard) {
            this.winningColumns.push(sortedSquares.slice(z, z + this.dimensionBoard))
        };
    };
};


