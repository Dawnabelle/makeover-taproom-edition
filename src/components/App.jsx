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
          body {
            background-color: teal;
          }
          .appStyle {
            text-align: center;
            margin: auto;
            color: white;
            background-image: url(${night});
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
            padding-top: 50px;
            width: 1024;
          }
          .appStyle p {
            font-size: 1.3em;
          }
        `}
      </style>

      <div className='appStyle'>
        <div>
          <h1>Dawn's Bar</h1>
          <p>Where you come when React drives you to drink!</p>
        </div>
        <DrinkPage/>
        <div>
          <Switch>
            <Route component={Error404}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
