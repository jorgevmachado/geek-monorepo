import React from 'react';

import ModalComponent from '../../components/Modal';

import type { TContext } from '../../interfaces';

import Modal from './modal';
import ModalContext from './ModalContext';

interface ModalProviderProps {
    modal: Modal;
    context?: TContext;
    onCloseFunction?: () => void;
}

export default function ModalProvider({ modal, context = 'primary', onCloseFunction }: Readonly<ModalProviderProps>) {
    const style = { width: '100%', height: '100%' };
    
    return (
        <ModalContext.Provider value={{ modal }}>
            <div style={modal.visibility ? style : {}} className="modal">
                <ModalComponent
                    key={modal.title}
                    title={modal.title}
                    isOpen={modal.visibility}
                    onClose={() => {
                        onCloseFunction && onCloseFunction();
                        modal.close();
                    }}
                    context={context}
                    closeOnEsc
                    closeOnOutsideClick>
                    {modal.body}
                </ModalComponent>
            </div>
        </ModalContext.Provider>
    );
}