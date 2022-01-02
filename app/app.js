import { TicTacToe } from "./tic-tac-toe.js";

const messageBoxElem = document.querySelector('#message-box');
const messageElem = document.querySelector('[data-message]');
const MessageButton = document.querySelector('[data-messageButton]');
const messageScore = document.querySelector('[data-score]');

const message = [messageBoxElem, messageElem, MessageButton, messageScore];

const gameScreen = document.querySelector('#gamescreen');
const ButtonGrid = document.querySelectorAll('[data-grid]');

const GameApp = [gameScreen, ButtonGrid];

const app = new TicTacToe(message, GameApp);

ButtonGrid.forEach((button) => {
    button.addEventListener('click', () => {
        app.claimGrid(button.dataset.grid);
    })
})

MessageButton.addEventListener('click', () => {
    app.restart();
})