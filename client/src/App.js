// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Beer from './pages/Beer';
import Contact from './pages/Contact';
// import Menu from './pages/Menu/index.js';
// import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/beer" component={Beer} />
        </main>
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
