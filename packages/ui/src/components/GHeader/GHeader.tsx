import './GHeader.scss';
import GIcon from "../GIcon";
import {FaHamburger} from "react-icons/fa";


interface HeaderDropdownProps {
    label: string;
    children: React.ReactNode;
}

function HeaderDropdown({label}: HeaderDropdownProps) {
    return (
        <div>
            <p>{label}</p>
        </div>
    )
}

interface HeaderButtonProps {
    label: string;
    onRedirect: () => void;
}

function HeaderButton({ label }: HeaderButtonProps) {
    return (
        <a>
            {label}
        </a>
    )
}

interface HeaderProps {
    logo: string;
}

export default function GHeader({ logo }: HeaderProps) {
    const nav = [
        {
            key: 'rental',
            type: 'button',
            path: '/aluguel',
            label: 'Alugar',
            onRedirect: () => {
                window.open(`/aluguel`, '_self', 'noopener');
            }
        },
        {
            key: 'sale',
            type: 'button',
            label: 'Comprar',
            path: '/venda',
            onRedirect: () => {
                window.open(`/venda`, '_self', 'noopener');
            }
        },
        {
            key: 'developments',
            type: 'dropdown',
            label: 'Lançamentos',
            onRedirect: () => {
                window.open(`/descobrir`, '_self', 'noopener');
            },
            items: [
                {
                    type: 'button',
                    label: 'Na planta',
                    path: '/lancamentos/imoveis/na-planta',
                    onRedirect: () => {
                        window.open(`/lancamentos/imoveis/na-planta`, '_self', 'noopener');
                    }
                },
                {
                    type: 'button',
                    label: 'Em construção',
                    path: '/lancamentos/imoveis/em-construcao',
                    onRedirect: () => {
                        window.open(`/lancamentos/imoveis/em-construcao`, '_self', 'noopener');
                    }
                },
                {
                    type: 'button',
                    label: 'Pronto para morar',
                    path: '/lancamentos/imoveis/pronto-para-morar',
                    onRedirect: () => {
                        window.open(`/lancamentos/imoveis/pronto-para-morar`, '_self', 'noopener');
                    }
                },
                {
                    type: 'button',
                    label: 'Todos os imóveis',
                    path: '/lancamentos',
                    onRedirect: () => {
                        window.open(`/lancamentos`, '_self', 'noopener');
                    }
                },
            ]
        },
        {
            key: 'advertising',
            type: 'dropdown',
            label: 'Anunciar',
            onRedirect: () => {
                window.open(`/descobrir`, '_self', 'noopener');
            },
            items: [
                {
                    label: 'Sou corretor(a)/imobiliária',
                    path: '/proprietarios',
                    onRedirect: () => {
                        window.open(`/planos-profissionais`, '_self', 'noopener');
                    }
                },
                {
                    label: 'Sou proprietário(a)',
                    path: '/lancamentos/imoveis/em-construcao',
                    onRedirect: () => {
                        window.open(`/proprietarios`, '_self', 'noopener');
                    }
                },
            ]
        },
        {
            key: 'discovery',
            type: 'button',
            label: 'Descobrir',
            path: '/descobrir',
            onRedirect: () => {
                window.open(`/descobrir`, '_self', 'noopener');
            }
        },
        {
            key: 'financing',
            type: 'button',
            label: 'Financiamento',
            path: '/financiamento',
            onRedirect: () => {
                window.open(`/financiamento`, '_self', 'noopener');
            }
        },
        {
            key: 'help',
            type: 'button',
            label: 'Ajuda',
            path: '/ajuda',
            onRedirect: () => {
                window.open('/', '_self', 'noopener');
            }
        }
    ]
    return (
        <header className="header-container">
            <div className="header-container__brand">
                <button className="header-container__brand--button">
                    <GIcon icon={<FaHamburger/>} color="primary-100"/>
                </button>
                <div className="header-container__brand--logo">
                    <img alt="Logo" src={logo} title="Logo"/>
                </div>
            </div>
            <nav className="header-container__nav">
                <ul className="header-container__nav--list">
                    {
                        nav.map((item) => (
                            <li className="header-container__nav--list-item" key={item.key}>
                                {
                                    item.type === 'button' ? (
                                        <HeaderButton label={item.label} onRedirect={item.onRedirect}/>
                                    ) : (
                                        <HeaderDropdown label={item.label}>
                                            {
                                                item?.items?.map((subItem) => (
                                                    <HeaderButton key={subItem.label} label={subItem.label} onRedirect={subItem.onRedirect}/>
                                                ))
                                            }
                                        </HeaderDropdown>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}