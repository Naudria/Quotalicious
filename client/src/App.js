import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Menu from './components/Menu'
import AllQuotes from './components/AllQuotes'
import Home from './containers/Home'


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
              <Route exact path="/all" component={AllQuotes}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

  };

export default App;
