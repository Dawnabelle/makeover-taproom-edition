import React from 'react';
import {Switch, Route} from 'react-router-dom';


import DrinkPage from './DrinkPage';
import Error404 from './Error404';


import night from '../assets/night.jpg';


function App() {
  return (
    <div>
      <style jsx>
        {`
          .appStyle {
            text-align: center;
            margin: auto;
            color: white;
            background-image: url(${night});
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
            width: 1024;
          }
        `}
      </style>

      <div className='appStyle'>
        <div>
          <h1>Dawn's Bar</h1>
          <h2>Where you come when React drives you to drink!</h2>
        </div>
        <DrinkPage/>
        <Switch>
          <Route component={Error404}/>
        </Switch>
      </div>
    </div>
  );
}
export default App;
