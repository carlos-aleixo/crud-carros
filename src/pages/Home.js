import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo à Aplicação de Vendas de Carros</h1>
      <p>Esta é uma aplicação simples para gerenciar a venda de carros. Você pode visualizar a lista de carros, adicionar novos carros, editar e remover carros existentes.</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;