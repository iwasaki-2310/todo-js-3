import "./styles.css";
const addButton = document.getElementById('add-button');//追加ボタン

const onClickAdd = () => {
  const ul = document.getElementById('incomplete-list');//ulタグ
  //テキストボックsの値を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = "";

  // li生成
  const li = document.createElement('li');
  li.className = 'item';
  
  // p生成
  const p = document.createElement('p');
  p.className = 'task';
  p.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement('button');
  completeButton.className = "btn";
  completeButton.innerText = "完了";
  completeButton.addEventListener('click', () => {
    alert('完了');
  });
  //button（削除）タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.className = "btn";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest('li');
    ul.removeChild(deleteTarget);
  });

  btnWrap = document.createElement('div');
  btnWrap.className = "btn-wrap";
  btnWrap.appendChild(completeButton);
  btnWrap.appendChild(deleteButton);

  //liの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(btnWrap);

  // 未完了リストに追加
  ul.appendChild(li);
}
addButton.addEventListener('click', () => onClickAdd());