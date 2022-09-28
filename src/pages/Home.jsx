import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import logo from "../images/logo1.png.webp";
import Slider from '../components/Slider/Slider';
import landingVideo from '../images/(72) inshas store - YouTube.mkv';

import img1 from '../images/h1-500x335.jpg';
import img2 from '../images/h2-500x335.jpg';
import img3 from '../images/fireban-1.jpg.webp';
import img4 from '../images/h4-500x335.jpg';
import img5 from '../images/h5-500x335.jpg';
import{FiPlay} from 'react-icons/fi'
const arr=[img1,img2,img3,img4,img5];
function Home() {
  const [t, i18n] = useTranslation();
  const [homeTitle, setHomeTitile] = useState("");
  const [homeBlocks, setHomeBlocks] = useState([]);
  const [homeAboutsection, SethomeAboutsection] = useState([]);
  const[imgSection,SetimgSection]=useState('');
  const[homecontactSection,SethomecontactSection]=useState([]);
  const [producSectionTitle,SetproducSectionTitle]=useState('');
  const[producSectionImgInfo,SetproducSectionImgInfo]=useState([]);

  useEffect(
    () => {
      setHomeTitile(t("homeTitle"));
      setHomeBlocks(t("homeBlocks", { returnObjects: true }));
      SethomeAboutsection(t("homeAboutsection", { returnObjects: true }));
      SetimgSection(t('imgSection'));
      SethomecontactSection(t('homecontactSection',{returnObjects:true}))
      SetproducSectionTitle(t('producSectionTitle'));
      SetproducSectionImgInfo(t('producSectionImgInfo',{returnObjects:true}))
    },
    [i18n.language]
  );
  return (
    <div className="home-page page">
      <div className="landing-section">
        <div className="video-wrapper">
          <div className="overlay" />
            <video autoPlay muted loop src={landingVideo}></video>
        </div>
        <Container>
          <h2
            className="home-title"
            dangerouslySetInnerHTML={{ __html: homeTitle }}
          />
          <Row>
            {homeBlocks.map(({ h2 },index) => {
              return (
                <Col lg={"2"} md={"6"} sm={"12"}>
                  <div key={Math.random()} className="box">
                    <img src={`${arr[index]}`} alt="" />
                    <h4>
                      {h2}
                    </h4>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="home-intro">
        <Container>
          <Row>
            <Col lg={"4"} md={"12"}>
              <div className="imgage">
                <img src={logo} alt="" />
              </div>
            </Col>
            <Col lg={"8"} md={"12"}>
              <div className="info">
              
                {homeAboutsection.map((data)=>{
                  return (
                   <>
                    <h4>
                  {data.title}
                </h4>
                <p className="lead">
                  {data.desc}
                </p>
                <button className="btn btn-success">
                  {data.button}
                </button>
                </>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-bg-img-section">
        <div className="right">
              <div className="text-center">
              <h2  dangerouslySetInnerHTML={{ __html: imgSection }}></h2>
          <FiPlay />
              </div>
        </div>
      </div>
      <div className="home-contact-section">
        <Container>
          <Row>
              {homecontactSection.map((cont)=>{
                return (
                  <>
                  <Col lg={'8'} md={'12'}>
                    <h2>{cont.h2}</h2>
                  </Col>
                  <Col lg={'4'} md={'12'}>
                    <button className="btn btn-success">{cont.button}</button>
                  </Col>
                  </>
                )
              })}
          </Row>
        </Container>
      </div>
      <div className="slider-section">
        <h2>{producSectionTitle}</h2>
        <div className="slider-container">
          <Container>
          <Slider productData={producSectionImgInfo} />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
