// 1マスの描画・クリックイベント

export function oneSquare(index, value) {
  //div属性を追加する
  const cell = document.createElement('div');
  cell.className = 'square';
  //もらった要素(×とかそういうの)を入れる
  cell.textContent = value;
  return cell;
}
