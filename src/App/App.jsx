import React, { Component } from 'react';
import './app.less';
import 'spectre.css';
import { ButtonSuccess } from '../Components/Button/ButtonSuccess';
import { buttonWarning } from '../Components/Button/ButtonWarning';
import { Button } from '../Components/Button/Button';

export class App extends Component {

    render() {

        const ButtonWarning = buttonWarning(Button);

        return (
            <div className="app">

                <ButtonWarning content={'Warning alert'} onClick={() => {
                    console.log('Klik on Button');
                }} />

                <ButtonSuccess render={Button} content="Button success" />

                <ButtonSuccess>
                    {({ onClick }) => <Button onClick={onClick} content="Button success" />}
                </ButtonSuccess>
            </div>
        );
    }
}
