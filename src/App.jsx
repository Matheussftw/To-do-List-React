import { useState, useEffect } from 'react';
import "./App.css";
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import Search from './Components/Search';
import Filter from './Components/Filter';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: 'Criar funcionalidade x no sistema', category: 'Trabalho', isCompleted: false },
    { id: uuidv4(), text: 'Ir para academia', category: 'Pessoal', isCompleted: false },
    { id: uuidv4(), text: 'Estudar React', category: 'Estudos', isCompleted: false },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    if (!text.trim()) return; // Não adiciona se o texto for vazio
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");

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

  const filteredAndSortedTodos = todos
    .filter((todo) => 
      filter === "All" ? true : 
      filter === "Completed" ? todo.isCompleted : 
      !todo.isCompleted
    )
    .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "Asc") {
        return a.text.localeCompare(b.text);
      } else {
        return b.text.localeCompare(a.text);
      }
    });

  return (
    <div className="app">
      <h1>Minha Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className="todo-list">
        {filteredAndSortedTodos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
