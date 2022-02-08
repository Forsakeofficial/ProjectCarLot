import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Card className="car-card">
      <Card.Img variant="top" src={car.img} className="car-img" />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold", fontSize: 22}}>
          {car.brand}
        </Card.Title>
        <Card.Title style={{ fontSize: 20, marginTop: -7 }}>
          {car.model}
        </Card.Title>
        <Card.Title style={{ fontSize: 16, marginTop: -7 }}>
          Cena: {car.price} PLN
        </Card.Title>
        <Link to={`/cars/${car.id}`}>
          <Button variant="primary" className="mt-3">
            Sprawdź samochód
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
