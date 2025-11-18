import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Bebidas({ agregarAlCarrito }) {
  const bebidas = [
    {
      nombre: "Gaseosa",
      img: "Gaseosa.jpg",
      productos: [
        { nombre: "Coca-Cola", precio: 3000 },
        { nombre: "Sprite", precio: 3000 },
        { nombre: "Pepsi", precio: 3000 },
      ],
    },
    {
      nombre: "Agua",
      img: "Agua.png",
      productos: [
        { nombre: "Agua sin gas", precio: 1500 },
        { nombre: "Agua con gas", precio: 1600 },
      ],
    },
    {
      nombre: "Jugo natural",
      img: "Jugo.jpg",
      productos: [
        { nombre: "Jugo de naranja", precio: 2800 },
        { nombre: "Jugo de mango", precio: 2800 },
        { nombre: "Jugo de fresa", precio: 2800 },
      ],
    },
    {
      nombre: "Té helado",
      img: "Te.jpg",
      productos: [
        { nombre: "Té limón", precio: 2500 },
        { nombre: "Té durazno", precio: 2500 },
      ],
    },
    {
      nombre: "Café",
      img: "Cafe.jpg",
      productos: [
        { nombre: "Café americano", precio: 2000 },
        { nombre: "Café con leche", precio: 2200 },
        { nombre: "Capuchino", precio: 2500 },
      ],
    },
    {
      nombre: "Chocolate caliente",
      img: "Chocolate.jpg",
      productos: [
        { nombre: "Chocolate con leche", precio: 3500 },
        { nombre: "Chocolate oscuro", precio: 3600 },
      ],
    },
    {
      nombre: "Limonada",
      img: "Limonada.jpg",
      productos: [
        { nombre: "Limonada natural", precio: 2200 },
        { nombre: "Limonada de coco", precio: 2500 },
      ],
    },
    {
      nombre: "Malteada",
      img: "Malteada.png",
      productos: [
        { nombre: "Malteada de vainilla", precio: 4000 },
        { nombre: "Malteada de chocolate", precio: 4200 },
        { nombre: "Malteada de fresa", precio: 4000 },
      ],
    },
    {
      nombre: "Cactus",
      img: "cactus.jpg",
      productos: [
        { nombre: "Cactus maracuyá", precio: 4500 },
        { nombre: "Cactus frutos rojos", precio: 4500 },
      ],
    },
    {
      nombre: "Energizante",
      img: "Energizante.jpg",
      productos: [
        { nombre: "Red Bull", precio: 5000 },
        { nombre: "Volt", precio: 4500 },
        { nombre: "Monster", precio: 5200 },
      ],
    },
    {
      nombre: "Leche",
      img: "Leche.jpg",
      productos: [
        { nombre: "Leche entera", precio: 2000 },
        { nombre: "Leche deslactosada", precio: 2100 },
      ],
    },
    {
      nombre: "Vino",
      img: "Vino.jpg",
      productos: [
        { nombre: "Vino tinto", precio: 7000 },
        { nombre: "Vino blanco", precio: 7200 },
      ],
    },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);

  const abrirModal = (bebida) => {
    setCategoriaSeleccionada(bebida);
    const inicial = {};
    bebida.productos.forEach((p) => (inicial[p.nombre] = 0));
    setCantidades(inicial);

    const modal = M.Modal.getInstance(document.getElementById("modalBebida"));
    modal.open();
  };

  const incrementar = (nombre) => {
    setCantidades({ ...cantidades, [nombre]: cantidades[nombre] + 1 });
  };

  const decrementar = (nombre) => {
    if (cantidades[nombre] > 0) {
      setCantidades({ ...cantidades, [nombre]: cantidades[nombre] - 1 });
    }
  };

  const confirmarCompra = () => {
    if (agregarAlCarrito && categoriaSeleccionada) {
      Object.entries(cantidades).forEach(([nombre, cant]) => {
        if (cant > 0) {
          const producto = categoriaSeleccionada.productos.find(
            (p) => p.nombre === nombre
          );
          agregarAlCarrito(producto, cant);
        }
      });
    }
    const modal = M.Modal.getInstance(document.getElementById("modalBebida"));
    modal.close();
  };

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
                      onClick={() => abrirModal(b)}
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

      <div id="modalBebida" className="modal" style={{ borderRadius: "12px" }}>
        {categoriaSeleccionada && (
          <div className="modal-content">
            <h5 className="green-text text-darken-3 center-align">
              {categoriaSeleccionada.nombre}
            </h5>

            <img
              src={categoriaSeleccionada.img}
              alt={categoriaSeleccionada.nombre}
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "12px",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />

            {categoriaSeleccionada.productos.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {p.nombre}
                  </p>
                  <p
                    className="green-text"
                    style={{ margin: 0, fontWeight: "bold" }}
                  >
                    ${p.precio.toLocaleString()}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    className="btn red darken-1"
                    onClick={() => decrementar(p.nombre)}
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
                      minWidth: "40px",
                      textAlign: "center",
                    }}
                  >
                    {cantidades[p.nombre] || 0}
                  </span>

                  <button
                    className="btn green darken-2"
                    onClick={() => incrementar(p.nombre)}
                    style={{
                      borderRadius: "6px",
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                    }}
                  >
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </div>
            ))}

            <div className="center-align" style={{ marginTop: "20px" }}>
              <button
                className="btn green darken-2 waves-effect waves-light"
                style={{
                  borderRadius: "10px",
                  padding: "10px 30px",
                  fontSize: "1rem",
                }}
                onClick={confirmarCompra}
              >
                <i className="material-icons left">add_shopping_cart</i>
                Agregar al carrito
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Bebidas;
