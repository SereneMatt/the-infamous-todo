import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Response data has properties of:
// ID
// Title
// completed
// Equivalent to writing comment
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const {id, title, completed } = todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}