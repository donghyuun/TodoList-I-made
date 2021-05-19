const inputField = document.querySelector(".input-field");
const input = inputField.querySelector(".input");
const inputButton = inputField.querySelector(".input-button");
const todoList = document.querySelector(".list");

showList();

function addList() {
  let userData = input.value;//getting user entered value
  if (userData.trim() == 0) {
    alert("할일을 입력하세요");
    return;
  }
  listArray.push(input.value);
  localStorage.setItem("todoList", JSON.stringify(listArray));
  input.value = "";
  showList();
}

inputButton.addEventListener("click", addList);

function showList() {
  const getLocalStorage = localStorage.getItem("todoList");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  let newLiTag = "";
  listArray.forEach((item, index) => {
    newLiTag += `<li>${item}, ${index}<i class="fas fa-trash" onclick="deleteList(${index})";></i></li>`
  })
  todoList.innerHTML = newLiTag;
}

function deleteList(index) {
  const getLocalStorage = localStorage.getItem("todoList");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  listArray.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(listArray));
  showList();
}
