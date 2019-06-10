import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './containers/Home'


  const App = () => {
    return(
      <div>
        <div>
          <BrowserRouter>
            <React.Fragment>
              {/*<Route>
                <Menu />
              </Route>*/}
              <Route exact path="/" component={Home}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

  };

export default App;
