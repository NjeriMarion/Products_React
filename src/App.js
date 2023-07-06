import logo from './logo.svg';
import './App.css';
import Navigation from './navbar';
import Login from './logIn';
import Products from './Products';
import Title from './title';
import Details from './details';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Login/>
      <Title/>
      <Products/>
      <Details/>
    </div>
  );
}

export default App;
