// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { v4 as uuidv4 } from 'uuid';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageReducer from '../src/reducers/messageReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import channelsReducer from './reducers/channelsReducer';
import currentUserReducer from './reducers/currentUserReducer';

// State and reducers
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || uuidv4(),
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: messageReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
