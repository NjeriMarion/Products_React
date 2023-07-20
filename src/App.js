// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navigation from './navbar';
import Login from './logIn';
import Products from './Products';
// import Title from './title';
import ProductDetails from './details';

function App() {
  return (
    <div className="App">
      {/* <Navigation/>
      <Login/>
      <Title/>
      <Products/>
      <ProductDetails/>
      <Details/> */}
      <Navigation/>
      


      <Router>
        <Routes>
          <Route path='/'  element={ <Login/> } />
          <Route path='/product'  element={ <Products/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
