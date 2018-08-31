import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home" onClick={this.handleClicking}>
                <h1 className="home__title">Home page</h1>

                <div className="home__content">
                    Home content
                </div>
            </div>
        );
    }
}

export default Home;
