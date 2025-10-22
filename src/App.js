import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import Carrusel from "./components/carrusel";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Frutas from "./pages/Frutas";
import Carnes from "./pages/Carnes";
import Bebidas from "./pages/Bebidas";
import Lacteos from "./pages/Lacteos";
import Verduras from "./pages/Verduras";
import Panaderia from "./pages/Panaderia";
import Pescados from "./pages/Pescados";
import BebidasAlcoholicas from "./pages/BebidasAlcoholicas";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const categorias = [
    { icon: "local_grocery_store", text: "Frutas", link: "/frutas" },
    { icon: "restaurant", text: "Carnes", link: "/carnes" },
    { icon: "local_drink", text: "Bebidas", link: "/bebidas" },
    { icon: "local_pizza", text: "Lácteos", link: "/lacteos" },
    { icon: "eco", text: "Verduras", link: "/verduras" },
    { icon: "cake", text: "Panadería", link: "/panaderia" },
    { icon: "set_meal", text: "Pescados", link: "/pescados" },
    { icon: "liquor", text: "Bebidas Alcohólicas", link: "/bebidas-alcoholicas" },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carrusel />

              <section className="section lime lighten-5">
                <div className="container center-align">
                  <h4 className="black-text text-darken-3">
                    <b>Categorías</b>
                  </h4>

                  <div className="row">
                    {categorias.map((cat, i) => (
                      <div className="col s6 m3" key={i}>
                        <Link
                          to={cat.link || "#!"}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="card hoverable z-depth-2"
                            style={{
                              borderRadius: "50%",
                              backgroundColor: "#09aa44",
                              width: "100px",
                              height: "100px",
                              margin: "20px auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "4px solid black",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = "#ffcc00";
                              e.currentTarget.firstChild.style.color = "#ffcc00";
                              e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "black";
                              e.currentTarget.firstChild.style.color = "black";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >
                            <i
                              className="material-icons black-text"
                              style={{ fontSize: "40px" }}
                            >
                              {cat.icon}
                            </i>
                          </div>
                          <p
                            className="black-text"
                            style={{ fontWeight: "bold" }}
                          >
                            {cat.text}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="section beige lighten-4 center">
                <div className="container">
                  <h4 className="green-text text-darken-4">
                    Ofertas Especiales
                  </h4>
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
                  <h4 className="green-text text-darken-4">
                    Productos Recomendados
                  </h4>
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
                          style={{ borderRadius: "12px" }}
                        >
                          <div
                            className="card-image"
                            style={{ height: "180px", overflow: "hidden" }}
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
                            <p className="green-text text-darken-2">
                              {p.precio}
                            </p>
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
                              <i className="material-icons left">
                                add_shopping_cart
                              </i>
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
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/carnes" element={<Carnes />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/lacteos" element={<Lacteos />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/pescados" element={<Pescados />} />
        <Route path="/bebidas-alcoholicas" element={<BebidasAlcoholicas />} />
      </Routes>
    </Router>
  );
}

export default App;
