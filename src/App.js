import React from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Lyrics from './componentsaction/Lyrics'
import Search from './componentsaction/Search'
import Tracks from './componentsaction/Tracks'

import GlobalC from './GlobalC'


export default function App() {
  return (
    <div>
     
      <GlobalC>
      <Search/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Tracks}></Route>
            <Route exact path='/lyrics/:id' component={Lyrics}></Route>
          </Switch>
        </BrowserRouter>
        </GlobalC>
    </div>
  )
}
