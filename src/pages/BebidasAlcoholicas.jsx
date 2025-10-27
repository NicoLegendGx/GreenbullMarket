import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function BebidasAlcoholicas() {
  const productos = [
    { nombre: "Cerveza", precio: "$3.000", img: "Cerveza.png" },
    { nombre: "Vino Tinto Reserva", precio: "$25.000", img: "VinoTinto.jpg" },
    { nombre: "Ron Viejo de Caldas", precio: "$45.000", img: "Ron.png" },
    { nombre: "Whisky Johnnie Walker", precio: "$80.000", img: "Whisky.jpg" },
    { nombre: "Vodka Absolut", precio: "$35.000", img: "Vodka.jpg" },
    { nombre: "Tequila José Cuervo", precio: "$50.000", img: "Tequila.png" },
    { nombre: "Ginebra Tanqueray", precio: "$40.000", img: "Ginebra.png" },
    { nombre: "Brandy Fundador", precio: "$55.000", img: "Brandy.jpg" },
    { nombre: "Champagne Moët", precio: "$65.000", img: "Champaña.jpg" },
    { nombre: "Vino Blanco Casillero", precio: "$22.000", img: "VinoBlanco.jpg" },
    { nombre: "Sidra Strongbow", precio: "$15.000", img: "Sidra.jpg" },
    { nombre: "Coñac Courvoisier", precio: "$70.000", img: "Coñac.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Bebidas Alcohólicas</b>
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
                      backgroundColor: "#fff176",
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    <span
                      className="card-title black-text"
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      {p.nombre}
                    </span>
                    <p className="green-text text-darken-3">
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

export default BebidasAlcoholicas;