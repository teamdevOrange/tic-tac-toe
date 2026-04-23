import { checkWinner, getNextPlayer } from '../core/gameLogic';

// リセットボタン・勝者/ターン表示

//勝者がいれば勝利メッセージを表示し、そうでなければ次のプレイヤーをHTMLに投げる関数
export function viewTurnorWin(turn, winner) {
  const element = document.createElement('div');
  element.textContent =
    winner !== null ? `${winner}の勝利！` : `${turn}のターン`;
  return element;
}

//スコアを画面に表示する関数
export function viewScore(score) {
  const element = document.createElement('div');
  element.textContent = 'Xのスコア: ${score.X} O: ${score.O}';
  return element;
}

//リセットボタン
export function viewResetButton(onReset) {
  const button = document.createElement('button');
  button.textContent = 'リセット';
  button.addEventListener('click', onReset);
  return button;
}
