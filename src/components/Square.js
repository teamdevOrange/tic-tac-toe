// 1マスの描画・クリックイベント

export function oneSquare(index, value, onClick) {
  //div属性を追加する
  const cell = document.createElement('div');
  cell.className = 'square';
  //もらった要素(×とかそういうの)を入れる
  cell.textContent = value;
  //クリックイベントを追加する #9で追加
  cell.addEventListener('click', () => onClick(index));
  return cell;
}
