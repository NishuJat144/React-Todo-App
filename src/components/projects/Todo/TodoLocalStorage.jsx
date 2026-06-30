const todoKey = "React-todo" ;
export const getLocalStorageTodoData = () => {
     const rawTodos =  localStorage.getItem(todoKey);
       if(!rawTodos) return [];
       return JSON.parse(rawTodos);
}


export const setLocalStorageTodoData = (task) => {
     //* Add data to localstorage 
      return localStorage.setItem(todoKey , JSON.stringify(task));
}