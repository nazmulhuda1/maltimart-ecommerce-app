import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../componanet/Ul/CommonSection';
import Helmet from '../pages/Shard/Helmet';
import '../Style/shop.css';
import products from '../assets/data/products';
import ProductList from '../componanet/Ul/ProductList';

 
const Shop = () => {
    const [productData, setProductData] = useState(products);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === 'sofa') {
            const filteredProducts = products.filter(item => item.category === 'sofa');
            setProductData(filteredProducts)
        }
        if (filterValue === 'mobile') {
            const filteredProducts = products.filter(item => item.category === 'mobile');
            setProductData(filteredProducts)
        }
        if (filterValue === 'chair') {
            const filteredProducts = products.filter(item => item.category === 'chair');
            setProductData(filteredProducts)
        }
        if (filterValue === 'watch') {
            const filteredProducts = products.filter(item => item.category === 'watch');
            setProductData(filteredProducts)
        }
        if (filterValue === 'wireless') {
            const filteredProducts = products.filter(item => item.category === 'wireless');
            setProductData(filteredProducts)
        }
        if (filterValue === 'all') {
            const filteredProducts = products.filter(item => item.id);
            setProductData(filteredProducts)
        }

    }

    const handleSearch = (e) => {
        const searchItem = e.target.value;
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchItem.toLowerCase()));
        setProductData(searchedProducts);
    }


    return (
        <Helmet title='Shop'>
            <CommonSection title='Products' />
            <section className="shop_sect">
                <Container>
                    <Row>
                        <Col lg='3' md='3'>
                            <div className="filter_wiged">
                                <select onChange={handleFilter}>
                                    <option value="all">Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='3'>
                            <div className="filter_wiged">
                                <select>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="search-box">
                                <input type="text" placeholder='search...' onChange={handleSearch} />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="shop_products pt-0">
                <Container>
                    <Row>
                        {
                            productData.length === 0 ? <>
                                <h1>No Products Are Founds !</h1>
                            </>
                                :
                                <>
                                    <ProductList productData={productData}></ProductList>
                                </>
                        }
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default Shop;