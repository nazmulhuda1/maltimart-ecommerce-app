import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommonSection from '../componanet/Ul/CommonSection';
import Helmet from './Shard/Helmet';
import products from '../assets/data/products';
import ProductList from '../componanet/Ul/ProductList';
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import '../Style/ProductDetails.css';
 
 
const ProductDetails = () => {

    const [tab, setTab] = useState('desc')

    const { id } = useParams();
    const product = products.find(item => item.id === id);
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;
    const relatedProducts = products.filter(item => item.category === category)

    return (
        <Helmet title={productName}>
            <CommonSection title={productName}></CommonSection>

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="single_product_img">
                                <img src={imgUrl} alt="" />
                            </div>
                        </Col>
                        <Col lg='6' className='product_item_info' >
                            <div className="products_details_info">
                                <h3 className='pronduct_name'>{productName}</h3>
                                <div className="product_rating_area d-flex aling-items-center ">
                                    <span><i className="ri-star-s-fill"></i></span>
                                    <span><i className="ri-star-s-fill"></i></span>
                                    <span><i className="ri-star-s-fill"></i></span>
                                    <span><i className="ri-star-half-s-line"></i></span>
                                    <p className='product_rating'><span>{avgRating}</span> Rating</p>
                                </div>
                                <h5>$ {price}</h5>
                                <p className='shortdesc'>{shortDesc}</p>
                                <motion.div whileTap={{ scale: 1.3 }} className="buy_btn d-inline-block">Add to Cart</motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* description */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab_wrapper d-flex aling-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'actiove_tab' : ""}`}
                                    onClick={() => setTab('desc')}>Description</h6>

                                <h6 className={`${tab === 'rev' ? 'actiove_tab' : ""}`}
                                    onClick={() => setTab('rev')}>Reviews ({reviews.length}) </h6>
                            </div>
                            {
                                tab === 'desc' ?
                                    <>
                                        <div className="tab_content mt-5">
                                            <p>{description}</p>
                                        </div>
                                    </> :
                                    <>
                                        <div className="product_reviews mt-5">
                                            <div className="review_wrapper">
                                                <ul>
                                                    {
                                                        reviews.map((item, index) => (
                                                            <li key={index} className=' review-text mb-4'>
                                                                <span className='mb-2'>{item.rating} (Rating)</span>
                                                                <p>{item.text}</p>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="review_form">
                                                <h5>Leave Your Experience</h5>
                                                <form action="">
                                                    <div className="form_grou">
                                                        <input type="text" placeholder='Enter Name' />
                                                    </div>
                                                    <div className="form_grou">
                                                        <span><i className="ri-star-s-fill"></i></span>
                                                        <span><i className="ri-star-s-fill"></i></span>
                                                        <span><i className="ri-star-s-fill"></i></span>
                                                        <span><i className="ri-star-s-fill"></i></span>
                                                        <span><i className="ri-star-s-fill"></i></span>
                                                    </div>
                                                    <div className="form_grou">
                                                        <textarea name="" id="" rows="5" placeholder='message'></textarea>
                                                    </div>
                                                    <button type="submit" className='buy_btn mt-0'>Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                            }

                        </Col>
                        <Col lg='12' className='mt-5'>
                            <div className="related_product_item">
                                <h4>Related Product</h4>
                            </div>
                        </Col>
                        <ProductList productData={relatedProducts}></ProductList>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default ProductDetails;