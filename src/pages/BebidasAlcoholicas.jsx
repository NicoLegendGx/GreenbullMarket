import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "../components/Footer";

function BebidasAlcoholicas() {
  const productos = [
    { nombre: "Cerveza", precio: "$3.000", img: "Cerveza.png" },
    { nombre: "Vino Tinto", precio: "$25.000", img: "VinoTinto.png" },
    { nombre: "Ron Añejo", precio: "$45.000", img: "Ron.png" },
    { nombre: "Whisky", precio: "$80.000", img: "Whisky.png" },
  ];

  return (
    <>
      <section className="section center">
        <div className="container">
          <h3 className="green-text text-darken-3"><b>Bebidas Alcohólicas</b></h3>
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

export default BebidasAlcoholicas;
