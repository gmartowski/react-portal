import React, { Component, Fragment } from 'react';
import './home.less';
import AppContext from '../AppContext';
import { Portal } from '../../Components/Portal/PortalComponent';
import { Modal } from '../../Components/Modal/ModalComponent';
import { buttonWarning } from '../../Components/Button/ButtonWarning';
import { Button } from '../../Components/Button/Button';
import { ButtonSuccess } from '../../Components/Button/ButtonSuccess';

export class Home extends Component {

    state = {
        clicks: 0,
        showModal: false,
        contacts: []
    };

    async componentDidMount() {
        await fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(parsedResponse => parsedResponse.results.map(user => (
                {
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    thumbnail: user.picture.thumbnail
                }
            )))
            .then(contacts => this.setState({ contacts }));
    }

    onModalClick = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    handleClicking = () => {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    };

    render() {
        const { clicks, showModal, contacts } = this.state;
        const ButtonWarning = buttonWarning(Button);
        return (
            <AppContext.Consumer>
                {
                    context => (
                        <div className="home" onClick={this.handleClicking}>
                            <h1 className="home__title">Home page</h1>

                            <div className="home__content">

                                <div className="home__portal">

                                    <h3>Portal infos</h3>
                                    <label>Number of clicks bubbled from portal: <strong>{clicks}</strong></label>
                                </div>

                                <div className="home__context">

                                    <h3>Context infos</h3>
                                    <div className="home__context-data">
                                        <label>First name: </label>
                                        <strong>{context.firstName}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Last name: </label>
                                        <strong>{context.lastName}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Phone number: </label>
                                        <strong>{context.phoneNumber}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Random kitty image: </label>
                                        <img src={context.randomImgAddress} />
                                    </div>

                                    <div className="home__list-of-users">
                                        {contacts.map((item) =>
                                            <Fragment style={{ display: 'flex' }}
                                                      key={item.index}>
                                                <div>
                                                    <label>Name: </label>
                                                    <strong>{item.name}</strong>
                                                </div>
                                                <div>
                                                    <label>Email: </label>
                                                    <strong>{item.email}</strong>
                                                </div>
                                                <div>
                                                    <label>Foto: </label>
                                                    <img src={item.thumbnail} />
                                                </div>
                                            </Fragment>
                                        )}
                                    </div>
                                </div>

                                <Portal>
                                    <Modal
                                        toggleModal={this.onModalClick}
                                        visibility={showModal}>
                                    </Modal>
                                </Portal>

                                <button className="btn" onClick={this.onModalClick}>
                                    {showModal ? 'Close modal' : 'Show modal'}
                                </button>

                                <ButtonWarning content={'Warning alert'} onClick={() => {
                                    console.log('Klik on Button');
                                }} />

                                <ButtonSuccess render={Button} content="Button success" />

                                <ButtonSuccess>
                                    {({ onClick }) => <Button onClick={onClick} content="Button success" />}
                                </ButtonSuccess>
                            </div>
                        </div>
                    )
                }
            </AppContext.Consumer>
        );
    }
}
