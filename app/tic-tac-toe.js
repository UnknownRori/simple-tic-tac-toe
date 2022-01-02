export class TicTacToe {
    constructor (message, GameApp) {
        this.WinCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.message = message;
        this.GameApp = GameApp;
        this.clear();
    }

    clear () {
        this.score = [0, 0];
        this.restart();
    }

    restart () {
        this.board = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
        this.turn = 1;
        this.update();
        this.GameApp[0].classList.remove('not-allowed');
        this.message[0].classList.add('hidden');
    }

    update() {
        this.updateDisplay();
        this.winCheck();
    }

    claimGrid (grid) {
        console.log(grid);
        switch (this.turn) {
            case 1:
                if (this.board[grid] != 0) return
                this.board[grid] = this.turn;
                this.turn = 2;
                break;
            case 2:
                if (this.board[grid] != 0) return
                this.board[grid] = this.turn;
                this.turn = 1;
                break
            default:
                return
        }

        this.update();
    }

    updateDisplay () {
        this.GameApp[1].forEach((button) => {
            switch (this.board[button.dataset.grid]) {
                case 0:
                    button.innerText = '';
                    button.classList.remove('not-allowed');
                    break;
                case 1:
                    button.innerText = 'X';
                    button.classList.add('not-allowed');
                    break;
                case 2:
                    button.innerText = 'O';
                    button.classList.add('not-allowed');
                    break;
                default:
                    return;
            }
        });
    }

    winCheck () {
        for (let i = 0; i <= 7; i++) {
            const winCondition = this.WinCondition[i];
            let a = this.board[winCondition[0]];
            let b = this.board[winCondition[1]];
            let c = this.board[winCondition[2]];
            if (a === 0 || b === 0 || c === 0) {
                continue;
            }
            if (a === b && b === c) {
                if (a === 1) {
                    this.score[0] += 1;
                    this.MessageBox('Player X Win!');
                } else if (a === 2) {
                    this.score[1] += 1;
                    this.MessageBox('Player O Win!');
                }
            }
        }
    }

    MessageBox (message) {
        this.message[1].innerText = `${message}`;
        this.message[3].innerText = `Player X : ${this.score[0]} Player O : ${this.score[1]}`;
        this.GameApp[0].classList.add('not-allowed');
        this.message[0].classList.remove('hidden');
    }
}
