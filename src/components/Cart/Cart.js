import React from 'react';
import Button from '@restart/ui/esm/Button';
import './Cart.css'
import CartItem from '../CartItem/CartItem';
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)

    let total = 0;
    if (cart.length) {
        total = cart.reduce((prev, current) => prev + current.cost + current.ticket, 0);
    }

    cart.map(cartItem => cartItem)

    return (
        <>
            <div className="cart sticky-top bg-white p-2 mt-4">
                <h2 className="summery fw-bold fs-3">Placed Added: {cart.length}</h2>
                <div className="d-flex justify-content-between pb-1 px-2">
                    <h4 className="fs-3">Total Cost:</h4>
                    <h4 className="fw-bold fs-3"><span className="fw-bold">${total}</span></h4>
                </div>
                {
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.key}
                            cartItem={cartItem}
                        ></CartItem>)
                }
                <Button className="w-100 ba-color mb-2 p-2">Review Item</Button>
            </div>
        </>
    );
};

export default Cart;