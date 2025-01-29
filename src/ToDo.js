import { Component } from "react";
import listPicture from "./listPicture.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class ToDo extends Component{

    state={
        userInput: " ",
        toDoList: []
    }

    onChangeInput(e) {
        this.setState({userInput:e})
        console.log(e)
    }

    addItem(input) {
        if (input=== ""){
            alert("Please enter a task")
        } else{
             let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState ({toDoList: listArray, userInput: ""})
    }
}

crossedList(event) {
    let tasks= event.target;
    tasks.classList.toggle("crossed")
}

deleteItem(){
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
}

onFormSubmit(e){
    e.preventDefault();
}

    render(){
        return <div >
          
            <form onSubmit={this.onFormSubmit} className="TodoWrapper"> 
                <div>
                <h1>Get things done!</h1>
                <div className="ListPic"><img src={listPicture} width="150px" alt="To Do list"/></div>
                
                <input type="text" className="todo-input" placeholder="What is the task for today?"
                onChange={(e) => {this.onChangeInput(e.target.value)}}
                value={this.state.userInput}/>
                <button onClick={() => this.addItem(this.state.userInput)}  className="todo-btn">Add Task</button>
                </div>

<ul >
    {this.state.toDoList.map((item,index) =>(
        <li  className="Todo" onClick={this.crossedList} key={index}>{item} <FontAwesomeIcon icon= {faTrash} onClick ={() => this.deleteItem ()}/></li>
    ))}
            </ul>
            </form>
        </div>
    }
}

