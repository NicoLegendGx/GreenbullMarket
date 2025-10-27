import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Panaderia() {
  const productos = [
    { nombre: "Pan Aliñado", precio: "$2.000", img: "Pan.png" },
    { nombre: "Pan de Queso", precio: "$2.500", img: "PanQueso.jpg" },
    { nombre: "Croissant", precio: "$3.000", img: "Quaso.jpg" },
    { nombre: "Pandebono", precio: "$2.200", img: "Pandebono.jpg" },
    { nombre: "Pan de Yuca", precio: "$2.300", img: "PanYuca.jpg" },
    { nombre: "Rosca de Pan", precio: "$3.500", img: "Rosca.jpg" },
    { nombre: "Pan Integral", precio: "$2.800", img: "PanIntegral.jpg" },
    { nombre: "Pan Tajado", precio: "$4.000", img: "PanTajado.png" },
    { nombre: "Pan de Coco", precio: "$3.200", img: "PanCoco.jpg" },
    { nombre: "Pan Baguette", precio: "$3.800", img: "Baguette.jpg" },
    { nombre: "Pan Rollo", precio: "$2.600", img: "PanRollo.jpg" },
    { nombre: "Muffin", precio: "$3.500", img: "Muffin.jpeg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Panadería</b>
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

export default Panaderia;
