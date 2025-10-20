import React, { useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

function Carousel() {
useEffect(() => {
    const elems = document.querySelectorAll(".carousel.carousel-slider");
    const instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    duration: 600,
    });

    const interval = setInterval(() => {
    instances.forEach((instance) => instance.next());
    }, 4000);

    return () => clearInterval(interval);}, []);

return (
    <div className="carousel carousel-slider center">
    <div className="carousel-item white-text" href="#one!">
        <img
        src="DtoMesas.jpg"
        alt="Promoción Mesas"
        className="responsive-img z-depth-3"
        style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
        }}
    />
</div>

    <div className="carousel-item white-text" href="#two!">
        <img
        src="PrecioPC.jpg"
        alt="Promoción Computadores"
        className="responsive-img z-depth-3"
        style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
        }}
        />
    </div>

    <div className="carousel-item white-text" href="#three!">
        <img
        src="PrecioCel.jpg"
        alt="Promoción Celulares"
        className="responsive-img z-depth-3"
        style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
        }}
        />
    </div>

    <div className="carousel-item white-text" href="#four!">
        <img
        src="CanastaFamilar.jpg"
        alt="Canasta Familiar"
        className="responsive-img z-depth-3"
        style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
        }}
        />
    </div>
    </div>
);
}

export default Carousel;
