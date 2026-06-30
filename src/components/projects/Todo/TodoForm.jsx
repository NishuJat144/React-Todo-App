 import { useEffect, useState } from "react" ;
 export const TodoForm = ({onAddTodo}) => {

       //&  State Variables
    // * State for set inputValue
    const [inputValue , setInputValue] = useState({});

    // * Handler Used to handle the input 
    const handleInput = (value) => {
        setInputValue({id : value , content : value , checked : false});
    }
    
    const handleFormSubmit = (event) => {
         event.preventDefault();
         onAddTodo(inputValue)
         setInputValue({id : "" , content : "" , checked : false});
         

    }
    

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" 
                    className="todo-input"
                    autoComplete="off"
                    value={inputValue.content} 
                    onChange= {(event) => handleInput(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
               </button>
                </div>
            </form>
            </section> 
    );
 }
 
 