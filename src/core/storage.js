/**
 * スコアをLocalStorageから読み込む
 * @returns {{ X: number, O: number }} スコアオブジェクト
 */
export function loadScore() {
  const raw = localStorage.getItem('ticTacToeScore');
  if (raw === null) {
    return { X: 0, O: 0 }; // 初回はデータがないため、初期値を返す
  }
  return JSON.parse(raw);
}

/**
 * スコアをLocalStorageに保存する
 * @param {'X' | 'O'} winner 勝者のプレイヤー
 */
export function saveScore(winner) {
  const score = loadScore();
  score[winner]++; // 勝者のスコアをインクリメント
  localStorage.setItem('ticTacToeScore', JSON.stringify(score));
}

/**
 * スコアをリセットする
 */
export function resetScore() {
  localStorage.removeItem('ticTacToeScore'); // スコアをリセット（削除）
}
