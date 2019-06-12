import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
// import allLists from './components/AllLists'
import Nav from './components/Menu'
import Home from './containers/Home'
import QuotesContainer from './containers/QuotesContainer'
import FavoritesContainer from './containers/FavoritesContainer'

  const App = () => {
    return(
      <div>
        <div>
          <BrowserRouter>
            <React.Fragment>
             <Route>
                <Nav />
              </Route>
              <Route exact path="/" component={Home}/>
              <Route exact path="/all" component={QuotesContainer}/>
              <Route exact path="/favorites" component={FavoritesContainer}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

  };

export default App;
