import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AdminPage from './AdminPage';
import DrinkPage from './DrinkPage';
import Error404 from './Error404';
import Home from './Home';


function App() {
  return (
    <div>
      // <style jsx="jsx">
      //   {
      //     ` .appStyle {
      //       margin: 0;
      //       padding: 0;
      //       width: 1024;
      //       text-align: center;
      //       }
      //     `
      //   }
      // </style>
      <div className='appStyle'>
        <Switch>
          // <Route exact='exact' path='/' component={Home}/>
          // <Route path='/drinks' component={DrinkPage}/>
          // <Route component={Error404}/>
          // <Route path='/admin' component={AdminPage}/>
          // <Route path='/add' render={() => <NewDrinkControl onNewDrinkCreation={this.handleNewDrinkFormSubmit} />}>
        </Switch>
      </div>
    </div>
  );
}

export default App;
