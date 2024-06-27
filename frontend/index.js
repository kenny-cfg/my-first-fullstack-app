const button = document.getElementById('fetch-todos')
const todoItemsElement = document.getElementById('todo-items')

button.addEventListener('click', async () => {
  todoItemsElement.innerHTML = ''
  const results = await fetch(
    'http://localhost:5000/item'
  );
  const jsonResult = await results.json()
  const list = document.createElement('ul');
  jsonResult.forEach(todoItem => {
    const text = todoItem.text
    const listItem = document.createElement('li')
    listItem.innerText = text
    list.appendChild(listItem);
  })
  todoItemsElement.appendChild(list);
})