import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
.then(resp=> {
  const todo = resp.data as Todo;
  const {id, title, completed} = todo;
  
  logTodo(todo);
});

const logTodo = (todo:Todo) => {
  console.log(`
  The todo with ID: ${todo.id} 
  has a title of: ${todo.title}.
  Is it finished: ${todo.completed}
  `);
};

function x (a: number): string | number {
  return 2;
  
}