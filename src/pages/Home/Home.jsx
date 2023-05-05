/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import Banner from "../../components/Banner/Banner";
import RecipeGallery from "../../components/RecipeGallery/RecipeGallery";
import Team from "../../components/Team/Team";
import FAQ from "../../components/FAQ/FAQ";
import Content from "./Content";

const Home = () => {
  const [chef, setChef] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://perfect-food-server.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setChef(data);
      });
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
        {loading ? (
          <div className=" flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {chef.map((chef) => (
              <Content key={chef.id} chef={chef}></Content>
            ))}
          </div>
        )}
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
