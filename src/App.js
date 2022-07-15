
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
