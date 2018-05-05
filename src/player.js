class Player {
    constructor(type) {
        this.type = type;
        this.selectedSquares = [];
    }

    selectSquare(square) {
        this.selectedSquares.push(square);
    };
}