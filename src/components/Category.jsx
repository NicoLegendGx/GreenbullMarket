import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

function Category() {
const categorias = [
    { icon: "local_grocery_store", text: "Frutas" },
    { icon: "restaurant", text: "Carnes" },
    { icon: "local_drink", text: "Bebidas" },
    { icon: "local_pizza", text: "Lácteos" },
    { icon: "eco", text: "Verduras" },
    { icon: "cake", text: "Panadería" },
    { icon: "set_meal", text: "Pescados" },
    { icon: "liquor", text: "Bebidas Alcohólicas" },
];

return (
    <section className="section lime lighten-5">
    <div className="container center-align">
        <h4 className="black-text text-darken-3">
        <b>Categorías</b>
        </h4>

        <div className="row">
        {categorias.map((cat, i) => (
            <div className="col s6 m3" key={i}>
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
            <p className="black-text" style={{ fontWeight: "bold" }}>
                {cat.text}
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}

export default Category;
