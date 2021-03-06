import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import history from './history';
import AllLists from './components/AllLists'
import Nav from './components/Menu'
import Home from './containers/Home'
import ListCreate from './components/ListCreate'
// import ListDelete from './components/ListDelete'
import QuotesContainer from './containers/QuotesContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import ListsContainer from './containers/ListsContainer'


  const App = () => {
    return(
      <div>
        <div>
          <Router history={history}>
     
             <Route>
                <Nav />
              </Route>
              <Switch>
              <Route exact path="/" component={Home}/>
               <Route path="/new" exact component={ListCreate} />
                <Route path="/lists" exact component={ListsContainer} />
              <Route exact path="/all" component={QuotesContainer}/>
              <Route exact path="/favorites" component={FavoritesContainer}/>
              </Switch>

          </Router>
        </div>
      </div>
    )

  };

export default App;
