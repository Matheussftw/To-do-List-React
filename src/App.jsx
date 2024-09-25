import { useState } from 'react';
import "./App.css";
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Criar funcionalidade x no sistema', category: 'Trabalho', isCompleted: false },
    { id: 2, text: 'Ir para academia', category: 'Pessoal', isCompleted: false },
    { id: 3, text: 'Estudar React', category: 'Estudos', isCompleted: false },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            onComplete={completeTodo} 
            onRemove={removeTodo} 
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
