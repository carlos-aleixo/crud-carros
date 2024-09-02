import React from 'react';

function ListaCarro({ cars, updateCar, deleteCar }) {
  return (
    <div>
      <h3>Lista de Carros</h3>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.imagem} alt={car.modelo} />
            <div>{car.modelo} - {car.marca} - {car.valor}</div>
            <button onClick={() => updateCar(car.id, {...car, valor: car.valor + 1000})}>Editar</button>
            <button onClick={() => deleteCar(car.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCarro;