import React from 'react';
import cl from './NewPharmModal.module.css';

const NewPharmModal = ({children, visible, setVisible}) => {
    
    return (
        visible
            ?
        <div className={cl.newPharm + ' ' + cl.active} onClick={() => setVisible(false)}>
            <div className={cl.newPharmContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
            :
            <div className={cl.newPharm} onClick={() => setVisible(false)}>
                <div className={cl.newPharmContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
    );
};

export default NewPharmModal;