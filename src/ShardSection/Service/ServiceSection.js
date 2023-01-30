import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../Service/ServiceSection.css';
import ServiceData from '../../assets/data/serviceData'
import { motion } from 'framer-motion';
const ServiceSection = () => {
    return (
        <section className="service">
            <Container>
                <Row>
                    {
                        ServiceData.map((item, index) => (
                            <Col lg='3' md='4' key={index} >
                                <motion.div whileHover={{ scale: 1.1 }} className="service_item" style={{ background: `${item.bg}` }}>
                                    <span><i class={item.icon}></i></span>
                                    <div className='service_text'>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default ServiceSection;