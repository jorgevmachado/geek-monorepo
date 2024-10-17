export type TType = 'link' |'reset' | 'submit' | 'button';

export const OType: Array<TType> = [ 'link','reset' , 'submit' , 'button' ];

export type TSize = 'small' | 'regular' | 'large';

export const OSize: Array<TSize> = ['small' , 'regular' , 'large'];

export type TAppearance =
    | 'navbar'
    | 'select'
    | 'outline'
    | 'dropdown'
    | 'standard'
    | 'borderless'
    | 'iconButton';


export const OAppearance: Array<TAppearance> = [
    'navbar',
    'select',
    'outline',
    'dropdown',
    'standard',
    'borderless',
    'iconButton'
];