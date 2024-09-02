import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaCarro from '../components/ListaCarro';
import CarroForm from '../components/CarroForm';

function GerenciarCarro() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/api/cars').then((response) => setCars(response.data));
  }, []);

  const addCar = (car) => {
    axios.post('/api/cars', car).then((response) => {
      setCars([...cars, response.data]);
    });
  };

  const updateCar = (id, updatedCar) => {
    axios.put(`/api/cars/${id}`, updatedCar).then(() => {
      setCars(cars.map((car) => (car.id === id ? updatedCar : car)));
    });
  };

  const deleteCar = (id) => {
    axios.delete(`/api/cars/${id}`).then(() => {
      setCars(cars.filter((car) => car.id !== id));
    });
  };

  return (
    <div>
      <CarroForm addCar={addCar} />
      <ListaCarro cars={cars} updateCar={updateCar} deleteCar={deleteCar} />
    </div>
  );
}

export default GerenciarCarro;
