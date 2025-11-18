import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Politicas() {
useEffect(() => {
    M.AutoInit();
}, []);

return (
    <div className="grey lighten-4">

    <main className="container section">

        <h2 className="center-align blue-text text-darken-3" style={{ fontWeight: "700" }}>
        POLÍTICAS E INFORMACIÓN DEL SITIO
        </h2>
        <p className="flow-text center-align">
            Acá encontra toda la información sobre la privacidad y seguridad de los datos de nuestros usuarios.
            Además de unas normas seleccionadas cuidadosamente por el equipo de mercadeo para un buen desarrollo digital.
        </p>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🔗 Links de Interés</span>
            <p>
            Aquí encontrarás una recopilación curada de enlaces útiles relacionados
            con nuestros servicios, recursos para usuarios, guías rápidas y páginas
            asociadas. Incluimos enlaces a: centros de ayuda, tutoriales paso a paso,
            páginas oficiales de proveedores, portales de empleo y asociaciones relevantes.
            Si detectas un enlace roto, repórtalo a través de nuestros canales de contacto.
            </p>
        </div>
        </div>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🏢 Sobre Nosotros</span>
            <p>
            Somos una organización comprometida con la calidad y la satisfacción del
            usuario. Nuestra misión es construir soluciones accesibles, seguras y
            útiles para la comunidad. Si quieres conocer nuestra historia y equipo,
            las formas de contactar con el equipo están disponibles.
            </p>
        </div>
        </div>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>💼 Trabaja con Nosotros</span>
            <p>
            Valoramos el talento, la diversidad y el compromiso. Publicamos vacantes
            periódicamente. Si deseas hacer parte de nuestro equipo, visita la sección
            de empleos o envía tu hoja de vida a nuestro correo de contacto.
            </p>
        </div>
        </div>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>❓ Preguntas Frecuentes</span>
            <p>
            Aquí encontrarás respuestas a dudas comunes sobre nuestros servicios, métodos
            de pago, tiempos de soporte y recuperación de cuenta. Si necesitas más ayuda,
            contáctanos directamente.
            </p>
        </div>
        </div>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>📰 Noticias y Actividades</span>
            <p>
            Publicamos noticias sobre eventos, lanzamientos y promociones activas.
            Puedes suscribirte a nuestro boletín para recibir notificaciones.
            La última noticia fue la nueva política implementada sobre prohibir el uso del sitio web a personas 
            trans por un problema con uno de nuestros desarrolladores...
            </p>
        </div>
        </div>


        <div className="card red lighten-4 z-depth-1">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>⚠️ Malparidos</span>
            <p>
            Este título fue agregado por solicitud unánime del eqipo de trabajo. Promovemos lenguaje ofensivo.
            Fomentamos el respeto y el diálogo respetuoso. Cualquier infracción a las normas
            puede ser sancionada.
            </p>
        </div>
        </div>

        <div className="card yellow lighten-4 z-depth-1">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>⚠️ Importante</span>
            <p>
            Información clave sobre mantenimientos, seguridad, cambios legales y
            actualizaciones del sistema será publicada aquí.
            </p>
        </div>
        </div>

        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🔄 Política de Cambios</span>
            <p>
            Aquí explicamos cómo solicitar cambios o devoluciones, plazos, documentación
            y pasos del proceso de verificación y reembolso.
            </p>
        </div>
        </div>

        <div className="card white z-depth-1">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>📜 Términos y Condiciones</span>
            <p>
            Este es el acuerdo legal entre nuestros usuarios y la plataforma.
            Recomendamos contactar al equipo de desarrollo para conocer los terminos y condiciones.
            </p>
        </div>
        </div>

        <div className="card white z-depth-1">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🌱 Responsabilidad Corporativa</span>
            <p>
            Somos responsables con el medio ambiente, cumplimiento normativo y desarrollo
            social. Creemos en la transparencia, inclusión y prácticas laborales justas.
            </p>
        </div>
        </div>


        <div className="card white z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🔐 Tratamiento de la Información</span>
            <p>
            Protegemos los datos personales de acuerdo con la ley de protección de datos.
            Explicamos qué recolectamos, por qué y cómo puedes ejercer tus derechos.
            </p>
        </div>
        </div>


        <div className="card teal lighten-4 z-depth-2">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🤝 Política Antitravestis</span>
            <p>
            En caso de anular la polítca se aplicarán principios de respeto, diversidad e
            igualdad de parte de UN desarrolador del equpo el cual es el del problema. Cualquier acto discriminatorio será tratado con 
            él a solas.
            </p>
            <ul className="browser-default">
            <li>No discriminación por identidad de género u orientación sexual.</li>
            <li>Canales de denuncia confidenciales.</li>
            <li>Sensibilización en temas de diversidad.</li>
            <li>Compromiso con los derechos humanos.</li>
            </ul>
        </div>
        </div>


        <div className="card blue lighten-4 z-depth-1">
        <div className="card-content">
            <span className="card-title" style={{ fontWeight: "700" }}>🎁 Conoce Nuestras Promociones</span>
            <p>
            Aquí mostramos promociones vigentes, límites, exclusiones y requisitos para
            acceder a descuentos o ventajas especiales.
            </p>
        </div>
        </div>

        <footer className="center-align section">
        <p>Última actualización: {new Date().toLocaleDateString()}</p>
        </footer>
    </main>

    <Footer />
    </div>
);
}
