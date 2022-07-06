import React from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Schedule from './components/schedule/schedule';
import Transcript from "./components/transcript/transcript";
import TuitionFee from "./components/tuition_fee/tuitionFee";
import Navigation from "./components/navbar/nav";
import "./components/basic/grid.css";
import Footer from "./components/footer/footer";

function App() {
  return (
    
    <div className="App">
      <Router>
        {/* Header */}
        <Navigation />

        <div className="grid">
          {/* Contents */}
          <div>
            <Routes>
              <Route path='/' exact element={<Schedule/>} />
              <Route path='/transcript' exact element={<Transcript/>} />
              <Route path='/tuitionFee' exact element={<TuitionFee/>} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </Router>

    </div>
  );
}

export default App;
