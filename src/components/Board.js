// 盤面全体の描画
import { oneSquare } from './Square.js';

export function viewBoard(boardState, onCellClick) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 9; i++) {
    fragment.appendChild(oneSquare(i, boardState[i], onCellClick));
  }
  return fragment;
}
