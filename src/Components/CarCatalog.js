import React from "react";
import CarCard from "./CarCard";

const CarCatalog = ({ car }) => {
  return (
    <>
      <h3 className="mb-3">Katalog z samochodami</h3>
      <div className="catalog">
        {car.map((car, id) => (
          <CarCard key={id} car={car} />
        ))}
      </div>
    </>
  );
};


export default CarCatalog;

// title
// director
// description
// actors
// imageurl
