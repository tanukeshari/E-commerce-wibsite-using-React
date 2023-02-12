
import React from 'react'
import './App.css';
import Grid from './components/Grid/Grid';
import Header from "./components/Header/Header";
import Section from './components/Section/Section';
import Products from './components/Products/Product';
import CartProvider from './components/Store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header/>
      <Grid/>
      <Section/>
      <Products/>
    </CartProvider>
  );
}

export default App;