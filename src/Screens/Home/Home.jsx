import React from 'react';
import CustomGrid from '../../Components/CustomGrid/CustomGrid';
import GreeterArea from '../../Components/GreeterArea/GreeterArea';
import CardArray from '../../ExampleTutorials/CardArray';
import './Home.css';

//TODO adicionar mais características para a tela (navbar, logo, footer, etc.)

/**
 * Home screen da aplicação.
 * @returns JSX da Home screen.
 */
const Home = () => {

  return (
    <div className='Home-screen'>
      <GreeterArea />
      <CustomGrid cards={CardArray} />
    </div>
  );
};

export default Home;