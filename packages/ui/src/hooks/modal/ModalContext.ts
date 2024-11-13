import React from 'react';

import Modal, { ModalData } from './modal';

export interface ModalContextData {
    modal: Modal;
}

export default React.createContext<ModalContextData>({
    modal: new Modal({} as ModalData)
});