import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Lacteos() {
  const lacteos = [
    { nombre: "Leche Entera", precio: "$3.200", img: "Leche Alqueria.jpg" },
    { nombre: "Yogurt Natural", precio: "$4.000", img: "Yogurt.png" },
    { nombre: "Queso Campesino", precio: "$7.500", img: "Queso.png" },
    { nombre: "Mantequilla", precio: "$6.000", img: "Mantequilla.jpg" },  
    { nombre: "Leche Deslactosada", precio: "$3.500", img: "LecheDeslactosada.jpg" },
    { nombre: "Queso Mozzarella", precio: "$8.200", img: "QuesoMozzarella.png" },
    { nombre: "Kumis", precio: "$4.500", img: "Kumis.jpg" },
    { nombre: "Crema de Leche", precio: "$5.200", img: "CremaLeche.png" },
    { nombre: "Leche en Polvo", precio: "$9.000", img: "LechePolvo.jpg" },
    { nombre: "Queso Doble Crema", precio: "$8.800", img: "QuesoDobleCrema.jpg" },
    { nombre: "Queso Parmesano", precio: "$10.500", img: "QuesoParmesano.jpg" },
    { nombre: "Postre de Leche", precio: "$6.500", img: "PostreLeche.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Lácteos</b>
          </h4>

          <div className="row">
            {lacteos.map((p, i) => (
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
                      backgroundColor: "#c8e6c9", 
                      height: "200px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.nombre}
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
                      {p.nombre}
                    </span>
                    <p className="green-text text-darken-3"style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                      Precio: {p.precio}
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

export default Lacteos;
