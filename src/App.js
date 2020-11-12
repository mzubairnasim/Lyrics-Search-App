import React from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Lyrics from './componentsaction/Lyrics'
import Search from './componentsaction/Search'
import Tracks from './componentsaction/Tracks'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalC from './GlobalC'
import './App.css'

export default function App() {
  return (
    <div className='bg'>
     
      <GlobalC>
        <BrowserRouter>
                  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-center">
                    <div class="container">
                            <div class="navbar-header">
                              <Link class="navbar-brand" to='/' >
                              <h1 className='one font-weight-bold text-capitalize'>
                              Track And Lyrics Search APP</h1></Link> 
                            </div>
                    </div>
          </nav>
          <Search/>
          <Switch>
            <Route exact path='/' component={Tracks}></Route>
            <Route exact path='/lyrics/:id' component={Lyrics}></Route>
          </Switch>
        </BrowserRouter>
        </GlobalC>
    </div>
  )
}
