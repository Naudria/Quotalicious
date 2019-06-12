import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
// import allLists from './components/AllLists'
import Menu from './components/Menu'
import QuoteDetail from './components/QuoteDetail'
import Home from './containers/Home'
import QuotesContainer from './containers/QuotesContainer'
import FavoritesContainer from './containers/FavoritesContainer'

import history from './history';

  const App = () => {
    return(
      <div>
        <div>
          <BrowserRouter>
            <React.Fragment>
             <Route>
                <Menu />
              </Route>
              <Route exact path="/" component={Home}/>
              <Route exact path="/all" component={QuotesContainer}/>
              {/*<Route exact path="/quote/show" component={QuoteDetail}/>*/}
              <Route exact path="/favorites" component={FavoritesContainer}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

  };

export default App;
