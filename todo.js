let todoList = [

    {
        item: 'Buy me a coffee',
        dueDate: '31/5/2024'
    },


    {
        item: 'go to school',
        dueDate: '4/6/2024'
    }
];



displayItems();


function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = inputElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';


    displayItems();

}



function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHTML = '';

    for (let i = 0; i < todoList.length; i++) {

        let { item, dueDate } = todoList[i];

        newHTML += `
        
        <span>${item}</span>
        <span>${dueDate}</span>

        <button class='btn-delete' onclick="todoList.splice(${i}, 1)
        displayItems();">Delete</button>
        
        `;

        containerElement.innerHTML = newHTML;
    }
}