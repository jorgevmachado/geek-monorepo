export interface GHeaderNavBarProps {
    key: string;
    type: 'button' | 'dropdown';
    label: string;
    path?: string;
    href?: string;
    rel?: string;
    target?: string;
    items?: Array<GHeaderNavBarProps>;
}