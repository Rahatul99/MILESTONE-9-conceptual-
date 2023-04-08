import { json } from "react-router-dom";

// add data local store
const addToDb = id =>{
    let shoppingCart = {};
    
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const getStoredCart = () =>{
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart
}

// remove a specific element from loacl storage 
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

//clear all data from local storage
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }