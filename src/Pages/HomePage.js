import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import Catalog from "../Components/Catalog";
import Footer from "../Components/Footer";
import { allCars, searchAddress } from "../api";
import axios from "axios";
import Loader from "../Components/Loader";

const myTitle = "komis samochodowy";


const HomePage = () => {
  const [searchWord, setSearchWord] = useState();
  const [car, setCars] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    const url = searchWord ? `${searchAddress}${searchWord}` : allCars;
    axios
      .get(url)
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }, [searchWord]);

  const saveUserWord = (data) => {
    setSearchWord(data);
  };

  return (
    <>
        <Header title={myTitle} />
        <Container>
        <SearchBar getUserWordFunc={saveUserWord} />
        {isLoading ? (
          <Loader />
        ) : (
          <>{car ? <Catalog car={car} /> : <Loader />}</>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
