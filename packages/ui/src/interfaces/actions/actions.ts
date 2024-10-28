export type TType = 'link' |'reset' | 'submit' | 'button';

export const OType: Array<TType> = [ 'link','reset' , 'submit' , 'button' ];

export type TSize = 'small' | 'regular' | 'large';

export const OSize: Array<TSize> = ['small' , 'regular' , 'large'];

export type TAppearance =
    | 'menu'
    | 'navbar'
    | 'select'
    | 'sidebar'
    | 'outline'
    | 'dropdown'
    | 'standard'
    | 'borderless'
    | 'iconButton';

export const OAppearance: Array<TAppearance> = [
    'menu',
    'navbar',
    'select',
    'sidebar',
    'outline',
    'dropdown',
    'standard',
    'borderless',
    'iconButton'
];