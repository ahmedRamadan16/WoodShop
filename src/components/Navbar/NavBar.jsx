import logo from "../../images/logo-minimal.png.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
function NavBar() {
  const [t, i18n] = useTranslation();
  const [mainLinks, setmainLinks] = useState([]);
  const [newArrivalsLinks, setnewArrivalsLinks] = useState([]);
  const [productsLink, setProductsLink] = useState([]);
  const [imagesLinks, SetImagesLinks] = useState([]);
  const [mediaLinks, SetmediaLinks] = useState([]);

  const [lumberLinks, SetLumberLinks] = useState([]);
  const [panelsLinsk, SetpanelsLinsk] = useState([]);
  const [fireratedparticleboardsLinks, SetfireratedparticleboardsLinks] = useState([]);

  const [showtoogleNav,SetshowtoogleNav]=useState(false);
  useEffect(
    () => {
      setmainLinks(t("mainlinks", { returnObjects: true }));
      setnewArrivalsLinks(t("newArrivalsLinks", { returnObjects: true }));
      setProductsLink(t("ProductLinks", { returnObjects: true }));
      SetImagesLinks(t("ImagesLinks", { returnObjects: true }));
      SetmediaLinks(t("mediaLinks", { returnObjects: true }));
      SetLumberLinks(t("LumberLinks", { returnObjects: true }));
      SetpanelsLinsk(t("panelsLinsk", { returnObjects: true }));
      SetfireratedparticleboardsLinks(t("fireratedparticleboardsLinks", { returnObjects: true }));

    },
    [i18n.language]
  );

    const handleClick=(e)=>{
     
      SetshowtoogleNav((prev)=> !prev);
    }
    const changeWebsiteLanguage=(e,lang)=>{
      i18n.changeLanguage(lang);
        let html=document.documentElement;
          html.lang=lang;
          let style;
          if(lang ==='ar')
          {
            html.dir='rtl'
            style=document.createElement('style');
            style.classList.add('rtl-style');
           style.textContent=`
           .top-navbar .container .emails svg,.top-navbar .container .phone svg{
            margin-right:0;
            margin-left:5px;
           }
           .navbar-nav > a .sub-menu a .sub-sub-menu {
           
            left:auto;
            right:100%;
          }
          .home-page .home-bg-img-section .right
          {
            left:0;
            right:auto;
          }
          .about-page .intro h2{
            left:auto;
            right:185px
          }
           `
            document.head.appendChild(style); 
          }else{
            html.dir='ltr';
            document.querySelector('.rtl-style').remove();
          }
        


    }
    
    const handleClickClass=(e)=>{
      if(e.target.firstElementChild.classList.contains('open'))
      {
        e.target.firstElementChild.classList.remove('open')
      }else{
        e.target.firstElementChild.classList.add('open')
      }
    }
  const getAllLinks = () => {
    return mainLinks.map(links => {
      return (
        <Link onClick={(e)=> handleClickClass(e)} key={Math.random()} to={links.path}>
          {links.link}
          {links.haveSubMenu === true
            ? <div className="sub-menu">
                {links.submenu === "newArrivalsLinks"
                  ? <>
                      {newArrivalsLinks.map(newArraive => {
                        return (
                          <Link   key={Math.random()} to={newArraive.path}>
                            {newArraive.link}

                          </Link>
                        );
                      })}
                    </>
                  : links.submenu === "ProductLinks"
                    ? <>
                        {productsLink.map(product => {

                          return (
                            <Link key={Math.random()}  >
                              {product.link}
                              {
                                product.haveSubMenu === true ?
                                  <div className="sub-sub-menu">
                                    {
                                      product.submenu === 'LumberLinks'? 
                                      <>
                                        {lumberLinks.map((lum)=>{
                                          return(
                                            <Link key={Math.random()} onClick={(e)=> handleClickClass(e)}  to="/">{lum}</Link>
                                          )
                                        })}
                                      </>
                                      : product.submenu === 'panelsLinsk' ? 
                                      <>
                                        {panelsLinsk.map((panel)=>{
                                          return(
                                            <Link key={Math.random()} onClick={(e)=> handleClickClass(e)}  to="/">{panel}</Link>

                                          )
                                        })}
                                      </>
                                      : product.submenu === 'fireratedparticleboardsLinks'?
                                       <>
                                       {fireratedparticleboardsLinks.map((fire)=>{
                                          return(
                                            <Link key={Math.random()} onClick={(e)=> handleClickClass(e)}  to="/">{fire}</Link>

                                          )
                                        })}
                                       </> 
                                       : ''
                                    }
                                  </div>
                                  : ''
                                }
                            </Link>
                          );
                        })}
                      </>
                    : links.submenu === "ImagesLinks"
                      ? <>
                          {imagesLinks.map(images => {

                            return (
                              <Link key={Math.random()} to="/">
                                {images}
                              </Link>
                            );
                          })}
                        </>
                      : links.submenu === "mediaLinks"
                        ? <>
                            {mediaLinks.map(media => {
                              return (
                                <Link key={Math.random()} to="/">
                                  {media}
                                </Link>
                              );
                            })}
                          </>
                        : ""}
              </div>
            : ""}
        </Link>
      );
    });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <button className="nav-bar-toogler" onClick={(e)=> handleClick(e)} >
        <FaBars />
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className={showtoogleNav ? 'show-nav' : 'hide-nav'} >
          <Nav className="ms-auto">
            {getAllLinks()}
            {i18n.language === "en" &&
              <button onClick={(e) => changeWebsiteLanguage(e,'ar')} className="btn">
                العربيه
              </button>}
            {i18n.language === "ar" &&
              <button onClick={(e) => changeWebsiteLanguage(e,'en')} className="btn">
                English
              </button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
