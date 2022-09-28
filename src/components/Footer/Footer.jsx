import { Container, Row, Col } from "react-bootstrap";
import { BsPhone } from "react-icons/bs";
import { HiOutlinePrinter, HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineInstagram
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../images/logo1.png.webp";
function Footer() {
  return (
    <footer>
      <div className="top-links">
        <Container>
          <Row>
            <Col lg="4" md={"12"}>
              <div className="images">
                <img src={logo} alt="" />
              </div>
            </Col>
            <Col lg="8" md={"12"}>
              <div className="links">
                <Row>
                  <Col lg="4" md="6">
                    <div className="box">
                      <h2>Usa</h2>
                      <ul className="list-unstyled">
                        <li>
                          <HiOutlineLocationMarker />
                          <span>PO.BOX 3464 - LAGUNA WOODS, CA 92654</span>
                        </li>
                        <li>
                          <BsPhone />
                          <span>+1 818-919-5652</span>
                        </li>
                        <li>
                          <HiOutlinePrinter />
                          <span>+1 949-522-0072</span>
                        </li>
                        <li>
                          <AiOutlineMail />
                          <span>sales@futureusainc.com</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="box">
                      <h2>GESR EL SUEZ STORE</h2>
                      <ul className="list-unstyled">
                        <li>
                          <HiOutlineLocationMarker />
                          <span>24 El Arbaeen St., Cairo</span>
                        </li>
                        <li>
                          <BsPhone />
                          <span>+2 02 2894885/6/7/8</span>
                        </li>
                        <li>
                          <HiOutlinePrinter />
                          <span>+2 010 903 44434</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="box">
                      <h2>OBOUR CITY STORES</h2>
                      <ul className="list-unstyled">
                        <li>
                          <HiOutlineLocationMarker />
                          <span>St. 700 - Industrial zone</span>
                        </li>
                        <li>
                          <BsPhone />
                          <span>+2 02 448 900 57/8</span>
                        </li>
                        <li>
                          <HiOutlinePrinter />
                          <span>+2 010 90509777 / +2 010 62778776</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-links">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="12">
              <div className="links">
                <h2>INSHAS STORE</h2>
                <ul className="list-unstyled">
                  <li>
                    <HiOutlineLocationMarker />
                    <span>Arab engineers Association</span>
                  </li>
                  <li>
                    <BsPhone />
                    <span>+2 010 622 67770 / +2 010 326 77799</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="links">
                <h2>TROLLY STORE</h2>
                <ul className="list-unstyled">
                  <li>
                    <HiOutlineLocationMarker />
                    <span>Trolly St. – el Salam city</span>
                  </li>
                  <li>
                    <BsPhone />
                    <span>01066333663 - 01066222622</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="links">
                <h2>مخزن الترولي</h2>
                <ul className="list-unstyled">
                  <li>
                    <HiOutlineLocationMarker />
                    <span>ش الترولى - مدينة السلام</span>
                  </li>
                  <li>
                    <BsPhone />
                    <span>01066333663 - 01066222622</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="custom-links">
                <h2>CUSTOMER SERVICE</h2>
                <ul className="list-unstyled">
                  <li>
                    <BiPhoneCall />
                    <div className="info">
                      <span>+2 010 678 10000</span>
                      <span>+2 010 903 55535</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="12">
              <div className="social-links">
                <h2>SOCIAL MEDIA</h2>
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        Copyright © 2022 وود شوب . جميع الحقوق محفوظة .
      </div>
    </footer>
  );
}

export default Footer;
