export type TAppearance =
     'select'
    | 'outline'
    | 'standard'
    | 'borderless'
    | 'iconButton';


export const OAppearance: Array<TAppearance> = [
    'select',
    'outline',
    'standard',
    'borderless',
    'iconButton'
];

export type TContext =
    | 'link'
    | 'info'
    | 'error'
    | 'custom'
    | 'neutral'
    | 'primary'
    | 'success'
    | 'secondary'
    | 'attention';

export const OContext: Array<TContext> = [
     'link',
     'info',
     'error',
     'custom',
     'neutral',
     'primary',
     'success',
     'secondary',
     'attention'
];

export type TType = 'reset' | 'submit' | 'button';

export const OType: Array<TType> = ['reset' , 'submit' , 'button'];

export type TSize = 'small' | 'regular' | 'large';

export const OSize: Array<TSize> = ['small' , 'regular' , 'large'];

export type TIconPosition = 'left' | 'right';

export const OIconPosition: Array<TIconPosition> = ['left' , 'right'];