/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Content from "./Content";

const Home = () => {

    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/chef")
          .then((res) => res.json())
          .then((data) => setChef(data));
      }, []);
  return (
    <div>
         {chef.map((chef) => (
          <Content key={chef.id} chef={chef}></Content>
        ))}
     
    </div>
  );
};

export default Home;
