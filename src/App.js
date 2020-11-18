import * as React from 'react';
import { HashRouter as Router , Switch ,  Route  } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './Component/style.scss'

// import Loadingpage from './Component/Loadingpage'
import HomePage from './Component/HomePage'


function App() {
  return (
    <>
      <HomePage />
      {/* <Router>
        <Switch>
          
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router> */}
      {/* <div>
        <h1>test</h1>
    </div> */}
    </>
  );
}

export default App;
