import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from './AppRouter';

const Routes = () => (
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
);

export default Routes;