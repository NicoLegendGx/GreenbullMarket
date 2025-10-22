import React from "react";
import { Link, useLocation } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

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
        }}
      >

        <div style={{ display: "flex", alignItems: "center" }}>
          {isLoginPage ? (
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                src="Logo.jpg"
                alt="GreenBull Market"
                style={{
                  height: "70px",
                  width: "70px",
                  marginRight: "10px",
                  borderRadius: "10%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                GreenBullMarket
              </span>
            </Link>
          ) : (
            <>
              <img
                src="Logo.jpg"
                alt="GreenBull Market"
                style={{
                  height: "70px",
                  width: "70px",
                  marginRight: "10px",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
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
            </>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                }}
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
          <Link
            to="/login"
            className="tooltipped"
            data-tooltip="Facebook"
            style={{ color: "white", transition: "0.3s", fontSize: "24px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1877F2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaFacebook />
          </Link>

          <Link
            to="/login"
            className="tooltipped"
            data-tooltip="WhatsApp"
            style={{ color: "white", transition: "0.3s", fontSize: "24px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaWhatsapp />
          </Link>

          <Link
            to="/login"
            className="tooltipped"
            data-tooltip="Instagram"
            style={{ color: "white", transition: "0.3s", fontSize: "24px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaInstagram />
          </Link>

          <Link
            to="/login"
            className="tooltipped"
            data-tooltip="Iniciar sesión"
            style={{ color: "white", transition: "0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <i className="material-icons" style={{ fontSize: "28px" }}>
              person
            </i>
          </Link>

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
