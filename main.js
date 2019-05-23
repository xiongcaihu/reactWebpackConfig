import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,HashRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routerConfig from './src/routerConfig.js';

ReactDom.render(<BrowserRouter>
  {renderRoutes(routerConfig)}
</BrowserRouter>,
  document.querySelector('.app'));