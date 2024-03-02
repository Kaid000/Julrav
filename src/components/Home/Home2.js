import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Еще <span className="purple"> Думаю( </span>
            </h1>
            
          </Col>
      

          
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
