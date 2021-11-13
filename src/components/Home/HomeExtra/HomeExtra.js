import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './HomeExtra.css'
const HomeExtra = () => {
  return (
    <div className="experience">
            <Container>

                <h1>Countless Experiences</h1>
                <Row>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <i class="fas fa-car"></i>
                            <h2>Experienced</h2>
                            <p>
                                Average people say this to console themselves
                                when they feel helpless to make a positive
                                change in the world.
                            </p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <i class="fab fa-servicestack"></i>
                            <h2>Services</h2>
                            <p>
                                Average people say this to give themselves
                                permission to meander all over the place rather
                               
                            </p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-wallet"></i>
                            <h2>Cheap</h2>
                            <p>
                                Average people say this because it makes them
                                feel better to pretend is directing events in
                                their lives.
                            </p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
  );
};

export default HomeExtra;
