import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ 
    children 
}: React.PropsWithChildren) => {
    const el = document.getElementById('modal-root') as HTMLDivElement;
    return ReactDOM.createPortal(children, el);
};

export default Modal;