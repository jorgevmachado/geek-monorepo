import { useEffect } from 'react';

import type { Callback, Medias } from './interface';
import { DeviceBreakpoints } from './enum';

export default function useResize({
    onFullHD,
    onMobile,
    onTablet,
    onDesktop,
    onWidescreen
}: Callback, deps: Array<any> = []) {
    
    const MAP_CALLBACKS = {
        mobile: onMobile,
        tablet: onTablet,
        desktop: onDesktop,
        widescreen: onWidescreen,
        full_hd: onFullHD
    };

    const MEDIAS = {
        mobile: DeviceBreakpoints.MAX_MOBILE,
        tablet: `${DeviceBreakpoints.MIN_TABLET} and ${DeviceBreakpoints.MAX_TABLET}`,
        desktop: `${DeviceBreakpoints.MIN_DESKTOP} and ${DeviceBreakpoints.MAX_DESKTOP}`,
        widescreen: `${DeviceBreakpoints.MIN_WIDESCREEN} and ${DeviceBreakpoints.MAX_WIDESCREEN}`,
        full_hd: DeviceBreakpoints.MIN_FULL_HD
    };
    
    const checker = (event: MediaQueryListEvent, fn: () => void) => { 
        if (event.matches) { fn(); } 
    };
    
    const makeMobile = (event: MediaQueryListEvent) => {
        if (onMobile) { checker(event, onMobile); }
    };

    const makeTablet = (event: MediaQueryListEvent) => {
        if (onTablet) { checker(event, onTablet); }
    };

    const makeDesktop = (event: MediaQueryListEvent) => {
        if (onDesktop) { checker(event, onDesktop); }
    };

    const makeWidescreen = (event: MediaQueryListEvent) => {
        if (onWidescreen) { checker(event, onWidescreen); }
    };

    const makeFullHD = (event: MediaQueryListEvent) => {
        if (onFullHD) { checker(event, onFullHD); }
    };
    
    const initialize = (medias: Medias) => {
        const key = Object
            .keys(medias)
            .find((key) => medias[key as keyof Medias].matches);
        MAP_CALLBACKS[key as keyof typeof MAP_CALLBACKS]?.();
    };
    
    const getMedias = (): Medias => ({
        mobile: window.matchMedia(MEDIAS.mobile),
        tablet: window.matchMedia(MEDIAS.tablet),
        desktop: window.matchMedia(MEDIAS.desktop),
        full_hd: window.matchMedia(MEDIAS.full_hd),
        widescreen: window.matchMedia(MEDIAS.widescreen)
    });
    
    useEffect( () => {
        const medias = getMedias();
        initialize(medias);
    }, []);

    useEffect(() => {
        const medias = getMedias();

        onMobile && medias.mobile.addEventListener('change', makeMobile);
        onTablet && medias.tablet.addEventListener('change', makeTablet);
        onDesktop && medias.desktop.addEventListener('change', makeDesktop);
        onWidescreen && medias.widescreen.addEventListener('change', makeWidescreen);
        onFullHD && medias.full_hd.addEventListener('change', makeFullHD);

        return () => {
            onMobile && medias.mobile.removeEventListener('change', makeMobile);
            onTablet && medias.tablet.removeEventListener('change', makeTablet);
            onDesktop && medias.desktop.removeEventListener('change', makeDesktop);
            onWidescreen && medias.widescreen.removeEventListener('change', makeWidescreen);
            onFullHD && medias.full_hd.removeEventListener('change', makeFullHD);
        };

    }, deps);
}