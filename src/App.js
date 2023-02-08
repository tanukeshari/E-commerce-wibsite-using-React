import { Fragment } from 'react';
import './App.css';
import Grid from './components/Grids/Grid';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Products from './components/Products/Product';

function App() {
  return (
    <Fragment>
      <Header/>
      <Grid/>
      <Section/>
      <Products/>
    </Fragment>
  );
}

export default App;