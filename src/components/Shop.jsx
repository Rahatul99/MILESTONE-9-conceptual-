import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utilites/fakeDB';
import { ProductContext } from '../App';

const Shop = () => {
    const products = useContext(ProductContext)
    // const productData = useLoaderData();

    const handleAddToCart = id =>{
        addToDb(id);
    }
    return (
        <div className='product-container'>
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart}/>
                ))
            }
        </div>
    );
};

export default Shop;