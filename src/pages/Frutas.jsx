import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Frutas({ agregarAlCarrito }) {
  const frutas = [
    { nombre: "Manzana", precio: 2000, img: "FrutaManzana.jpg" },
    { nombre: "Banano", precio: 1500, img: "FrutaBanano.jpg" },
    { nombre: "Uva", precio: 3000, img: "FrutaUva.jpg" },
    { nombre: "Naranja", precio: 1800, img: "FrutaNaranja.png" },
    { nombre: "Limón", precio: 3000, img: "FrutaLimon.jpg" },
    { nombre: "Fresa", precio: 7500, img: "FrutaFresa.jpg" },
    { nombre: "Piña", precio: 6000, img: "FrutaPiña.jpg" },
    { nombre: "Mango", precio: 5800, img: "FrutaMango.jpg" },
    { nombre: "Sandía", precio: 2000, img: "FrutaSandia.jpg" },
    { nombre: "Papaya", precio: 4500, img: "FrutaPapaya.jpg" },
    { nombre: "Melón", precio: 5000, img: "FrutaMelon.jpg" },
    { nombre: "Kiwi", precio: 10800, img: "FrutaKiwi.jpg" },
  ];

  const [frutaSeleccionada, setFrutaSeleccionada] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);

  const abrirModal = (fruta) => {
    setFrutaSeleccionada(fruta);
    setCantidad(1);
    const modal = M.Modal.getInstance(document.getElementById("modalFruta"));
    modal.open();
  };

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const confirmarCompra = () => {
    if (agregarAlCarrito && frutaSeleccionada) {
      agregarAlCarrito(frutaSeleccionada, cantidad);
    }
    const modal = M.Modal.getInstance(document.getElementById("modalFruta"));
    modal.close();
  };

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
                      backgroundColor: "#ffffff",
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    <span
                      className="card-title black-text"
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      {f.nombre}
                    </span>
                    <p
                      className="green-text text-darken-3"
                      style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      Precio: ${f.precio.toLocaleString()}/kg
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
                      onClick={() => abrirModal(f)}
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


<div id="modalFruta" className="modal" style={{ borderRadius: "12px" }}>
  {frutaSeleccionada && (
    <div className="modal-content">
      <h5 className="green-text text-darken-3 center-align">
        {frutaSeleccionada.nombre}
      </h5>

      <img
        src={frutaSeleccionada.img}
        alt={frutaSeleccionada.nombre}
        style={{
          width: "100%",
          maxWidth: "350px",
          borderRadius: "12px",
          display: "block",
          margin: "0 auto 20px auto",
        }}
      />

      <p className="center-align" style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        Precio por kilo: ${frutaSeleccionada.precio.toLocaleString()}
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

          <span style={{ fontSize: "1.3rem", fontWeight: "bold", minWidth: "70px", textAlign: "center" }}>
            {cantidad} kg
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
              ${(frutaSeleccionada.precio * cantidad).toLocaleString()}
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

export default Frutas;
