import React from "react";
import { HomeContainer, HomeImage, MainContainer } from "./Home.style";
import Header from "../../components/header/Header";
import homeImage from "../../assets/books.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImage>
        <img src={homeImage} alt="home image" />
      </HomeImage>
      <MainContainer>
        
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
