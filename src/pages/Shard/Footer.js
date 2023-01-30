import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>MultiMart</h1>
                            </div>
                        </div>
                        <p className='footer_text mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsa! Velit minus officiis nemo fugiat facilis, accusantium sequi dolor. Consequatur!</p>
                    </Col>
                    <Col lg='3'>
                        <div className="footer_quick_link">
                            <h4 className="quick_link_title text-white">Top Categories</h4>
                            <ListGroup className='mt-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phone</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="footer_quick_link">
                            <h4 className="quick_link_title text-white">UseFull Link</h4>
                            <ListGroup className='mt-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>

                    </Col>
                    <Col lg='3'>
                        <div className="footer_quick_link footer_contact">
                            <h4 className="quick_link_title text-white">Contact</h4>
                            <ListGroup className='mt-3'>
                                <ListGroupItem className='ps-0 border-0 d-flex'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>7100 Amjhupi, Meherpur, Bangladesh</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+08801234567890</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>Example123@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12' className='py-5 text-center'>
                        <p>CopyRight {year} Development By Nazmul Huda.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;