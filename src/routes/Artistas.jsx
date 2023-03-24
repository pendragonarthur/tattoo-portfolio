import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Artistas = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="artistas-container">
      <div className="title-container">
        <h1 className="title" data-aos="flip-down" data-aos-duration="600">
          Artistas
        </h1>
      </div>
      <span className="span-line"></span>
      <div className="artistas-grid">
        <div className="artista" id="ste">
          <div className="artist-bio">
            <img src="https://placehold.co/600x400" alt="" className="photo" />
            <p className="text">
              <strong>Ste</strong> ipsum dolor sit amet consectetur adipisicing
              elit. Sunt aliquid, possimus quasi officiis adipisci fugit.
            </p>
          </div>
        </div>
        <div className="artista" id="blackout">
          <div className="artist-bio">
            <p className="text">
              <strong>Blackout</strong> ipsum dolor sit amet consectetur
              adipisicing elit. Sunt aliquid, possimus quasi officiis adipisci
              fugit.
            </p>
            <img src="https://placehold.co/600x400" alt="" className="photo" />
          </div>
        </div>
        <div className="artista" id="lari">
          <div className="artist-bio">
            <img src="https://placehold.co/600x400" alt="" className="photo" />
            <p className="text">
              <strong>Lari</strong> ipsum dolor sit amet consectetur adipisicing
              elit. Sunt aliquid, possimus quasi officiis adipisci fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artistas;
