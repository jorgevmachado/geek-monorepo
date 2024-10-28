export { default } from './Link';
export * from './interface';

import { OContext } from '../../interfaces';

import { LinkProps, OAppearance } from './interface';

export const GenerateLinks = (linkProps: Omit<LinkProps, 'children'>) => {
    return OAppearance.map((appearance) => {
        return {
            id: appearance,
            key: appearance,
            label: `LINK ${appearance.toUpperCase()}`,
            contexts: OContext.map((context) => ({
                ...linkProps,
                context,
                appearance,
                children: `${context}`,
            }))
        };
    });
};