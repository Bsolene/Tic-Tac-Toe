class Board {
    constructor(dimensionBoard) {
        this.numSquares = dimensionBoard * dimensionBoard;
        this.table = [];
        this.winningRows = [];
        this.winningColumns = [];
        this.winningDiagonal = [];
        this.dimensionBoard = dimensionBoard;
    }
    createBoard() {
        for (let i = 0; i < this.numSquares; i++) {
            const square = i;
            this.table.push(square);
        };
    };

    winningCombinationRows() {
        for (let i = 0; i < this.table.length; i += this.dimensionBoard) {
            this.winningRows.push(this.table.slice(i, i + this.dimensionBoard))
        };
    };

    winningCombinationColumns() {
        const sortedSquares = [];

        for (let i = 0; i < this.dimensionBoard; i ++) {
            for (let j = 0; j < this.dimensionBoard; j++) {
                sortedSquares.push(this.winningRows[j][i])
            };
        };

        for (let z = 0; z < sortedSquares.length; z += this.dimensionBoard) {
            this.winningColumns.push(sortedSquares.slice(z, z + this.dimensionBoard))
        };
    };

    winningCombinationDiagonal() {
        const squareDiagLeft = [];
        const squareDiagRight = [];

        for (let i = 0; i < this.dimensionBoard; i++) {
            squareDiagLeft.push(this.winningRows[i][i]);
        };

        for (let j = 0, z = (this.dimensionBoard - 1); j < this.dimensionBoard; j++, z--) {
            squareDiagRight.push(this.winningRows[j][z])
        };

        this.winningDiagonal.push(squareDiagLeft, squareDiagRight);
    };
};


