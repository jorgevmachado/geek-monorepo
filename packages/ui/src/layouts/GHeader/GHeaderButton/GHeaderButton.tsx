import './GHeaderButton.scss';

interface HeaderButtonProps {
    label: string;
    onRedirect?: () => void;
}

export default function GHeaderButton({ label, onRedirect }: HeaderButtonProps) {
    return (
        <a className="header-button" onClick={onRedirect}  data-testid="header-button">
        {label}
        </a>
    );
};