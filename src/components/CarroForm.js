import React, { useState } from 'react';

function CarroForm({ addCar }) {
  const [car, setCar] = useState({
    modelo: '',
    marca: '',
    imagem: '',
    valor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({...car, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
    setCar({
      modelo: '',
      marca: '',
      imagem: '',
      valor: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="modelo" placeholder="Modelo" value={car.modelo} onChange={handleChange} />
      <input name="marca" placeholder="Marca" value={car.marca} onChange={handleChange} />
      <input name="imagem" placeholder="Link da Imagem" value={car.imagem} onChange={handleChange} />
      <input name="valor" placeholder="Valor" value={car.valor} onChange={handleChange} />
      <button type="submit">Adicionar Carro</button>
    </form>
  );
}

export default CarroForm;