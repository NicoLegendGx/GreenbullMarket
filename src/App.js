import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import Carrusel from "./components/carrusel"; 
import Category from "./components/Category";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
  <>
      <Navbar />
      <Carrusel />
      <Category />

      <section className="section beige lighten-4 center">
        <div className="container">
          <h4 className="green-text text-darken-4">Ofertas Especiales</h4>
          <div className="row">
            {[
              { img: "OfertaAlcohol.jpg" },
              { img: "CanastaFamilar.jpg" },
              { img: "OfertaCarneRefri.jpg" },
              { img: "OfertaYogurt.jpg" },
            ].map((p, i) => (
              <div className="col s12 m6 l3" key={i}>
                <div
                  className="card z-depth-2 hoverable"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    transform: "translateY(0px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-7px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 18px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <div
                    className="card-image"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <img
                      src={p.img}
                      alt="Oferta"
                      className="responsive-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <span
                      className="red darken-2 white-text z-depth-2"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        padding: "6px 12px",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
                    >
                      OFERTA
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="container">
          <h4 className="green-text text-darken-4">Productos Recomendados</h4>
          <h6 className="grey-text text-darken-1">
            Nuestros productos más comprados, ¡por si te interesan!
          </h6>

          <div className="row">
            {[
              { nombre: "Manzanas", precio: "$4.500", img: "Manzanas.png" },
              { nombre: "Leche", precio: "$3.200", img: "Leche.png" },
              { nombre: "Arroz", precio: "$2.800", img: "Arroz.png" },
              { nombre: "Carne", precio: "$12.000", img: "Carne.png" },
              { nombre: "Huevos", precio: "$10.500", img: "Huevo.png" },
              { nombre: "Pan", precio: "$2.000", img: "Pan.png" },
              { nombre: "Queso", precio: "$7.200", img: "Queso.png" },
              { nombre: "Cerveza", precio: "$2.800", img: "Cerveza.png" },
            ].map((p, i) => (
              <div className="col s12 m6 l3" key={i}>
                <div
                  className="card z-depth-1 hoverable"
                  style={{
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    transform: "translateY(0px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <div
                    className="card-image"
                    style={{
                      height: "180px",
                      overflow: "hidden",
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
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <span
                      className="card-title black-text"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      {p.nombre}
                    </span>
                    <p className="green-text text-darken-2">{p.precio}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href="#!"
                      className="btn-small green darken-2 waves-effect waves-light"
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        padding: "0 10px",
                      }}
                    >
                      <i className="material-icons left">add_shopping_cart</i>
                      Agregar
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

export default App;
