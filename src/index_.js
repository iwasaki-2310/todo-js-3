import "./styles.css";
const addButton = document.getElementById('add-button');//追加ボタン

// 【ファンクション】入力した内容が未完了リストに追加される
const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = "";

  createIncompleteList(inputText);
}

// 【ファンクション】未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}

//【ファンクション】未完了リストに追加する関数
// 入力したTODOを追加する時または完了リストから戻す際に使用。
// 未完了リストのTODOとして必要なエレメントや機能をここに全て記述している。
// 「完了」ボタン、「削除」ボタンの機能も定義
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement('li');
  li.className = 'item';

  // p生成
  const p = document.createElement('p');
  p.className = 'task';
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement('button');
  completeButton.className = "btn";
  completeButton.innerText = "完了";

  //button（削除）タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.className = "btn";
  deleteButton.innerText = "削除";

  btnWrap = document.createElement('div');
  btnWrap.className = "btn-wrap";
  btnWrap.appendChild(completeButton);
  btnWrap.appendChild(deleteButton);

  //liの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(btnWrap);

  // 未完了リストに追加
  const ul = document.getElementById('incomplete-list');//ulタグ
  ul.appendChild(li);

  //【発火イベント】アイテム削除
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  //【発火イベント】完了リストへ移行
  completeButton.addEventListener('click', () => {
    // 未完了リストから削除
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(completeTarget);

    // TODOのテキスト取得
    const text = completeTarget.firstElementChild.innerText;

    // li以下を初期化
    completeTarget.textContent = null;

    // 【定義】liタグ>テキストタグ
    const p = document.createElement('p');
    p.className = 'task';
    p.innerText = text;

    // 【定義】liタグ>ボタンタグ
    const btnWrap = document.createElement('div');
    const backButton = document.createElement('button');
    backButton.innerText = "戻す";
    btnWrap.className = "btn-wrap";
    btnWrap.appendChild(backButton);

    // 【発火イベント】「戻す」ボタンが押されたらliタグを完了リストから削除
    backButton.addEventListener('click', () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      //テキスト取得
      const text = deleteTarget.firstChild.innerText;
      createIncompleteList(text);
    });

    // 【定義】liタグの子要素に各タグを設定
    completeTarget.appendChild(p);
    completeTarget.appendChild(btnWrap);

    // 【アクション】完了リストへ移行
    const completeList = document.getElementById('complete-list');
    completeList.appendChild(completeTarget);
  });
}

addButton.addEventListener('click', () => onClickAdd());