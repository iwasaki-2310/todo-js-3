import "./styles.css";

// タスク追加
const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  createIncompleteList(inputText);
}

// 未完了リスト追加
const createIncompleteList = (target) => {
  // 【定義】未完了リストの定義
  const incompleteList = document.getElementById('incomplete-list');
  const completeList = document.getElementById('complete-list');

  // 【定義】リストアイテムの定義
  const incompleteItem = document.createElement('li');
  incompleteItem.className = "item";

  // 【定義】タスクテキストの取得
  const taskText =  document.createElement('p');
  taskText.className = "task-text";
  taskText.innerText = target;

  // 【定義】ボタンの定義
  const btnWrap = document.createElement('div');
  const completeButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const backButton = document.createElement('button');

  btnWrap.className = "btn-wrap";
  completeButton.className = "btn";
  deleteButton.className = "btn";
  backButton.className = "btn";
  
  completeButton.innerText = "完了";
  deleteButton.innerText = "削除";
  backButton.innerText = "戻す";

  btnWrap.appendChild(completeButton);
  btnWrap.appendChild(deleteButton);
  
  // 【アクション】パーツの追加
  incompleteList.appendChild(incompleteItem);
  incompleteItem.appendChild(taskText);
  incompleteItem.appendChild(btnWrap);

  // 【ファンクション】タスク削除
  const deleteFromAnyList = (button, target) => {
    const deleteTarget = button.parentNode.parentNode;
    target.removeChild(deleteTarget);
  }

  // 【発火】タスク完了
  completeButton.addEventListener('click', () =>{
    const completeTaskText = document.createElement('p');
    completeTaskText.className = "task-text";
    completeTaskText.innerText = completeButton.parentNode.parentNode.firstChild.innerText;
    const completeItem = document.createElement('li');
    const btnWrap = document.createElement('div');

    completeItem.className = "item";
    btnWrap.className = "btn-wrap";

    btnWrap.appendChild(backButton);

    completeList.appendChild(completeItem);
    completeItem.appendChild(completeTaskText);
    completeItem.appendChild(btnWrap);
    
    deleteFromAnyList(completeButton, incompleteList);//削除
  });

  //【発火】タスクの削除
  deleteButton.addEventListener('click', () =>{deleteFromAnyList(deleteButton, incompleteList)});

  // 【発火】タスク戻し
  backButton.addEventListener('click', () => {
    deleteFromAnyList(backButton, completeList);
    const completeTaskTxt = backButton.parentNode.parentNode.firstChild.innerText;
    createIncompleteList(completeTaskTxt);
  });
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {onClickAdd()}); 