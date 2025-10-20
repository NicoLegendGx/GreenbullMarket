import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function Navbar() {
return (
    <nav
    className="z-depth-1"
        style={{
        backgroundColor: "#005921",
        height: "90px",
        display: "flex",
        alignItems: "center",
}}
    >
    <div
        className="nav-wrapper container"
        style={{
    display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        }}>

        <div style={{ display: "flex", alignItems: "center" }}>
        <img
            src="Logo.jpg"
            alt="GreenBull Market"
            style={{
            height: "70px",
            width: "70px",
            marginRight: "10px",
            borderRadius: "10%",
            objectFit: "cover",
            }}/>
        <span
            style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "0.5px",
            }}
        >
            GreenBullMarket
        </span>
        </div>
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>

        <form style={{ flex: 1, maxWidth: "500px" }}>
            <div className="input-field" style={{ margin: 0 }}>
        <input
                id="search"
                type="search"
                placeholder="¿Qué estás buscando hoy?"
                required
                style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "0 15px",
                height: "40px",
                width: "100%",
                color: "#333",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "0.3s",
                }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 6px #ffcc00")}
                onBlur={(e) =>
                (e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)")
                }
            />
            </div>
        </form>
        </div>

        <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "15px",
        }}
        >
        <a
            href="#login"
            className="tooltipped"
            data-tooltip="Iniciar sesión"
            style={{ color: "white", transition: "0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
            <i className="material-icons" style={{ fontSize: "28px" }}>
            person
            </i>
        </a>
        <a
            href="#carrito"
            className="tooltipped"
            data-tooltip="Mi carrito"
            style={{ color: "white", transition: "0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
            <i className="material-icons" style={{ fontSize: "28px" }}>
            shopping_cart
            </i>
        </a>
        </div>
    </div>
    </nav>
);
}

export default Navbar;
