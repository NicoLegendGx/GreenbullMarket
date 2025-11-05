import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Carnes({agregarAlCarrito}) {
  const carnes = [
    { nombre: "Carne de res", precio: "$12.000", img: "Carne.png" },
    { nombre: "Pechuga de pollo", precio: "$10.500", img: "Pollo.png" },
    { nombre: "Costilla de cerdo", precio: "$11.800", img: "Cerdo.jpg" },
    { nombre: "Chorizo", precio: "$9.200", img: "Chorizo.jpg" },
    { nombre: "Salchicha", precio: "$8.500", img: "Salchicha.jpg" },
    { nombre: "Lomo fino", precio: "$14.000", img: "Lomo.jpg" },
    { nombre: "Pescado", precio: "$13.500", img: "Pescado.jpg" },
    { nombre: "Tocino", precio: "$9.800", img: "Tocino.jpg" },
    { nombre: "Morcilla", precio: "$8.200", img: "Morcilla.jpg" },
    { nombre: "Costilla ahumada", precio: "$12.500", img: "Costilla.jpg" },
    { nombre: "Albóndigas", precio: "$10.000", img: "Albondigas.jpg" },
    { nombre: "Jamón", precio: "$8.000", img: "Jamon.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Carnes</b>
          </h4>

          <div className="row">
            {carnes.map((c, i) => (
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
                      src={c.img}
                      alt={c.nombre}
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
                      {c.nombre}
                    </span>
                    <p className="green-text text-darken-3" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                      Precio: {c.precio}
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

export default Carnes;
