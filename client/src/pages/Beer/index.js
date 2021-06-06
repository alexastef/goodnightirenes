import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

const Beer = () => {

  useEffect(() => {
    API.getAllBeers()
      .then((beers) => console.log(beers));
  }, []);

  return (
    <div>Beer</div>
  )
}

export default Beer;
