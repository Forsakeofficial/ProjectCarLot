import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import axios from "axios";
import { carAddress } from "../api";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const CarPage = () => {
  const { carId } = useParams();
  const [car, setCar] = useState();

  useEffect(() => {
    const url = `${carAddress}${carId}`;
    axios
      .get(url)
      .then((res) => {
        setCar(res.data.find(item => `${item.id}` === carId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [carId]);

  return (
    <>
    <Header title="KOMIS SAMOCHODOWY" />
    <Container>
      {car ? (
        <>
        <div className="mt-3">
          <h2 style={{ fontWeight: "bold" }}>{car.brand}</h2>
          <h4 style={{ marginTop: -5}}>{car.model}</h4>
          <img
              src={car.img}
              alt="Zdjęcie samochodu"
            />
                   <hr />
          <h4 className="mt-3">Szczegóły </h4>
          <div className="column-car-info">            
          <div>
          <h5>Rok: <span className="spanClass">{car.year}</span></h5>
          <h5>Moc: <span className="spanClass">{car.power} KM</span></h5>
          <h5>Pojemność skokowa: <span className="spanClass">{car.engine} cm3</span></h5>
          </div>

          <div>
          <h5>Paliwo: <span className="spanClass">{car.fuel}</span></h5>
          <h5>Kolor: <span className="spanClass">{car.color}</span></h5>
          <h5>Skrzynia biegów: <span className="spanClass">{car.gearbox}</span></h5>
          </div>
          <div>
          <h5>Przebieg: <span className="spanClass">{car.mileage} km</span></h5>
          <h5>Napęd: <span className="spanClass">{car.drive}</span></h5>
          <h5>VIN: <span className="spanClass">{car.vin}</span></h5>
          </div>
          </div>
          <hr />
          <h4 className="mt-3">Cena: <span className="spanClass">{car.price} PLN</span></h4>
          <hr />
          <h4 className="mt-3">Opis</h4>
          <p style={{ textAlign: "justify" }}>{car.description}</p>
          <hr />
        </div>
        <Link to="/">Powrót do katalogu samochodów</Link>
        </>
      ) : (
        <Loader />
      )}
    </Container >
    <Footer />
    </>
  );
};

export default CarPage;

