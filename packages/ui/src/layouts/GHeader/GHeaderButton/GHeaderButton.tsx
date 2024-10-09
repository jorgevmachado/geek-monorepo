import './GHeaderButton.scss';

interface HeaderButtonProps {
    href?: string;
    label: string;
}

const GHeaderButton: React.FC<HeaderButtonProps> = ({ href, label }) => {
    return (
        <a className="header-button" href={href} target="_self"  data-testid="header-button">
        {label}
        </a>
);
};

export default GHeaderButton;