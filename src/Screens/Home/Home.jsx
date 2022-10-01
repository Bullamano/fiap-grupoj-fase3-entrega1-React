import React from 'react';
import CustomGrid from '../../Components/CustomGrid/CustomGrid';
import Divider from '@mui/material/Divider';
import GreeterArea from '../../Components/GreeterArea/GreeterArea';
import './Home.css';

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
  const cardArray = [cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne, cardOne,
    cardOne, cardOne, cardOne];

  return (
    <div className='Home-screen'>
      <GreeterArea />
      <Divider className='Divider' />
      <CustomGrid cards={cardArray} />
    </div>
  );
};

export default Home;