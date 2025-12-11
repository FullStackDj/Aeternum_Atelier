import React from 'react';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NewArrivals from "../components/NewArrivals.jsx";
import PopularProducts from "../components/PopularProducts.jsx";
import Features from "../components/Features.jsx";

const Home = () => {
  return (
    <>
      <Hero/>
      <NewArrivals/>
      <PopularProducts/>
      <Features/>
      <Footer/>
    </>
  );
};

export default Home;