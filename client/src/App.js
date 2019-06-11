import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Menu from './components/Menu'
import Home from './containers/Home'
import QuotesContainer from './containers/QuotesContainer'


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
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

  };

export default App;
