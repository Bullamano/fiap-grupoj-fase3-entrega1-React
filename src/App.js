import './App.css';
import Home from './Screens/Home/Home';
import Header from './Components/Header/Header';

/**
 * Need Help.
 * @returns JSX do site Need Help.
 */
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Contents'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
