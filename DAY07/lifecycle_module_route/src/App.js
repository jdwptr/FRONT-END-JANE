import React from 'react'

// import navigation bar from components navbar
import Navigation from './components/navbar.js'

// import switch
import {Switch, Route} from 'react-router-dom';

// import content
import Content1 from './page/content1'
import Content2 from './page/content2'


class App extends React.Component {
//   constructor () {

//   }
  render () {
    return (
    <div>
      <Navigation/>
      <Switch>
        <Route path="/content1" component={Content1}/>
        <Route path="/content2" component={Content2}/>
      </Switch>
    </div>
    )
  }
}

export default App;
