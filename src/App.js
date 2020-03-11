import React ,{Fragment} from 'react';
import { Switch, Route } from "react-router-dom";
import InfiniteScroll from './Components/InfiniteScroll';

import './App.css';

function App() {
 
  return (
    <Fragment>
      <Switch>
        <Route path="/">
            <InfiniteScroll/>
        </Route>
      </Switch>
    </Fragment>
  );
}



export default App;
