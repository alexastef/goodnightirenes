import axios from 'axios';

export default {
  getAllBeers: () => axios.get("/api/beer"),
  createBeer: (newBeer) => axios.post("/api/beer", newBeer),
  updateBeer: (id) => axios.put(`/api/beer/${id}`),
  deleteBeer: (id) => axios.delete(`/api/beer/${id}`)
}