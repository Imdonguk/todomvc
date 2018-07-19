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
    constructor(model,inputView, listView){
        this.model = model;
        this.inputView = inputView;
        this.listView = listView;
        this.init();
    }
    init(){
        this.inputView.addTodoHandler = this.addTodoHandler.bind(this);
    }
    addTodoHandler(inputText){
        this.listView.addList(inputText);
        this.model.setTodo(inputText);
    }
}

class InputView{
    constructor(){
        this.addTodoHandler = null;
        this.inputElement = document.querySelector(".todo");
        this.init();
    }
    init(){
        this.clickBtn();
    }
    clickBtn(){
        const enrollBtn = document.querySelector(".enroll");
        enrollBtn.addEventListener("click", ()=>{
            const inputText = this.inputElement.value;
            debugger;
            this.addTodoHandler(inputText);
            this.resetInput();
        })
    }
    resetInput(){
        this.inputElement.value = "";
    }
}

class ListView{
    constructor(){

    }
    init(){
        
    }
    addList(inputText){
        const todoList = document.querySelector(".todolist");
        const list = document.createElement("li");
        const textNode = document.createTextNode(inputText);
        list.appendChild(textNode);
        todoList.appendChild(list);
    }
}
const todoModel = new TodoModel();
const inputView = new InputView();
const listView = new ListView();
const controller = new TodoControll(todoModel,inputView,listView);
