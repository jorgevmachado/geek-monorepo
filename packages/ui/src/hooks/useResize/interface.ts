export type Medias = {
    mobile: MediaQueryList;
    tablet: MediaQueryList;
    desktop: MediaQueryList;
    full_hd: MediaQueryList;
    widescreen: MediaQueryList;
}


export interface Callback {
    onFullHD?: () => void;
    onMobile?: () => void;
    onTablet?: () => void;
    onDesktop?: () => void;
    onWidescreen?: () => void;
}