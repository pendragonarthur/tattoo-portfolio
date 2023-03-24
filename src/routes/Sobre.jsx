import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sobre = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div className="about-container">
        <div className="title-container">
          <h1 className="title" data-aos="fade-up" data-aos-delay="200">
            SOBRE NÓS
          </h1>
        </div>
        <div className="span-line"></div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          corrupti veniam, placeat eaque, perspiciatis aut obcaecati cupiditate
          a corporis sed ea soluta deserunt. Odit cumque eveniet sunt
          blanditiis. Quod praesentium accusamus voluptatum quibusdam
          exercitationem explicabo commodi. Accusamus doloribus deleniti nam!
        </p>
        <img src="https://placehold.co/600x400" alt="" />
      </div>
    </div>
  );
};

export default Sobre;
