import React, { useEffect, useState } from 'react';
import MyCard from '../Card/MyCard';
import Cart from '../Cart/Cart';
import './Order.css'
const Order = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);
    //products to be rendered on UI
    useEffect(() => {
        fetch('./worldHeritage.JSON')
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
            })

    }, [])
    const handleBooking = (place) => {
        if (cart.includes(place)) {
            return;
        }
        const newCart = [...cart, place]
        setCart(newCart);

    }
    return (
        <>
            <div className="order">
                <div className="order-containder container d-flex">
                    <div className="product-container container row g-4">
                        {
                            places.map(place => <MyCard
                                key={place.key}
                                place={place}
                                handleBooking={handleBooking}
                            ></MyCard>)
                        }
                    </div>
                    <div className="cart-container col-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;