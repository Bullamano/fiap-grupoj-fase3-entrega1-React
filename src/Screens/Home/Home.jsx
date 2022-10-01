import React from 'react';
import CustomGrid from '../../Components/CustomGrid/CustomGrid';

//TODO adicionar mais características para a tela (navbar, logo, footer, etc.)

/**
 * Home screen da aplicação.
 * @returns JSX da Home screen.
 */
const Home = () => {

  /**
   * Objeto para testes de cards/grid
   */
  const cardOne = {
    title: 'titulo',
    steps: 'step'
  };

  /**
   * Array de objetos para testes de cards grid
   */
  const cardArray = [cardOne, cardOne, cardOne, cardOne];

  return (
    <div className='Home-screen'>
      <CustomGrid cards={cardArray} />
    </div>
  );
};

export default Home;