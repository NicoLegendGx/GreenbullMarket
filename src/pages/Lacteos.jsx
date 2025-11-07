import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Lacteos({ agregarAlCarrito }) {
  const lacteos = [
    { nombre: "Leche Entera", precio: 3200, img: "Leche Alqueria.jpg" },
    { nombre: "Yogurt Natural", precio: 4000, img: "Yogurt.png" },
    { nombre: "Queso Campesino", precio: 7500, img: "Queso.png" },
    { nombre: "Mantequilla", precio: 6000, img: "Mantequilla.jpg" },
    { nombre: "Leche Deslactosada", precio: 3500, img: "LecheDeslactosada.jpg" },
    { nombre: "Queso Mozzarella", precio: 8200, img: "QuesoMozzarella.png" },
    { nombre: "Kumis", precio: 4500, img: "Kumis.jpg" },
    { nombre: "Crema de Leche", precio: 5200, img: "CremaLeche.png" },
    { nombre: "Leche en Polvo", precio: 9000, img: "LechePolvo.jpg" },
    { nombre: "Queso Doble Crema", precio: 8800, img: "QuesoDobleCrema.jpg" },
    { nombre: "Queso Parmesano", precio: 10500, img: "QuesoParmesano.jpg" },
    { nombre: "Postre de Leche", precio: 6500, img: "PostreLeche.jpg" },
  ];

  const [lacteoSeleccionado, setLacteoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);

  const abrirModal = (producto) => {
    setLacteoSeleccionado(producto);
    setCantidad(1);
    const modal = M.Modal.getInstance(document.getElementById("modalLacteo"));
    modal.open();
  };

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const confirmarCompra = () => {
    if (agregarAlCarrito && lacteoSeleccionado) {
      agregarAlCarrito(lacteoSeleccionado, cantidad);
    }
    const modal = M.Modal.getInstance(document.getElementById("modalLacteo"));
    modal.close();
  };

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
                    <p
                      className="green-text text-darken-3"
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      Precio: ${p.precio.toLocaleString()}
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
                      onClick={() => abrirModal(p)}
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
            style={{
              borderRadius: "10px",
              marginTop: "20px",
              paddingBottom: "10px",
            }}
          >
            Volver a Categorías
          </Link>
          <div style={{ paddingBottom: "40px" }}></div>
        </div>
      </section>

      {/* MODAL DE COMPRA */}
      <div id="modalLacteo" className="modal" style={{ borderRadius: "12px" }}>
        {lacteoSeleccionado && (
          <div className="modal-content">
            <h5 className="green-text text-darken-3 center-align">
              {lacteoSeleccionado.nombre}
            </h5>

            <img
              src={lacteoSeleccionado.img}
              alt={lacteoSeleccionado.nombre}
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "12px",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />

            <p
              className="center-align"
              style={{ fontSize: "1.2rem", marginBottom: "20px" }}
            >
              Precio unitario: ${lacteoSeleccionado.precio.toLocaleString()}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {/* Botón AGREGAR AL CARRITO */}
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
                onClick={confirmarCompra}
              >
                <i className="material-icons" style={{ fontSize: "18px" }}>
                  add_shopping_cart
                </i>
                AGREGAR AL CARRITO
              </button>

              {/* Controles de cantidad y total */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  className="btn red darken-1"
                  onClick={decrementar}
                  style={{
                    borderRadius: "6px",
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <i className="material-icons">remove</i>
                </button>

                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    minWidth: "70px",
                    textAlign: "center",
                  }}
                >
                  {cantidad} und
                </span>

                <button
                  className="btn green darken-2"
                  onClick={incrementar}
                  style={{
                    borderRadius: "6px",
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <i className="material-icons">add</i>
                </button>

                <p style={{ fontSize: "1.2rem", margin: 0 }}>
                  Total:{" "}
                  <b className="green-text">
                    ${(lacteoSeleccionado.precio * cantidad).toLocaleString()}
                  </b>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Lacteos;
