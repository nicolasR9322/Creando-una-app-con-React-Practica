import React from 'react';
import Encabezado from './Encabezado/Encabezado';
import Banner from './Banner/Banner';
import Producto from './Producto/Producto';
import Footer from './Footer/Footer';

function Web(){
  return (
    <div className="container">
     <Encabezado />
     <Banner />
     <Producto />
     <Footer />
    </div>
  )

}
export default Web;