import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Home = () => {
  return (
    <section className="section">
      <div className="home-container">
        <div className="span-content"></div>
        <div className="content">
          <h1 className="home-title">
            BOLD TATTOO <br /> STUDIO & DESIGN
          </h1>
          <button id="appointment-btn">AGENDE SEU HORÁRIO</button>
          <div className="icons-container">
            <BsWhatsapp className="icon" />
            <BsInstagram className="icon" />
            <BsFacebook className="icon" />
            <div className="span-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
