import { Row, Col } from "react-bootstrap";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineInstagram
} from "react-icons/ai";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container">
        <Row>
          <Col lg={"4"} md={"6"} sm={"12"} className="phone">
            <IoMdCall />
            <span>+2 010 678 10000 / +2 010 903 55535</span>
          </Col>
          <Col lg={"4"} md={"6"} sm={"12"} className="emails">
            <MdEmail />
            <button href="#"> info@woodshop.com.eg</button>
          </Col>
          <Col lg={"4"} md={"6"} sm={"12"} className="social-icons">
            <ul className="list-unstyled">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiOutlineYoutube />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopNavbar;
