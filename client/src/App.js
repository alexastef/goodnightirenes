// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <main>
          {/* <div className="content">
            <div className="main"> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
            {/* </div>
          </div> */}
        </main>
        {/* <Footer /> */}
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
