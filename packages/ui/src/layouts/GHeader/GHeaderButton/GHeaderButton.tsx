import './GHeaderButton.scss';

interface HeaderButtonProps {
    rel?: string;
    href?: string;
    label: string;
    target?: string;
}

export default function GHeaderButton({ rel = 'noopener', href, label, target = '_self' }: HeaderButtonProps) {
    return (
        <a className="header-button" href={href} rel={rel} target={target}  data-testid="header-button">
        {label}
        </a>
    );
};