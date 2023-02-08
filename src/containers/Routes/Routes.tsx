import React from 'react';
import {
  Route,
  Routes as ReactRouterRoutes,
  Outlet
} from 'react-router-dom';
import { routesConfig } from '../../config';

import { Layout } from '../Layout';

export const Routes: React.FC = () => (
  <ReactRouterRoutes>
    <Route element={<Layout><Outlet /></Layout>}>
      {routesConfig.map(({ path, element }) => <Route path={path} element={element} />)}
    </Route>
  </ReactRouterRoutes>
);
