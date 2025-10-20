import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Footer = () => {
return (
    <footer className="page-footer" style={{ backgroundColor: "#064420", marginTop: "40px" }}>
    <div className="container">
        <div className="row" style={{ marginBottom: "0" }}>

        <div className="col s12 m6 l2 center-align">
            <h5 style={{ color: "#ffcc00", fontWeight: "bold" }}>GreenBullMarket</h5>
            <p style={{ color: "white" }}>Tu mercado de confianza al mejor precio.</p>
            <div className="footer-social" style={{ marginTop: "10px" }}>
            {["facebook-f", "instagram", "youtube", "tiktok", "whatsapp"].map((icon, i) => (
                <a
                key={i}
                href="#!"
                style={{ color: "white", margin: "0 8px", fontSize: "18px", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                <i className={`fab fa-${icon}`}></i>
                </a>
            ))}
            </div>
        </div>


        <div className="col s12 m6 l2">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Contáctanos</h6>
            <p>3212760086</p>
            <p>321980212</p>
            <p>servicio@greenbull.com</p>
            <p>Neiva, Colombia</p>
        </div>


        <div className="col s12 m6 l3">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Links de Interés</h6>
            {["Sobre nosotros", "Trabaja con nosotros", "Preguntas frecuentes", "Noticias y Actividades"].map(
            (link, i) => (
                <a
                key={i}
                href="#!"
                style={{ display: "block", color: "white", transition: "0.3s", marginBottom: "4px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                {link}
                </a>
            )
            )}
        </div>


        <div className="col s12 m6 l3">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Importante</h6>
            {[
            "Política de cambios",
            "Términos y condiciones",
            "Responsabilidad corporativa",
            "Tratamiento de la información",
            ].map((link, i) => (
            <a
                key={i}
                href="#!"
                style={{ display: "block", color: "white", transition: "0.3s", marginBottom: "4px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
                {link}
            </a>
            ))}
        </div>

        <div className="col s12 m12 l2 center-align">
            <h6 style={{ color: "#ffcc00", fontWeight: "bold" }}>Conoce nuestras promociones</h6>
            <button
            className="btn yellow darken-2 black-text waves-effect waves-dark"
            style={{ borderRadius: "25px", fontWeight: "bold", marginTop: "10px" }}
            >
            Regístrate
            </button>
        </div>
        </div>
    </div>

    <div className="footer-copy center-align" style={{ backgroundColor: "#043815", padding: "10px 0" }}>
        © 2025 <b>GreenBullMarket</b>
    </div>
    </footer>
);
};

export default Footer;