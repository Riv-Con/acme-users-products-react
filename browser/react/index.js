import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

const RouteContainer = () => {
    return (
        <Router history={ hashHistory} />
    )
};

import Main from './Main';

var root = document.getElementById('root');
render(<RouteContainer />, root);
