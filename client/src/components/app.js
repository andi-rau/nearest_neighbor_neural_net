import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SecondPage from '../pages/second-page';

export default (props) => {

    return(
        <BrowserRouter>
        <div className="app">
            <div>Header</div>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route path="/second" component={SecondPage}></Route>
            </Switch>
            <div>Footer</div>
        </div>
        </BrowserRouter>
    )

}