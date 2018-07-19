class TodoModel{
    constructor(){
        this.todos = [];
    }
    getTodo(){
        return this.todos;
    }
    setTodo(todo){
        this.todos.push(todo);
    }
}
class TodoControll{
    constructor(model,inputView){
        this.model = model;
        this.inputView = inputView;
        this.inputView.addTodoHandler = this.addTodoHandler.bind(this);        
    }
    addTodoHandler(inputText){
        addList(inputText);
        this.model.setTodo(inputText);
    }
}

class InputView{
    constructor(){
        this.addTodoHandler = null;
        this.inputElement = document.querySelector(".todo");
        this.clickBtn();
    }
    clickBtn(){
        const enrollBtn = document.querySelector(".enroll");
        enrollBtn.addEventListener("click", ()=>{
            const inputText = this.inputElement.value;
            //debugger;
            this.addTodoHandler(inputText);
            this.resetInput();
        })
    }
    resetInput(){
        this.inputElement.value = "";
    }
}

function addList(inputText){
    const todoList = document.querySelector(".todolist");
    const list = document.createElement("li");
    const textNode = document.createTextNode(inputText);
    list.appendChild(textNode);
    todoList.appendChild(list);
}

class ListFolderView{
    constructor(){
        this.todoListElement = document.querySelector(".todolist");
        this.parentElement = this.todoListElement.parentElement; 
        this.folderBtn = document.querySelector(".folder");
    }
    clickBtn(){
        this.folderBtn.addEventListener("click", e =>{
            e.target.innerText === "접기" ? 
            (this.hideList(), e.target.innerText = "펼치기")
            : (this.showList(), e.target.innerText = "접기")
        })
    }
    hideList(){
        this.todoListElement.remove();
    }
    showList(){
        this.parentElement.appendChild(this.todoListElement);
    }
}

const todoModel = new TodoModel();
const inputView = new InputView();
const controller = new TodoControll(todoModel,inputView);
const listFolderView = new ListFolderView();
listFolderView.clickBtn();