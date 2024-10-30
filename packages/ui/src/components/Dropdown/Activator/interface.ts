import type { TContext, TType } from '../../../interfaces';

export interface ActivatorProps {
    type?: TType;
    label: string;
    isOpen?: boolean;
    onClick?: () => void;
    context: TContext;
    className?: string;
}