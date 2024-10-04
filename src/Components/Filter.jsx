
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>

      <div className="filter-options">
        <div>
          <label htmlFor="filter-select">Status:</label>
          <select 
            id="filter-select"
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button 
            onClick={() => setSort("Asc")} 
            disabled={sort === "Asc"}
          >
            Asc
          </button>
          <button 
            onClick={() => setSort("Desc")} 
            disabled={sort === "Desc"}
          >
            Descendente
          </button>
        </div>
      </div>
    </div>
  );
};


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Filter;
