// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="grid-container">
      <Router>
        {/* <div className="hero-image"></div> */}
        <Header />

        <main>
          <div className="content">
            <div className="main">
              <Route path="/" component={Home} />
            </div>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
