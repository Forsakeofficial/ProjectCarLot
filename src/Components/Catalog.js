import React from "react";
import CarCard from "./CarCard";

const Catalog = ({ car }) => {
  return (
    <>
      <h3 className="mb-3">Katalog z samochodami</h3>
      <div className="catalog">
        {car.map((m, id) => (
          <CarCard key={id} car={m} />
        ))}
      </div>
    </>
  );
};


export default Catalog;

// title
// director
// description
// actors
// imageurl
