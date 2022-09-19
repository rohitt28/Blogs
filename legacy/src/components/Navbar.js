import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { HouseFill, CodeSlash, Grid1x2Fill } from "react-bootstrap-icons";
import { Link } from "gatsby";
import { TimelineLite, Power3 } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/navbar.sass";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let brandName = useRef(null);
  let pageLink1 = useRef(null);
  let pageLink2 = useRef(null);
  let pageLink3 = useRef(null);

  let tl = new TimelineLite();
  useEffect(() => {
    tl.from(brandName, 4, { x: -500, ease: Power3.easeOut }, 0)
      .from(pageLink1, 3, { x: 1000, ease: Power3.easeOut }, 0)
      .from(pageLink2, 3, { x: 1100, ease: Power3.easeOut }, 0)
      .from(pageLink3, 3, { x: 1200, ease: Power3.easeOut }, 0);
  });
  return (
    <Navbar light expand="md" className="background-blue sticky-top">
      <div className="container">
        <NavbarBrand href="/" style={{ fontWeight: "bold", color: "#eee" }}>
          <div ref={(el) => (brandName = el)}>
            <img src="/img/logowhite.png" alt="" style={{ width: "30px" }} />{" "}
            KJSCE CodeCell
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ background: "#666" }} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{
            justifyContent: "space-between",
          }}
        >
          <Nav className="ml-auto" navbar>
            <div ref={(el) => (pageLink1 = el)}>
              <NavItem className="mr-3">
                <Link to="/" className="links mr-2">
                  <HouseFill size={20} /> Home
                </Link>
              </NavItem>
            </div>
            <div ref={(el) => (pageLink2 = el)}>
              <NavItem className="mr-3">
                <Link to="/blog" className="links mr-2">
                  <Grid1x2Fill /> All Articles
                </Link>
              </NavItem>
            </div>
            <div ref={(el) => (pageLink3 = el)}>
              <NavItem>
                <Link to="/about" className="links">
                  <CodeSlash size={20} /> About
                </Link>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
