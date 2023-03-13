import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalModalProps {
    children: ReactNode,
};

const Modal = ({ 
    children 
}: PortalModalProps) => {
    const el = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(children, el);
};

export default Modal;