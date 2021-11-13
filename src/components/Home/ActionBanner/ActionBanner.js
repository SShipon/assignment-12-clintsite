import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ActionBanner.css"
const ActionBanner = () => {
    return (
        <div className="car-banner">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                        <h4>Cars Direct from Dealership. Lease BMW X1</h4>
                        <p>
                         BMW only rent out the most exclusive yachts, which you can find all over dubai. Book Now. Best Luxury Yacht Rental Services In The UAE. You can choose from 21+ different yachts. The Best Family Yachts. Free Jetski. an unforgettable Cheapest Yachts in Dubai. Easy and Cheap Rentals.
                        </p>
                        <p>
                {" "}
               <Link to="/explore"><button className="button-style">Click Me...</button></Link>
              </p>
                      
                    </Col>
                    <Col md={6} xs={12}>
                        <img
                            className="img-fluid"
                            src="https://image.freepik.com/free-photo/red-sedan-car-test-drive-highway_114579-4061.jpg"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ActionBanner;