import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "../components/Footer";

function Verduras() {
  const productos = [
    { nombre: "Lechuga", precio: "$1.500", img: "Lechuga.png" },
    { nombre: "Tomate", precio: "$2.200", img: "Tomate.png" },
    { nombre: "Cebolla Cabezona", precio: "$2.800", img: "Cebolla.png" },
    { nombre: "Zanahoria", precio: "$2.000", img: "Zanahoria.png" },
  ];

  return (
    <>
      <section className="section center">
        <div className="container">
          <h3 className="green-text text-darken-3"><b>Verduras</b></h3>
          <div className="row">
            {productos.map((p, i) => (
              <div className="col s12 m6 l3" key={i}>
                <div className="card hoverable z-depth-2">
                  <div className="card-image" style={{ height: "200px", overflow: "hidden" }}>
                    <img src={p.img} alt={p.nombre} className="responsive-img" />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{p.nombre}</span>
                    <p className="green-text">{p.precio}</p>
                  </div>
                  <div className="card-action">
                    <a href="#!" className="btn green darken-2 waves-effect waves-light">
                      <i className="material-icons left">add_shopping_cart</i>Agregar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Verduras;
