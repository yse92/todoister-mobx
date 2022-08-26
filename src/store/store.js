import 'react-native-get-random-values'
import {nanoid} from 'nanoid';
import {makeAutoObservable} from 'mobx';

// const updateTodo = (todos, id, text) => {
//   todos.map(todo => ({
//     ...todo,
//     text: todo.id === id ? text : todo.text,
//   }));
// };
//
// const toggleTodo = (todos, id) => {
//   todos.map(todo => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));
// };

const removeTodo = (todos, id) =>
  todos.filter(todo => {
    return todo.id !== id;
});


const addTodo = (todos, text) => {
  return [...todos, {id: nanoid(), text: text, done: false}];
};

class Store {
  todos = [];
  newTodo = '';

  constructor() {
    makeAutoObservable(this);
  }
  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo)
    this.newTodo = ''
  }
  removeTodo(id) {
    this.todos = removeTodo(this.todos, id)
  }

}
const store = new Store()
export default store;
