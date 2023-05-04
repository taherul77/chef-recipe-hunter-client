/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetailsContent from './ChefDetailsContent';

const ChefDetail = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
          <ChefDetailsContent chef={chef}></ChefDetailsContent>
        </div>
    );
};

export default ChefDetail;