import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo1.png.webp";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import img1 from "../images/woodshop01.jpg";
import img2 from "../images/woodshop02.jpg.webp";
import img3 from "../images/woodshop03-300x169.jpg.webp";
import img4 from "../images/woodshop04.jpg.webp";

function About() {
  const [t, i18n] = useTranslation();
  const [aboutPageTitle, SetaboutPageTitle] = useState("");
  const [aboutPagedesc, SetaboutPagedesc] = useState([]);

  useEffect(
    () => {
      SetaboutPageTitle(t("aboutPageTitle"));
      SetaboutPagedesc(t("aboutPagedesc", { returnObjects: true }));
    },
    [i18n.language, t]
  );
  return (
    <div className="about-page page">
      <div className="landing">
        <Container>
          <h2>
            {aboutPageTitle}
          </h2>
        </Container>
      </div>
      <div className="intro">
        <Container>
          <Row>
            <Col lg={"4"} md={"12"}>
              <img src={logo} alt="" />
            </Col>
            {aboutPagedesc.map(data => {
              return (
                <Col key={Math.random()} lg="8" md={"12"}>
                  <div className="box">
                    <h2>
                      {data.h2}
                    </h2>
                    <p>
                      {data.parg1}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: data.parg2 }} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="imgaes">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="12" className="mb-3">
              <div className="box">
                <img src={img1} alt="" />
              </div>
            </Col>

            <Col lg="3" md="6" sm="12" className="mb-3">
              <div className="box">
                <img src={img2} alt="" />
              </div>
            </Col>

            <Col lg="3" md="6" sm="12">
              <div className="box">
                <img src={img3} alt="" />
              </div>
            </Col>

            <Col lg="3" md="6" sm="12">
              <div className="box">
                <img src={img4} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
