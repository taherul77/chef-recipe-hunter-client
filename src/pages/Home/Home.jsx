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

      <div className="container px-6 py-10 mx-auto">
      <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
            OUR CHEFS
          </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {chef.map((chef) => (
            <Content key={chef.id} chef={chef}></Content>
          ))}
        </div>
      </div>

      <div>
      <h2 className="text-2xl font-semibold text-center 0 capitalize lg:text-3xl ">
            OUR RECIPE
          </h2>
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
