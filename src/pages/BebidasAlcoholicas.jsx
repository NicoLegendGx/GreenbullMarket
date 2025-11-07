import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function BebidasAlcoholicas({ agregarAlCarrito }) {
  const productos = [
    { nombre: "Cerveza", precio: 3000, img: "Cerveza.png" },
    { nombre: "Vino Tinto Reserva", precio: 25000, img: "VinoTinto.jpg" },
    { nombre: "Ron Viejo de Caldas", precio: 45000, img: "Ron.png" },
    { nombre: "Whisky Johnnie Walker", precio: 80000, img: "Whisky.jpg" },
    { nombre: "Vodka Absolut", precio: 35000, img: "Vodka.jpg" },
    { nombre: "Tequila José Cuervo", precio: 50000, img: "Tequila.png" },
    { nombre: "Ginebra Tanqueray", precio: 40000, img: "Ginebra.png" },
    { nombre: "Brandy Fundador", precio: 55000, img: "Brandy.jpg" },
    { nombre: "Champagne Moët", precio: 65000, img: "Champaña.jpg" },
    { nombre: "Vino Blanco Casillero", precio: 22000, img: "VinoBlanco.jpg" },
    { nombre: "Sidra Strongbow", precio: 15000, img: "Sidra.jpg" },
    { nombre: "Coñac Courvoisier", precio: 70000, img: "Coñac.jpg" },
  ];

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setCantidad(1);
    const modal = M.Modal.getInstance(document.getElementById("modalBebida"));
    modal.open();
  };

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const confirmarCompra = () => {
    if (agregarAlCarrito && productoSeleccionado) {
      agregarAlCarrito(productoSeleccionado, cantidad);
    }
    const modal = M.Modal.getInstance(document.getElementById("modalBebida"));
    modal.close();
  };

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

      {/* MODAL DE BEBIDA */}
      <div id="modalBebida" className="modal" style={{ borderRadius: "12px" }}>
        {productoSeleccionado && (
          <div className="modal-content">
            <h5 className="green-text text-darken-3 center-align">
              {productoSeleccionado.nombre}
            </h5>

            <img
              src={productoSeleccionado.img}
              alt={productoSeleccionado.nombre}
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
              Precio unitario: ${productoSeleccionado.precio.toLocaleString()}
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
                    minWidth: "50px",
                    textAlign: "center",
                  }}
                >
                  {cantidad}
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
                    ${(productoSeleccionado.precio * cantidad).toLocaleString()}
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

export default BebidasAlcoholicas;
