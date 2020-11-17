import * as React from 'react';
import { BrowserRouter as Router , Switch ,  Route  } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './Component/style.scss'

// import Loadingpage from './Component/Loadingpage'
import HomePage from './Component/HomePage'


function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Loadingpage} /> */}
          <Route exact path="/resume_2020" component={HomePage} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
