import React from 'react';

import { RoutesConfig } from '../types/routes';

import { Form } from '../containers/Form';
import { Book } from '../containers/Book';

export const routesConfig: RoutesConfig = [
  {
    label: 'Главная',
    path: '/',
    element: <Form />
  },
  {
    label: 'Мои адреса',
    path: '/book',
    element: <Book />
  }
];
