describe('Board', function () {
    var board;
    beforeEach(function () {
        board = new Board(3, 3);
    });

    it('should create a new board', function () {
        board.createBoard();
        expect(board.table.length).toEqual(9)
    })
})
