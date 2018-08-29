import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export const Portal = props => {
    const { children } = props;
    return ReactDOM.createPortal(children, portalRoot);
};
