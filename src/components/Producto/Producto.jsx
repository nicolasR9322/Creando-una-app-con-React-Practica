import React, { Component } from 'react';
import {reloj1, reloj2, reloj3, reloj4} from "../../assets/img/"

const Producto = () => {
    return (
        <main className="productos"> 
    <h2 id="productos">Nuestros productos</h2>
    <article>
       <img src={reloj1} alt="Reloj" />
       <h2>Lorem, ipsum.</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
        <h2>Precio: $450</h2>
        <button>Ver más</button>
    </article>
    <article>
        <img src={reloj2} alt="Reloj" />
       <h2>Lorem, ipsum.</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
        <h2>Precio: $650</h2>
        <button>Ver más</button>
    </article>
    <article>
        <img src={reloj3} alt="Reloj" />
       <h2>Lorem, ipsum.</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
        <h2>Precio: $945</h2>
        <button>Ver más</button>
    </article>
    <article>
        <img src={reloj4} alt="Reloj" />
       <h2>Lorem, ipsum.</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
        <h2>Precio: $999</h2>
        <button>Ver más</button>
    </article>
</main>
    )
}

export default Producto;