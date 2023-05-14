import React from 'react';
import cl from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    
    return (
        visible
            ?
            <div className={cl.modalOrder + ' ' + cl.active} onClick={() => setVisible(false)}>
                <div className={cl.modalOrderContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
            :
            <div className={cl.modalOrder} onClick={() => setVisible(false)}>
                <div className={cl.modalOrderContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
    );
};

export default Modal;