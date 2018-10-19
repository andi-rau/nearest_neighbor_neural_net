import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SecondPage from '../pages/second-page';

export default (props) => {

    return(
        <div className="app">
            <div>Header</div>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route path="/second" component={SecondPage}></Route>
            </Switch>
            <div>Footer</div>
        </div>

    )

}