// 全体の初期化・コンポーネント接続

import { checkWinner, getNextPlayer, isDraw } from './core/gameLogic.js';
import { viewBoard } from './components/Board.js';
import { loadScore, saveScore } from './core/storage.js';

let state = {
  board: Array(9).fill(null),
  turn: 'X',
  winner: null,
};

function init() {
  document.getElementById('reset-button').addEventListener('click', reset);
  render();
}

function handleCellClick(index) {
  if (state.board[index] || state.winner) {
    return;
  }

  state.board[index] = state.turn;
  state.winner = checkWinner(state.board);

  if (state.winner) {
    saveScore(state.winner);
  } else if (isDraw(state.board)) {
    state.winner = 'draw';
  } else {
    state.turn = getNextPlayer(state.turn);
  }

  render();
}

function render() {
  //盤面
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  boardElement.appendChild(viewBoard(state.board, handleCellClick));

  const messageEl = document.getElementById('message');
  if (state.winner === 'draw') {
    messageEl.textContent = 'draw';
  } else if (state.winner) {
    messageEl.textContent = `${state.winner}の勝利！`;
  } else {
    messageEl.textContent = `${state.turn}のターン`;
  }

  // スコア
  const score = loadScore();
  document.getElementById('score-x').textContent = score.X;
  document.getElementById('score-o').textContent = score.O;
}

function reset() {
  state = {
    board: Array(9).fill(null),
    turn: 'X',
    winner: null,
  };
  render();
}

init();
