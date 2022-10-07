import Home from './Screens/Home/Home';
import Header from './Components/Header/Header'; 
import Footer from './Components/Footer/Footer';
import './App.css';

/**
 * Need Help.
 * @returns JSX do site Need Help.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <div className='Contents'>
        <Home />
      </div>
      <Footer className='Site-footer' />
    </div>
  );
}

export default App;
