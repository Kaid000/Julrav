import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              На самом деле много чего хочется <span className="purple"> пожелать.... </span>
            </h1>
            
          </Col>
          <p className="home-about-body">
              Желаю
              <br />
              <br />Достижения всех целей и заветных желаний,
              <i>
                <b className="purple"> успеха во всех начинаниях </b>
              </i>
              <br />
              <br />
              Стать лучшим программистом, &nbsp;
              <i>
                <b className="purple">10 по агиле и электричеству{" "},</b>
                 
                <b className="purple">
                  cообственную звезду на небе
                </b>
              </i>
              <br />
              <br />
             <b className="purple">Быть лучшей</b> во всем {" "}
                  и {" "}
              <i>
                <b className="purple">
                  не быть криворукой как я
                </b>
              </i>
            </p>

          
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
