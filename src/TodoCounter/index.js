import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
  //const {total, completd} = props;
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };
