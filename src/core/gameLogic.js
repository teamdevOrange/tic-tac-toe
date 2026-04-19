import { PLAYERS, WINNING_PATTERNS } from '../constants/config.js';

/**
 * 勝利判定
 * @param {Array<string|null>} board - マス目9個の状態配列（'X' | 'O' | null）
 * @returns {string|null} 勝者の 'X' または 'O'、勝者なしの場合は null
 */
export function checkWinner(board) {
  for (const pattern of WINNING_PATTERNS) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

/**
 * 引き分け判定
 * @param {Array<string|null>} board - マス目9個の状態配列（'X' | 'O' | null）
 * @returns {boolean} 引き分けの場合は true、そうでない場合は false
 */
export function isDraw(board) {
  return board.every((cell) => cell !== null) && checkWinner(board) === null;
}

/**
 * 次のプレイヤーを取得
 * @param {'X'|'O'} current - 現在のプレイヤー
 * @returns {'X'|'O'} 次のプレイヤー
 */
export function getNextPlayer(current) {
  return current === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
}
