import React from 'react';

import AlertComponent from '../../components/Alert/Alert';

import Alert from './alert';

export type AlertProps = React.ComponentProps<typeof AlertComponent>

export type Elem = (props: AlertProps) => React.JSX.Element;

export type Style = React.HTMLAttributes<HTMLDivElement>['style'];

export interface ComponentProps {
    elem: Elem;
    alert: Alert;
    onRemove: (alert: Alert) => void;
}
export interface AlertProviderProps {
    elem: Elem;
    children: React.ReactNode;
}

