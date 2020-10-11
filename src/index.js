import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import movies from './movies';
import reviews from './reviews';

import './styles.css';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="movies" {...movies} />
        <Resource name="reviews" {...reviews} />
    </Admin>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
