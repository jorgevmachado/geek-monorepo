import React, { useEffect, useMemo, useState } from 'react';

import { Slide } from '../../animations';

import useResize from '../useResize';

import Alert, { AlertData } from './alert';
import AlertContext, { AlertContextProps } from './AlertContext';

import { AlertProviderProps, ComponentProps, Style } from './interface';

function AlertComponent({ elem, alert, onRemove }: ComponentProps) {
    useEffect(() => {
        setTimeout(() => onRemove(alert), alert.delay);
    }, []);

    return elem({
        type: alert.type,
        onClose: () => onRemove(alert),
        children: alert.message as string,
        hasCloseButton: true,
    });
}

export default function AlertProvider({ children, elem }: AlertProviderProps) {
    const [alerts, setAlerts] = React.useState<Array<Alert>>([]);

    const [isMobile, setIsMobile] = useState(false);

    const STYLE_ALERT: Style = {
        top: 15,
        right: 0,
        zIndex: 50,
        position: 'fixed',
    };

    const STYLE_MOBILE: Style = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    const STYLE_DESKTOP: Style = {
        right: 15,
    };

    const STYLE = { ...STYLE_ALERT, ...(isMobile ? STYLE_MOBILE : STYLE_DESKTOP) };

    useResize({
        onMobile: () => setIsMobile(true),
        onTablet: () => setIsMobile(true),
        onDesktop: () => setIsMobile(false),
        onWidescreen: () => setIsMobile(false),
        onFullHD: () => setIsMobile(false),
    }, []);
    
    const addAlert = (alert: AlertData) => { 
        const build = new Alert(alert);
        setAlerts(prev => [...prev, build]);
    };
    
    const remove = (alert: Alert) => {
        setAlerts(prev => prev.map(a => {
            if (a.id === alert.id) {
                a.visible = false;
            }
            return a;
        }));
        setTimeout(() => setAlerts(prev => prev.filter(a => a.id !== alert.id)), 500);
    };
    
    const context: AlertContextProps = useMemo(() => ({
        add: (alert) => { addAlert(alert); },
        alerts,
        
    }), [alerts]);
    
    return (
        <AlertContext.Provider value={context}>
            <div style={STYLE}>
                {
                    alerts.map(alert => (
                        <div key={alert.id} style={{ marginBottom: 15 }}>
                            <Slide direction={isMobile ? 'top' : 'right'} enter={alert.visible}>
                                <AlertComponent elem={elem} alert={alert} onRemove={remove}/>
                            </Slide>
                        </div>
                    ))
                }
            </div>
            {children}
        </AlertContext.Provider>
    );
}