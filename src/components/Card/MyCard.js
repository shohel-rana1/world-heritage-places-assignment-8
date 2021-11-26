import React from 'react';
import './MyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Rating from 'react-rating';
const MyCard = (props) => {
    const { image, name, country, cost, rating, ticket, description } = props.place;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img rounded-circle image-desgin" variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="name">{name},{country}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Ticket Price: ${ticket}</ListGroupItem>
                    <ListGroupItem>Travel Cost: ${cost}</ListGroupItem>
                    <ListGroupItem>Ratings: <Rating
                        className="ratings"
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button
                        onClick={() => props.handleBooking(props.place)}
                        className="w-100 ba-color">{element}Book Now</Button>
                </Card.Body>
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-end">
                        <i className="fab fa-facebook-square icon"></i>
                        <i className="fab fa-twitter icon"></i>
                        <i className="fas fa-share-square icon"></i>
                        <i className="fab fa-google-plus-g icon"></i>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCard;