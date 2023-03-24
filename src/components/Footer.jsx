import {
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsTelephone,
  BsClock,
} from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="item1">
          <p className="footer-text">
            <SlLocationPin className="icon" />
            Rua 951, número 156, 88330-000
          </p>
          <p className="footer-text">
            <MdOutlineEmail className="icon" />
            emailme@myemail.com
          </p>
          <p className="footer-text">
            <BsTelephone className="icon" />
            47 999999999
          </p>
        </div>
        <div className="item2">
          <p className="footer-text">
            <BsClock className="icon" />
            12:00 - 18:00 | SEG à SAB
          </p>
        </div>
        <div className="item3">
          <BsWhatsapp className="icon" />
          <BsInstagram className="icon" />
          <BsFacebook className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
