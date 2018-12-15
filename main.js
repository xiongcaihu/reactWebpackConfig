import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routerConfig from './src/routerConfig.js';

ReactDom.render(<HashRouter>
  {renderRoutes(routerConfig)}
</HashRouter>,
  document.querySelector('.app'));