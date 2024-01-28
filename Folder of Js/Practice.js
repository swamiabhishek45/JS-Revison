const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value === "") {
    console.log("Add some Todo")
  } else {
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
          <div class="todo-btns">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        `;

    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on user button
  if (e.target.classList.contains("done")) {
    const spanLi = e.target.parentNode.previousElementSibling;
    spanLi.style.textDecoration = "Line-through";
  }
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
});
