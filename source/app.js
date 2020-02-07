import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import {initializeStreamOfTweets} from './Utils/WebAPIUtils';

initializeStreamOfTweets();

ReactDOM.render(
    <Application/>,
    document.getElementById('react-application'),
);