/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Content from "./Content";
import Banner from "../../components/Banner/Banner";
import RecipeGallery from "../../components/RecipeGallery/RecipeGallery";
import Team from "../../components/Team/Team";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {

    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/chef")
          .then((res) => res.json())
          .then((data) => setChef(data));
      }, []);
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
         {chef.map((chef) => (
          <Content key={chef.id} chef={chef}></Content>
        ))}
        <div>
          <RecipeGallery></RecipeGallery>
        </div>
        <div>
          <Team></Team>
        </div>
        <div>
          <FAQ></FAQ>
        </div>
     
    </div>
  );
};

export default Home;
