import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { Table } from 'reactstrap';
import TableHead from '../../components/TableHead';
import './style.css';

const Beer = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    API.getAllBeers()
      .then((beers) => setBeers(beers.data));
  }, []);

  const upNext = beers.filter(beers => beers.up_next === true);
  const current = beers.filter(beers => beers.up_next === false);

  // create table that mirrors table in mysql, then each beer will be a row
  return (
    <div className="table-container">
      <h2>Tapped Now</h2>
      <Table className="beer-table">
        <TableHead />
        <tbody>
          {current.map(beer => (
            <tr className="beer-table--row">
              <th scope="row">{beer.name}</th>
              <td>{beer.location}</td>
              <td>{beer.abv}%</td>
              <td>{beer.style}</td>
              <td>{beer.glass}</td>
              <td>${beer.price}</td>
            </tr>
          )
          )}
        </tbody>
      </Table>
      <h2>Up Next</h2>
      <Table className="beer-table up-next">
        <TableHead />
        <tbody>
          {upNext.map(beer => (
            <tr className="beer-table--row">
              <th scope="row">{beer.name}</th>
              <td>{beer.location}</td>
              <td>{beer.abv}%</td>
              <td>{beer.style}</td>
              <td>{beer.glass}</td>
              <td>${beer.price}</td>
            </tr>
          )
          )}
        </tbody>
      </Table>
      <p>We try to keep this list updated, but what's actually tapped might be slightly different</p>
    </div>
  )
}

export default Beer;
