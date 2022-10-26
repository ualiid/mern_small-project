import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App';
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDom.render(
    <Provider store={store}>
        <Auth0Provider
            domain='dev-dmnk7jvezbx4r615.us.auth0.com'
            clientId='pCuna5wLUFBv6WwmKMmoJSnaWXN0776r'
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </Provider>,

    document.getElementById('root')
);