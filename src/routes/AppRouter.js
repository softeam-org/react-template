import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from '../pages/Main';

const AppRouter = () => (
  <Switch>
    <Route>
    	<Main/>
    </Route>
  </Switch>
);

export default AppRouter;