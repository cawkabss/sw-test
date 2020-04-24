import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './App.css';
import { normalImage, brokenImage } from './images';


const Cors = () => {
  useEffect(() => {
    serviceWorker.register({ scope: '/cors' });

    return () => serviceWorker.unregister();
  }, []);

  return (
    <>
      <img
        src={brokenImage}
        alt='broken img'
      />
      <img
        src={normalImage}
        alt='normal img'
      />
    </>
  );
};


const NoCors = () => {
  useEffect(() => {
    serviceWorker.register({ scope: '/no-cors' });

    return () => serviceWorker.unregister();
  }, []);

  return (
    <>
      <img
        src={brokenImage}
        alt='broken img'
      />
      <img
        src={normalImage}
        alt='normal img'
      />
    </>
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cors">
            <Cors />
          </Route>
          <Route path="/no-cors">
            <NoCors />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
