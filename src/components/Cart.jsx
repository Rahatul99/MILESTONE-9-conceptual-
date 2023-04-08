import React, { useContext } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../Utilites/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';

const Cart = () => {
    // const pData = useLoaderData();
    // const savedCart = getStoredCart();

    // let cart = [];
    // for(const id in savedCart){
    //     const foundProduct = pData.find(product => product.id === id);
    //     if(foundProduct){
    //         foundProduct.quantity = savedCart[id];
    //         cart.push(foundProduct); 
    //     }
    // }

    // const {cart} = useLoaderData();
    const [cart, setCart] = useContext(CartContext);


    let total = 0;
    if(cart.length > 0){
        for(const product of cart){
            total = total + product.price * product.quantity;
        }
    }

    //remove item from shoppingCrat
    const handleRemoveItem = (id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
    }
    const deleteCartHandler = () =>{
        deleteShoppingCart();
    }
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cart.length ? 'Review Cart Item' : 'Cart is empty'}</h2>

                <ul className='flex flex-col divide-y divide-gray-700'>
                    {cart.map(product => (
                        <CartItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        />
                    ))}
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                    {cart.length > 0 ? (
                        <>
                        <button
                            type='button'
                            onClick={deleteCartHandler}
                            className='btn-outlined'
                        >
                            Clear <span className='sr-only sm:not-sr-only'>Cart</span>
                        </button>
                        </>
                    ) : (
                        <>
                        <Link to='/shop'>
                            <button
                            type='button'
                            // onClick={deleteCartHandler}
                            className='btn-outlined'
                            >
                            Back <span className='sr-only sm:not-sr-only'>To Shop</span>
                            </button>
                        </Link>
                        </>
                    )}

                    <button type='button' className='btn-primary'>
                        Place Order
                    </button>
                    {/* <button onClick={orderHandler} type='button' className='btn-primary'>
                        Place Order
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Cart;