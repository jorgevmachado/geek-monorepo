import { OContext } from '../../interfaces';

import { ButtonProps, OAppearance } from './interface';

export { default } from './Button';
export * from './interface';

export const GenerateButtons = (buttonProps: ButtonProps) => {
    return OAppearance.map((appearance) => {
        return {
            id: appearance,
            key: appearance,
            label: `BUTTON ${appearance.toUpperCase()}`,
            contexts: OContext.map((context) => ({
                    ...buttonProps,
                    context,
                    appearance,
                    children: `${context}`,
                    'aria-label': `${context}`,
                }))
        };
    });
};