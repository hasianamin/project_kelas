import React from 'react';
import './App.css';
import Home from './pages/Home'
import ManageAdmin from './pages/Admin'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/ManageAdmin' component={ManageAdmin}/>
      </Switch>
    </div>
  );
}

export default App;
