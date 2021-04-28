// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <Route path="/" component={Home} />


      </Router>
    </div>
  );
}

export default App;
