describe('Game', function () {
    var game;
    beforeEach(function () {
        game = new Game;
    });

    it('should check that the next player is O', function () {
        game.play(2);
        expect(game.currentPlayer.type).toEqual('O');
    });

    it('should check that the player is changed after the first player has played', function (){
        game.play(2);
        game.play(3);
        expect(game.currentPlayer.type).toEqual('X')
    });
})