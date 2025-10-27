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
        marginTop: "40px",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row" style={{ marginBottom: 0, display: "flex", flexWrap: "wrap" }}>
        
        
          <div className="col s12 m6 l3 center-align">
            <h5 style={{ color: "#ffcc00", fontWeight: "bold" }}>GreenBullMarket</h5>
            <p style={{ color: "white" }}>
              Tu mercado de confianza al mejor precio.
            </p>

            
            <div style={{ marginTop: "15px" }}>
              {[
                { icon: <FaFacebookF />, link: "#!" },
                { icon: <FaWhatsapp />, link: "#!" },
                { icon: <FaInstagram />, link: "#!" },
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
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

    
          <div className="col s12 m6 l2">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Contáctanos</h6>
            <p>📞 3212760086</p>
            <p>📞 3219810212</p>
            <p>📞 3187135656</p>
            <p>📞 3154453060</p>
            <p>📧tonto@gmail.com</p>
            <p>📍 Neiva, Huila</p>
          </div>

          
          <div className="col s12 m6 l3">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Links de Interés</h6>
            {[
              "Sobre nosotros",
              "Trabaja con nosotros",
              "Preguntas frecuentes",
              "Noticias y Actividades",
              "Malparidos",
            ].map((link, i) => (
              <a
                key={i}
                href="#!"
                style={{
                  display: "block",
                  color: "white",
                  transition: "0.3s",
                  marginBottom: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="col s12 m6 l2">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Importante</h6>
            {[
              "Política de cambios",
              "Términos y condiciones",
              "Responsabilidad corporativa",
              "Tratamiento de la información",
              "Politica AntiTravestis",
            ].map((link, i) => (
              <a
                key={i}
                href="#!"
                style={{
                  display: "block",
                  color: "white",
                  transition: "0.3s",
                  marginBottom: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {link}
              </a>
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
          marginTop: "20px",
        }}
      >
        © 2025 <b>GreenBullMarket</b>
      </div>
    </footer>
  );
};

export default Footer;
