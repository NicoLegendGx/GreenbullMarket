import React from "react";
import Footer from "../components/Footer";
function Carnes() {
  const productos = [
    { nombre: "Carne de res", precio: "$12.000", img: "Carne.png" },
    { nombre: "Pechuga de pollo", precio: "$10.500", img: "Pollo.png" },
    { nombre: "Costilla de cerdo", precio: "$11.800", img: "Cerdo.png" },
    { nombre: "Chorizo", precio: "$9.200", img: "Chorizo.png" },
  ];

  return (
    <>
    <div className="container section">
      <h3 className="green-text text-darken-3 center-align">Carnes</h3>
      <div className="row">
        {productos.map((p, i) => (
          <div className="col s12 m6 l3" key={i}>
            <div className="card hoverable z-depth-2" style={{ borderRadius: "12px" }}>
              <div className="card-image" style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="responsive-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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

export default Carnes;
