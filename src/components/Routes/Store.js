import React from 'react'
import Grid from '../Grid/Grid';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Products from '../Products/Product';
import CartProvider from '../Store/CartProvider';

const Store = () => {
  return(

   <CartProvider>


       <Header></Header>
         <Grid></Grid>
         <Section/>
         <Products></Products>
   </CartProvider>
  
    

  ) 
}

export default Store;