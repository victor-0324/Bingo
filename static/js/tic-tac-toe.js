const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['&#128525;', '&#128536;'],
        turn_index: 0,
        change: function() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    /*area de atributos */
    container_element: null,
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    init: function(container) {
        this.container_element = container;
    },


    /* funçao da jogada */
    make_play: function(position) {
        if (this.gameover) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winnig_sequences(this.simbols.options[this.simbols.turn_index]);
            if (winning_sequences_index >= 0) {
                this.game_is_over();

            } else {
                this.simbols.change();
            }
            return true;

        } else {
            return false;
        }

    },

    game_is_over: function() {
        this.gameover = true;
        console.log("GAME OVER");
    },
    /*reiniciar o jogo */
    start: function() {
        this.board.fill('');
        this.draw
        this.gameover = false;
    },

    /* funçao para verifica se a sequencia de simbolos esta correta*/

    check_winnig_sequences: function(simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol) {
                console.log('Sequencia vencedora: + i');
                return i;

            }
        };
        return -1;
    },

    draw: function() {
        let content = '';

        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }
        this.container_element.innerHTML = content;
    }


};