import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Bebidas({ agregarAlCarrito }) { 
  const bebidas = [
    { nombre: "Gaseosa", precio: "$3.000", img: "Gaseosa.jpg" },
    { nombre: "Agua", precio: "$1.500", img: "Agua.png" },
    { nombre: "Jugo natural", precio: "$2.800", img: "Jugo.jpg" },
    { nombre: "Té helado", precio: "$2.500", img: "Te.jpg" },
    { nombre: "Café", precio: "$2.000", img: "Cafe.jpg" },
    { nombre: "Chocolate caliente", precio: "$3.500", img: "Chocolate.jpg" },
    { nombre: "Limonada", precio: "$2.200", img: "Limonada.jpg" },
    { nombre: "Malteada", precio: "$4.000", img: "Malteada.png" },
    { nombre: "Cactus", precio: "$4.500", img: "cactus.jpg" },
    { nombre: "Energizante", precio: "$5.000", img: "Energizante.jpg" },
    { nombre: "Leche", precio: "$2.000", img: "Leche.jpg" },
    { nombre: "Vino", precio: "$7.000", img: "Vino.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Bebidas</b>
          </h4>

          <div className="row">
            {bebidas.map((b, i) => (
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
                      src={b.img}
                      alt={b.nombre}
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
                      {b.nombre}
                    </span>
                    <p className="green-text text-darken-3" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                      Precio: {b.precio}
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

export default Bebidas;
