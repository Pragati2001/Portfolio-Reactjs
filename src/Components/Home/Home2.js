import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a final year B.Tech Student with specialization in Computer
              Science .
              <br />
              I am mostly interested in frontend and backend development . I
              have
              <br />
              decent knowledge of data structure and algorithm and keep on
              sharpening my Skills
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                height={200}
                width={200}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:mailto:kabrapragati345@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  kabrapragati345@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <p className="con-det">Jaipur,Rajasthan</p>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pragati2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pragati-kabra-83b966192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kabrapragati345@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 35 }}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
