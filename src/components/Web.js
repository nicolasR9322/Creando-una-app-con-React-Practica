import React from 'react';
import Encabezado from './Encabezado/Encabezado';
import Banner from './Banner/Banner';
import Producto from './Producto/Producto';

function Web(){
  return (
    <div className="container">
     <Encabezado />
     <Banner />
     <Producto />
    </div>
  )

}
export default Web;