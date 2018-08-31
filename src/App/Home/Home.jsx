import React, { Component } from 'react';
import AppContext from '../AppContext';
import { Button } from '../../Components/Button/Button';

class Home extends Component {

    render() {

        return (
            <AppContext.Consumer>
                {
                    ({ theme, switchTheme }) => (

                        <div className="home">
                            <h1 className="home__title">Home page</h1>

                            <div className="home__content" style={
                                {
                                    backgroundColor: theme.backgroundColor,
                                    color: theme.color,
                                    borderColor: theme.borderColor,

                                }
                            }>
                                {theme.color} <br />
                                {theme.backgroundColor} <br />
                                {theme.borderColor} <br />
                            </div>

                            <Button onClick={switchTheme} content="Switch themes" />
                        </div>
                    )
                }
            </AppContext.Consumer>
        );
    }
}

export default Home;
