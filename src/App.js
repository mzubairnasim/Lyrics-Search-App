import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherMain from './weatherComp/WeatherMain';
import Days5 from './weatherComp/Days5';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="navbar-header">
      <Link class="navbar-brand" to='/'><h2>Weather App</h2></Link> 
    </div>
  </div>
</nav>
      <Switch>
        <Route exact path='/' component={WeatherMain}></Route>
        <Route  path='/days/:id' component={Days5}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}
