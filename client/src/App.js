// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <main>
          <div className="content">
            <div className="main">
              <Route path="/" component={Home} />
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
