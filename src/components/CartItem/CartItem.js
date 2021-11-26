import React from 'react';
import './CartItem.css'
const CartItem = (props) => {
    const { image, name, country } = props.cartItem;
    return (
        <div className="d-flex pt-3 justify-content-between">
            <div className="w-25 pe-3">
                <img className="img-fluid rounded-circle  img-circle" src={image} alt="" />
            </div>
            <div>
                <p className="my-auto text-success">{name}</p>
                <p className="text-muted text-center"><small>{country}</small></p>
            </div>

        </div>
    );
};

export default CartItem;