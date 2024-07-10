import React from "react";
import './Home.css';
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import CategoryCards from "../CategoryCards/CategoryCards";
import ProductsRow from "../ProductsRow/ProductsRow";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import FollowInstagram from "../FollowInstagram/FollowInstagram";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
      <Menu />
      <Slider />
      <CategoryCards />
      <ProductsRow />
      <PhotoGallery />
      <FollowInstagram />
      <Footer />
    </>
  );
}

export default Home;
