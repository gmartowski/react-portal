import React from 'react';
import { NewPortal } from '../../NewPortal/NewPortal';

export const Home = () => {
    return (
        <div className="home">
            <h1>Home page</h1>
            <NewPortal>
                <div style={{ position: 'absolute', top: '50%', left: '50%', width:'500px', transform:'translate(-50%, -50%)'}}>
                    <h1>Hello there !</h1>
                </div>
            </NewPortal>
        </div>
    );
};
