import axios from 'axios';

export default {
  getAllBeers: () => axios.get("/api/beers"),
  createBeer: (newBeer) => axios.post("/api/beers", newBeer),
  updateBeer: (id) => axios.put(`/api/beers/${id}`),
  deleteBeer: (id) => axios.delete(`/api/beers/${id}`)
}