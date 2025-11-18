import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="page-footer"
      style={{
        backgroundColor: "#064420",
        marginTop: "0",
        color: "white",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{ marginBottom: 0, display: "flex", flexWrap: "wrap" }}
        >
          <div className="col s12 m6 l3 center-align">
            <h5 style={{ color: "#ffcc00", fontWeight: "bold" }}>
              GreenBullMarket
            </h5>
            <p style={{ color: "white" }}>
              Tu mercado de confianza al mejor precio.
            </p>

            <div style={{ marginTop: "15px" }}>
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/nicolas.tamayo.586390" },
                { icon: <FaWhatsapp />, link: "https://wa.me/+573219810212" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/nicolast.gx?igsh=MWJiNnh2ZXJna2NydA==" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  style={{
                    color: "white",
                    margin: "0 10px",
                    fontSize: "20px",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffcc00")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col s12 m6 l2">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>
              Contáctanos
            </h6>
            <p>📞 3212760086</p>
            <p>📞 3219810212</p>
            <p>📞 3187135656</p>
            <p>📞 3154453060</p>
            <p>📧 tonto@gmail.com</p>
            <p>📍 Neiva, Huila</p>
          </div>

<div className="col s12 m6 l3">
  <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>
    Links de Interés
  </h6>
  {[
    { nombre: "Sobre nosotros", ruta: "/politicas" },
    { nombre: "Trabaja con nosotros", ruta: "/politicas" },
    { nombre: "Preguntas frecuentes", ruta: "/politicas" },
    { nombre: "Noticias y Actividades", ruta: "/politicas" },
    { nombre: "Malparidos", ruta: "/politicas" }, 
  ].map((link, i) => (
    <Link
      key={i}
      to={link.ruta}
      style={{
        display: "block",
        color: "white",
        transition: "0.3s",
        marginBottom: "4px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
    >
      {link.nombre}
    </Link>
  ))}
</div>


<div className="col s12 m6 l2">
  <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>
    Importante
  </h6>
  {[
    { nombre: "Política de cambios", ruta: "/politicas" },
    { nombre: "Términos y condiciones", ruta: "/politicas" },
    { nombre: "Responsabilidad corporativa", ruta: "/politicas" },
    { nombre: "Tratamiento de la información", ruta: "/politicas" },
    { nombre: "Politica AntiTravestis", ruta: "/politicas" },
  ].map((link, i) => (
    <Link
      key={i}
      to={link.ruta}
      style={{
        display: "block",
        color: "white",
        transition: "0.3s",
        marginBottom: "4px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
    >
      {link.nombre}
    </Link>
  ))}
</div>


          <div className="col s12 m12 l2 center-align">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>
              Conoce nuestras promociones
            </h6>

            <Link
              to="/login"
              className="btn yellow darken-2 black-text waves-effect waves-dark"
              style={{
                borderRadius: "25px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>

      <div
        className="footer-copy center-align"
        style={{
          backgroundColor: "#043815",
          padding: "10px 0",
          marginTop: "0",
        }}
      >
        © 2025 <b>GreenBullMarket</b>
      </div>
    </footer>
  );
};

export default Footer;
