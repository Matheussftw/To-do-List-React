import PropTypes from 'prop-types';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => completeTodo(todo.id)}
          aria-label={`Completar tarefa: ${todo.text}`}
          disabled={todo.isCompleted} 
        >
          Completar
        </button>
        <button
          className="remove"
          onClick={() => removeTodo(todo.id)}
          aria-label={`Remover tarefa: ${todo.text}`}
        >
          X
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
