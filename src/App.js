import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
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
  const [ofertaSeleccionada, setOfertaSeleccionada] = useState(null);

  const [carritoCount, setCarritoCount] = useState(0);

  useEffect(() => {
    M.AutoInit();
  }, []);

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

  const ofertas = [
    { img: "OfertaAlcohol.jpg", texto: "Whiskys al 25% de descuento en todas las marcas premium." },
    { img: "CanastaFamiliarV.jpg",texto: "Canasta familiar con 20 productos de primera necesidad a precio especial." },
    { img: "OfertaCarneRefri.jpg", texto: "Carnes refrigeradas con 30% de descuento. Calidad garantizada." },
    { img: "OfertaYogurt.jpg", texto: "Yogures y lácteos a mitad de precio por tiempo limitado. ¡Aprovecha!" },
    { img: "NCanastaAseoV.jpg", texto: "Canastra de aseo con productos de primera necesidad para el hogar." },
    { img: "NCanastaKitCocinaV.jpg", texto: "Kits de cocina completos con precio especial." },
    { img: "NCanastaSupermercadoV.jpg", texto: "Canasta de supermercado con productos de primera nececidad." },
    { img: "NOfertaFruta.jpg", texto: "Frutas frescas con hasta 50% de descuento directo en caja." },
    { img: "NOfertaLimpieza.jpg", texto: "Productos de limpieza al mejor precio, con 50% en oferta." },
    { img: "NOfertaVerdura.jpg", texto: "Verduras verdes seleccionadas a 30% del precio." },
    { img: "NOfertaCelular.jpg", texto: "Celulares de última generación al 10% (Segunda unidad)." },
    { img: "NOfertaCereal.jpg", texto: "Cereales nutritivos en oferta del 15% para toda la familia." },
  ];


  const agregarAlCarrito = () => {
    setCarritoCount((prev) => prev + 1); 
    M.toast({ html: "Producto agregado al carrito 🛒", classes: "green darken-2" });
  };

  return (
    <Router>

      <Navbar carritoCount={carritoCount} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carrusel />


              <section className="section lime lighten-5">
                <div className="container">
                  <h4 className="center black-text text-darken-3">
                    <b>Categorías</b>
                  </h4>
                  <div className="row">
                    {categorias.map((cat, i) => (
                      <div className="col s12 m6 l3" key={i}>
                        <Link to={cat.link || "#!"} style={{ textDecoration: "none" }}>
                          <div
                            className="card hoverable z-depth-2"
                            style={{
                              backgroundColor: "#43a047",
                              borderRadius: "12px",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#66bb6a";
                              e.currentTarget.querySelector("i").style.color = "#ffeb3b";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#43a047";
                              e.currentTarget.querySelector("i").style.color = "black";
                            }}
                          >
                            <div className="card-content center white-text">
                              <i
                                className="material-icons"
                                style={{
                                  fontSize: "48px",
                                  color: "black",
                                  transition: "color 0.3s ease",
                                }}
                              >
                                {cat.icon}
                              </i>
                              <span
                                className="card-title"
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "1.2rem",
                                  marginTop: "10px",
                                  color: "black",
                                }}
                              >
                                {cat.text}
                              </span>
                            </div>
                            <div
                              className="card-action center"
                              style={{
                                backgroundColor: "rgba(255,255,255,0.2)",
                              }}
                            >
                              <span className="black-text" style={{ fontWeight: "bold" }}>
                                Ver productos
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>


              <section className="section beige lighten-4 center">
                <div className="container">
                  <h4 className="green-text text-darken-4">Ofertas Especiales</h4>
                  <div className="row">
                    {ofertas.map((p, i) => (
                      <div className="col s12 m6 l3" key={i}>
                        <div
                          className="card z-depth-2 hoverable modal-trigger"
                          data-target="modalOferta"
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onClick={() => setOfertaSeleccionada(p)}
                        >
                          <div className="card-image" style={{ position: "relative", height: "400px" }}>
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


<div
  id="modalOferta"
  className="modal"
  style={{
    borderRadius: "12px",
    width: "auto",
    maxWidth: "900px",
    overflow: "hidden",
    padding: 0,
  }}
>
  {ofertaSeleccionada ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        height: "auto",
      }}
    >
      {/* 🖼 Imagen a la izquierda */}
      <div
        style={{
          flex: "1 1 50%",
          textAlign: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <img
          src={ofertaSeleccionada.img}
          alt="Oferta"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "12px 0 0 12px",
            display: "block",
          }}
        />
      </div>

      {/* 📝 Texto y botón a la derecha */}
      <div
        style={{
          flex: "1 1 50%",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h4 className="green-text text-darken-3" style={{ margin: 0 }}>
          Detalles de la oferta
        </h4>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: 0 }}>
          {ofertaSeleccionada.texto}
        </p>

<button
  className="btn green darken-2 waves-effect waves-light"
  style={{
    borderRadius: "10px",
    padding: "12px 30px",
    fontSize: "1rem",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  }}
  onClick={agregarAlCarrito}
>
  <i className="material-icons" style={{ fontSize: "18px" }}>
    add_shopping_cart
  </i>
  AGREGAR AL CARRITO
</button>


        {/* ❌ Botón de cerrar dentro de la parte derecha */}
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat"
          style={{
            alignSelf: "flex-end",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Cerrar
        </a>
      </div>
    </div>
  ) : (
    <div className="modal-content">
      <p>Cargando...</p>
    </div>
  )}
</div>



              <section className="section center">
                <div className="container">
                  <h4 className="green-text text-darken-4">Productos Recomendados</h4>
                  <h6 className="grey-text text-darken-1">
                    Nuestros productos más comprados, ¡por si te interesan!
                  </h6>

                  <div className="row">
                    {[
                      { nombre: "Manzanas X 1kg", precio: "$14.500", img: "Manzanas.png" },
                      { nombre: "Leche Alqueria X 1lt", precio: "$5.740", img: "Leche Alqueria.jpg" },
                      { nombre: "Arroz Wahaj X 5kg", precio: "$2.800", img: "Arroz.png" },
                      { nombre: "Carne Molida X kg", precio: "$22.000", img: "Carne Molida.png" },
                      { nombre: "Canasta De Huevos", precio: "$12.500", img: "Canasta de Huevos.jpg" },
                      { nombre: "Pan Bimbo", precio: "$2.000", img: "Pan.png" },
                      { nombre: "Queso Asadero x kg", precio: "$7.200", img: "Queso.png" },
                      { nombre: "Cerveza Heineken", precio: "$2.800", img: "Cerveza.png" },
                      { nombre: "Papel Higienico", precio: "$6.800", img: "papel higienico.jpg" },
                      { nombre: "Salsa De Tomate Fruco X 400gr", precio: "$8.800", img: "salsa de tomate fruco.jpg" },
                      { nombre: "Aceite La Favorita X 3lt", precio: "$4.500", img: "Aceite.jpg" },
                      { nombre: "Blanqueador Full Fresh X 3785ml", precio: "$4.500", img: "Blanqueador.jpg" },
                    ].map((p, i) => (
                      <div className="col s12 m6 l3" key={i}>
                        <div className="card z-depth-1 hoverable" style={{ borderRadius: "12px" }}>
                          <div className="card-image" style={{ height: "180px", overflow: "hidden" }}>
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
                              onClick={agregarAlCarrito}
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
          }
        />

        <Route path="/login" element={<Login agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/frutas" element={<Frutas agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/carnes" element={<Carnes agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/bebidas" element={<Bebidas agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/lacteos" element={<Lacteos agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/verduras" element={<Verduras agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/panaderia" element={<Panaderia agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/pescados" element={<Pescados agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/bebidas-alcoholicas" element={<BebidasAlcoholicas agregarAlCarrito={agregarAlCarrito}/>} />
      </Routes>
    </Router>
  );
}

export default App;
