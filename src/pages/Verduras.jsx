import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Verduras({agregarAlCarrito}) {
  const verduras = [
    { nombre: "Lechuga", precio: "$1.500", img: "Lechuga.jpg" },
    { nombre: "Tomate", precio: "$2.200", img: "Tomate.jpg" },
    { nombre: "Cebolla Cabezona", precio: "$2.800", img: "Cabolla.jpg" },
    { nombre: "Zanahoria", precio: "$2.000", img: "Zanahoria.jpg" },
    { nombre: "Pimentón", precio: "$3.000", img: "Pimenton.png" },
    { nombre: "Ajo", precio: "$4.500", img: "Ajo.jpg" },
    { nombre: "Papa Criolla", precio: "$3.800", img: "PapaCriolla.jpg" },
    { nombre: "Repollo", precio: "$2.600", img: "Repollo.jpg" },
    { nombre: "Pepino Cohombro", precio: "$2.100", img: "Pepino.jpg" },
    { nombre: "Apio", precio: "$2.900", img: "Apio.jpg" },
    { nombre: "Cilantro", precio: "$1.200", img: "Cilantro.jpg" },
    { nombre: "Remolacha", precio: "$2.700", img: "Remolacha.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Verduras</b>
          </h4>

          <div className="row">
            {verduras.map((v, i) => (
              <div className="col s12 m6 l3" key={i}>
                <div
                  className="card hoverable z-depth-2"
                  style={{
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.querySelector("img").style.filter =
                      "brightness(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.querySelector("img").style.filter =
                      "brightness(1)";
                  }}
                >
                  <div
                    className="card-image"
                    style={{
                      backgroundColor: "#e6c8c8ff", 
                      height: "200px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={v.img}
                      alt={v.nombre}
                      className="responsive-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px 10px 0 0",
                      }}
                    />
                  </div>

                  <div
                    className="card-content"
                    style={{
                      backgroundColor: "#ffffff", 
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    <span
                      className="card-title black-text"
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      {v.nombre}
                    </span >
                    <p className="green-text text-darken-3" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                      
                      Precio: {v.precio}
                    </p>
                  </div>

                  <div className="card-action center">
                    <a
                      href="#!"
                      className="btn-small green darken-2 waves-effect waves-light"
                      style={{
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#fdd835")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#388e3c")
                      }
                      onClick={() => { 
                        if (agregarAlCarrito) agregarAlCarrito();
                      }}
                    >
                      <i className="material-icons left">add_shopping_cart</i>
                      Al carrito
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="btn yellow darken-2 black-text waves-effect waves-light"
            style={{ borderRadius: "10px", marginTop: "20px" }}
          >
            Volver a Categorías
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Verduras;
