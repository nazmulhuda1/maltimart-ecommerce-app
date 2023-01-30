import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import Helmet from './Shard/Helmet';
import '../Style/Home.css'
import { Link } from 'react-router-dom';
import ServiceSection from '../ShardSection/Service/ServiceSection';
import ProductList from '../componanet/Ul/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png'
import Clook from '../componanet/Ul/Clook';

 

const Home = () => {
    const year = new Date().getFullYear()
    const [tendingProduct, setTendingProduct] = useState([]);
    const [bestSelesProduct, setBestSelesProduct] = useState([]);
    const [mobileProduct, setMobileProduct] = useState([]);
    const [wirelessProduct, setWirelessProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(() => {
        const filterTrendingProducts = products.filter(item => item.category === 'chair');

        const filterBestSelesProducts = products.filter(item => item.category === 'sofa');

        const filterMobileProducts = products.filter(item => item.category === 'mobile');

        const filterWirelessProducts = products.filter(item => item.category === 'wireless');

        const filterPopularProducts = products.filter(item => item.category === 'watch');


        setTendingProduct(filterTrendingProducts)
        setBestSelesProduct(filterBestSelesProducts)
        setMobileProduct(filterMobileProducts)
        setWirelessProduct(filterWirelessProducts)
        setPopularProduct(filterPopularProducts)
    }, [])
    return (
        <Helmet title={"Home"}>
            {/* hero section */}
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <p className="hero_subtit">
                                    Trending Product in {year}
                                </p>
                                <h2>Make Your Interior Minimalistic & Modern </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestiae! Laboriosam fugiat ipsam vero cum? Provident tempora ipsa ex vel!</p>

                                <motion.button whileTap={{ scale: 1.4 }} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* service section */}
            <ServiceSection />
            {/* trending section */}
            <section className="trending_product">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section_title">Trending Product</h2>
                        </Col>
                        <ProductList productData={tendingProduct}></ProductList>
                    </Row>
                </Container>
            </section>
            {/* best seles section */}
            <section className="best_seles">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section_title">Best Seles Product</h2>
                        </Col>
                        <ProductList productData={bestSelesProduct}></ProductList>
                    </Row>
                </Container>
            </section>
            {/* time counter section */}
            <section className="time_counter">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clook_top_content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
                            </div>
                            <Clook></Clook>
                            <div className="buy_btn store_btn"> <Link to='/shop'>Visit Store</Link> </div>
                        </Col>
                        <Col lg='6' md='6' className="timerCount_img text-end">
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* New Arrivals section */}
            <section className="best_seles">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section_title">New Arrivals</h2>
                        </Col>
                        <ProductList productData={mobileProduct}></ProductList>
                        <ProductList productData={wirelessProduct}></ProductList>
                    </Row>
                </Container>
            </section>
            {/* popular category */}
            <section className="popular_categor">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section_title pb-5">Popular in Category</h2>
                        </Col>
                        <ProductList productData={popularProduct}></ProductList>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default Home;