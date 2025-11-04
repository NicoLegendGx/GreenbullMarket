import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Pescados() {
  const productos = [
    { nombre: "Mojarra Roja", precio: "$15.000", img: "Mojarra.jpg" },
    { nombre: "Bagre", precio: "$13.000", img: "Bagre.jpg" },
    { nombre: "Atún Fresco", precio: "$18.000", img: "Atun.jpg" },
    { nombre: "Trucha", precio: "$16.000", img: "Trucha.jpg" },
    { nombre: "Salmón", precio: "$22.000", img: "Salmón.jpg" },
    { nombre: "Corvina", precio: "$17.000", img: "Corvina.jpg" },
    { nombre: "Róbalo", precio: "$19.000", img: "Robalo.jpg" },
    { nombre: "Sierra", precio: "$14.000", img: "Sierra.png" },
    { nombre: "Pargo Rojo", precio: "$20.000", img: "Pargo.jpg" },
    { nombre: "Camarón", precio: "$25.000", img: "Camaron.png" },
    { nombre: "Calamares", precio: "$16.500", img: "Calamares.jpg" },
    { nombre: "Tilapia", precio: "$12.000", img: "Tilapia.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Pescados</b>
          </h4>

          <div className="row">
            {productos.map((p, i) => (
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
                    <p className="green-text text-darken-3" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
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

export default Pescados;