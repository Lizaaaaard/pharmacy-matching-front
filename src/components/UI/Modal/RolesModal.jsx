import React from 'react';
import cl from './RolesModal.module.css';
const RolesModal = ({children, visible, setVisible}) => {
    
    const root = [cl.rolesModal]
    if(visible){
        root.push(cl.active);
    }
    
    return (
        <div className={root.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.rolesMOdalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default RolesModal;