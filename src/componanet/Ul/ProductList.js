import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productData }) => {
    return (
        <>
            {
                productData?.map((item, index) => (<ProductCard item={item} key={index} />))
            }
        </>
    );
};
 
export default ProductList;