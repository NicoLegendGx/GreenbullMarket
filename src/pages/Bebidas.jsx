import React from "react";
import Footer from "../components/Footer";
function Bebidas() {
  const productos = [
    { nombre: "Gaseosa", precio: "$3.000", img: "Gaseosa.png" },
    { nombre: "Agua", precio: "$1.500", img: "Agua.png" },
    { nombre: "Jugo natural", precio: "$2.800", img: "Jugo.png" },
    { nombre: "Té helado", precio: "$2.500", img: "Te.png" },
  ];

  return (
    <>
    <div className="container section">
      <h3 className="green-text text-darken-3 center-align">Bebidas</h3>
      <div className="row">
        {productos.map((p, i) => (
          <div className="col s12 m6 l3" key={i}>
            <div className="card hoverable z-depth-2" style={{ borderRadius: "12px" }}>
              <div className="card-image" style={{ height: "180px", overflow: "hidden" }}>
                <img src={p.img} alt={p.nombre} className="responsive-img" />
              </div>
              <div className="card-content">
                <span className="card-title black-text" style={{ fontSize: "18px", fontWeight: "600" }}>
                  {p.nombre}
                </span>
                <p className="green-text text-darken-2">{p.precio}</p>
              </div>
              <div className="card-action center">
                <a href="#!" className="btn-small green darken-2 waves-effect waves-light" style={{ borderRadius: "8px" }}>
                  <i className="material-icons left">add_shopping_cart</i>
                  Agregar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Bebidas;
