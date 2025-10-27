import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Frutas() {
  const frutas = [
    { nombre: "Manzana", precio: "$2.000/kg", img: "FrutaManzana.jpg" },
    { nombre: "Banano", precio: "$1.500/kg", img: "FrutaBanano.jpg" },
    { nombre: "Uva", precio: "$3.000/kg", img: "FrutaUva.jpg" },
    { nombre: "Naranja", precio: "$1.800/kg", img: "FrutaNaranja.png" },
    { nombre: "Limón", precio: "$3.000/kg", img: "FrutaLimon.jpg" },
    { nombre: "Fresa", precio: "$7.500/kg", img: "FrutaFresa.jpg" },
    { nombre: "Piña", precio: "$6.000/kg", img: "FrutaPiña.jpg" },
    { nombre: "Mango", precio: "$5.800/kg", img: "FrutaMango.jpg" },
    { nombre: "Sandía", precio: "$2.000/kg", img: "FrutaSandia.jpg" },
    { nombre: "Papaya", precio: "$4.500/kg", img: "FrutaPapaya.jpg" },
    { nombre: "Melón", precio: "$5.000/kg", img: "FrutaMelon.jpg" },
    { nombre: "Kiwi", precio: "$10.800/kg", img: "FrutaKiwi.jpg" },
  ];

  return (
    <>
      <section className="section lime lighten-5">
        <div className="container center-align">
          <h4 className="green-text text-darken-3">
            <b>Frutas</b>
          </h4>

          <div className="row">
            {frutas.map((f, i) => (
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
                      src={f.img}
                      alt={f.nombre}
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
                      {f.nombre}
                    </span>
                    <p className="green-text text-darken-3">
                      Precio: {f.precio}
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

export default Frutas;
