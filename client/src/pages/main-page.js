import React, {Component} from 'react';

export default class MainPage extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <main className="page main_page">
                <h1 className="page__title">Nearest Neighbor Search</h1>

                <div className="page__content">
                    Content will be shown here!
                </div>
            </main>
        )

    }

}