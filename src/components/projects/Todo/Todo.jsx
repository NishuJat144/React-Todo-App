import {useState} from "react" ;
import "./Todo.css" ;
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

export const Todo = () => {

    // * State for set Task
    const [task , setTask] = useState(() => getLocalStorageTodoData());
    
    // * Handler for form submissions
    const handleFormSubmit = (inputValue) => {
        const {id,content,checked} = inputValue ;

        //^  Check input field is empty or not 

        if(!content) return ;
        //? if(task.includes(inputValue)) return ;
       
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
         
        if(ifTodoContentMatched) return ;

        setTask((prevTask) => [...prevTask , {id, content, checked}]);
        
        // console.log('Hey');
        
    };

    // * Add data to localStorage
    setLocalStorageTodoData(task);
    
    // * Handler to handle delete functionality
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((currTask) => currTask.content !== value );
        setTask(updatedTask);
    };

    //* Handler to clear all todos
    const handleClearTodos = () => {
        setTask([]);
    }

    //* Handler to check and unchecked Todo
    const handleCheckTodo = (content) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === content){
                return {...currTask , checked : !currTask.checked};
            }
            else{
                return currTask;
            }
        });
        setTask(updatedTask);
    };

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>

        {/* TODO FORM COMPONENTS */}
          <TodoForm onAddTodo = {handleFormSubmit} /> 

        <section className="myUnordList">
            <ul>
                {
                    task.map((currTask) => {
                        return( 
                        <TodoList 
                        key={currTask.id} 
                        checked = {currTask.checked}
                        data = {currTask.content}
                        onHandleDeleteTodo = {handleDeleteTodo}
                        onHandleCheckTodo = {handleCheckTodo}
                        />
                        );
                    }) 
                }
            </ul>
            </section>    

            <button className="clear-btn" onClick={handleClearTodos}>Clear All</button>
            
            </section>
    );

};
