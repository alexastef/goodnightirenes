import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Beer from './pages/Beer';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/beer" component={Beer} />
          <Route exact path="/admin" component={Admin} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
