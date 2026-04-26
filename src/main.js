// 全体の初期化・コンポーネント接続

import { checkWinner, getNextPlayer, isDraw } from './core/gameLogic.js';
import { viewBoard } from './components/Board.js';
import { loadScore, saveScore } from './core/storage.js';
import {
  viewTurnorWin,
  viewScore,
  viewResetButton,
} from './components/Controls.js'; //VSCODEで勝手に改行になる　時間がないのと動くのでそのままにしますｗ

let state = {
  board: Array(9).fill(null),
  turn: 'X',
  winner: null,
};

function init() {
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

  //メッセージ部分　※controlいかし
  const messageEl = document.getElementById('message');
  messageEl.innerHTML = '';
  messageEl.appendChild(viewTurnorWin(state.turn, state.winner));

  // スコア　※controlいかし
  const scoreEl = document.getElementById('score');
  scoreEl.innerHTML = '';
  scoreEl.appendChild(viewScore(loadScore()));

  // リセット　※controlいかし
  const controlsEl = document.getElementById('controls');
  controlsEl.innerHTML = '';
  controlsEl.appendChild(viewResetButton(reset));
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
