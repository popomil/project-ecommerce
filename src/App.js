
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import NavBar from './components/NavBar';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <NavBar/>
      <Container className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </Container>
      </ShoppingCartProvider>
  );
}

export default App;
