import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return; // Corrigido para || 

    addTodo(value, category);

    // Reseta os campos
    setValue("");
    setCategory("");
  };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite o título'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma Categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button className='criar-tarefa' type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
