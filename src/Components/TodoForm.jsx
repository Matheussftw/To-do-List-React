import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    addTodo(value, category);

    // Reseta os campos
    setValue("");
    setCategory("");
    setError(""); // Limpa a mensagem de erro
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
          aria-label="Título da tarefa"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Categoria da tarefa"
        >
          <option value="">Selecione uma Categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button className='criar-tarefa' type="submit">Criar Tarefa</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro */}
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
