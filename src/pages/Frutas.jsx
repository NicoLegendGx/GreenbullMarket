import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Frutas() {
  const frutas = [
    { nombre: "Manzana", color: "roja", precio: "$2.000/kg" },
    { nombre: "Banano", color: "amarillo", precio: "$1.500/kg" },
    { nombre: "Uva", color: "morada", precio: "$3.000/kg" },
    { nombre: "Naranja", color: "naranja", precio: "$1.800/kg" },
  ];

  return (
    <>
    <section className="section lime lighten-5">
      <div className="container center-align">
        <h4 className="green-text text-darken-3">
          <b>Frutas </b>
        </h4>
        <div className="row">
          {frutas.map((f, i) => (
            <div className="col s12 m6 l3" key={i}>
              <div className="card hoverable small">
                <div className="card-content">
                  <span className="card-title">{f.nombre}</span>
                  <p>
                    Color: {f.color} <br />
                    Precio: {f.precio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className="btn green darken-3">
          Volver a Categorías
        </Link>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Frutas;
