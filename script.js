
let todolist = [
    {
        item: 'Buy Milk',
        dueDate:'10/9/2024'
    },
    {
        item: 'Buy Mango',
        dueDate:'10/9/2024'
    }
];
displayitem();
function addtodo(){
    let inputElement = document.querySelector('#todo-input'); 
    let dateElement = document.querySelector('#todo-date');
    let tododate = dateElement.value; 
    let todoItem = inputElement.value;
    todolist.push({item:todoItem,dueDate:tododate});
    inputElement.value = '';
    dateElement.value = '';
    displayitem(); 
}

function displayitem (){
    let containerElement = document.querySelector('.conatiner-item');
    let newHtml = '';
    for(let i =0;i<todolist.length;i++){
        let {item,dueDate} = todolist[i];
        newHtml +=`
          
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class = "btn-delete" onclick = "todolist.splice(${i},1);
                displayitem();
                " >Delete</button>
            
            
        `;
    }
    containerElement.innerHTML = newHtml;
}