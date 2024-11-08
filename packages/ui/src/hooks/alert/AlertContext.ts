import React from 'react';

import Alert, { type  AlertData } from './alert';

export interface AlertContextProps {
    add: (alert: AlertData) => void;
    alerts: Array<Alert>
}

export default React.createContext<AlertContextProps>({ alerts: [], add: () => { } });