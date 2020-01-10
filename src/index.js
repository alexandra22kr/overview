import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Link, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import styled, {ThemeProvider} from 'styled-components';

import './index.css';
import App from './App';
import Home from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import Create from './components/Pages/Create';
import UserPage from './components/Pages/UserPage';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={{ layout: 'light' }}>
                <Switch>
            {/* <App> */}
                    <Route exact path="/" component={App}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/user" component={UserPage}/>
            {/* </App> */}
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
