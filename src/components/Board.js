// 盤面全体の描画
import { oneSquare } from './Square.js';

const dummydata = ['X', 'O', ' ', 'X', ' ', 'O', ' ', ' ', 'X'];

export function viewBoard() {
  const board = document.createElement('div');
  for (let i = 0; i < 9; i++) {
    //今はダミーデータを読んでるだけです
    board.appendChild(oneSquare(i, dummydata[i]));
  }
  return board;
}
