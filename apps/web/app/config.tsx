import { NavSidebar, Navbar } from "@geek/ui";
import {CiCalendar, CiHeart, CiPhone, CiUser} from "react-icons/ci";
import {IoDocumentTextOutline} from "react-icons/io5";

const logo = '/logo/logo.svg';

const user = {
    name: 'Jorge Luiz',
    email: 'jorge.vmachado@gmail.com',
};

const navbar: Array<Navbar> = [
    {
        key: 'rental',
        type: 'button',
        path: '/aluguel',
        label: 'Alugar',
        onRedirect: () => {
            window.open('/aluguel', '_self', 'noopener');
        },
    },
    {
        key: 'sale',
        type: 'button',
        label: 'Comprar',
        path: '/venda',
        onRedirect: () => {
            window.open('/venda', '_self', 'noopener');
        },
    },
    {
        key: 'developments',
        type: 'dropdown',
        path: "/",
        label: 'Lançamentos',
        items: [
            {
                key: 'on-the-plant',
                type: 'button',
                label: 'Na planta',
                path: '/lancamentos/imoveis/na-planta',
                onRedirect: () => {
                    window.open('/lancamentos/imoveis/na-planta', '_self', 'noopener');
                },
            },
            {
                key: 'under-construction',
                type: 'button',
                label: 'Em construção',
                path: '/lancamentos/imoveis/em-construcao',
                onRedirect: () => {
                    window.open('/lancamentos/imoveis/em-construcao', '_self', 'noopener');
                },
            },
            {
                key: 'ready-to-live',
                type: 'button',
                label: 'Pronto para morar',
                path: '/lancamentos/imoveis/pronto-para-morar',
                onRedirect: () => {
                    window.open('/lancamentos/imoveis/pronto-para-morar', '_self', 'noopener');
                },
            },
            {
                key: 'all-properties',
                type: 'button',
                label: 'Todos os imóveis',
                path: '/lancamentos',
                onRedirect: () => {
                    window.open('/lancamentos', '_self', 'noopener');
                },
            },
        ],
    },
    {
        key: 'advertising',
        type: 'dropdown',
        path: "/",
        label: 'Anunciar',
        items: [
            {
                key: 'broker',
                type: 'button',
                label: 'Sou corretor(a)/imobiliária',
                path: '/corretor',
                onRedirect: () => {
                    window.open('/corretor', '_self', 'noopener');
                },
            },
            {
                key: 'owner',
                type: 'button',
                label: 'Sou proprietário(a)',
                path: '/proprietarios',
                onRedirect: () => {
                    window.open('/proprietarios', '_self', 'noopener');
                },
            },
        ]
    },
    {
        key: 'discovery',
        type: 'button',
        label: 'Descobrir',
        path: '/descobrir',
        onRedirect: () => {
            window.open('/descobrir', '_self', 'noopener');
        },
    },
    {
        key: 'financing',
        type: 'button',
        label: 'Financiamento',
        path: '/financiamento',
        onRedirect: () => {
            window.open('/financiamento', '_self', 'noopener');
        },
    },
    {
        key: 'help',
        type: 'button',
        label: 'Ajuda',
        path: '/ajuda',
        onRedirect: () => {
            window.open('/ajuda', '_self', 'noopener');
        },
    }
];

const sidebar: Array<NavSidebar> = [
    {
        key: 'profile',
        items: [
            {
                key: 'profile',
                icon: <CiUser />,
                label: 'Meus dados',
                path: '/meus-dados',
                onRedirect: () => {
                    window.open('/meus-dados', '_self', 'noopener');
                }
            },
        ]
    },
    {
        key: 'searching',
        label: 'Buscando imóveis',
        items: [
            {
                key: 'favorites',
                icon: <CiHeart />,
                label: 'Favoritos',
                path: '/favoritos',
                onRedirect: () => {
                    window.open('/favoritos', '_self', 'noopener');
                }
            },
            {
                key: 'contracted-advertisements',
                icon: <CiPhone />,
                label: 'Anúncios contatados',
                path: '/contatados',
                onRedirect: () => {
                    window.open('/contatados', '_self', 'noopener');
                }
            },
            {
                key: 'requested-visits',
                icon: <CiCalendar />,
                label: 'Visitas solicitadas',
                path: '/minhas-visitas',
                onRedirect: () => {
                    window.open('/minhas-visitas', '_self', 'noopener');
                }
            },
            {
                key: 'proposals-sent',
                icon: <IoDocumentTextOutline />,
                label: 'Propostas enviadas',
                path: '/minhas-propostas',
                onRedirect: () => {
                    window.open('/minhas-propostas', '_self', 'noopener');
                }
            },
        ]
    },
    {
        key: 'owners',
        label: 'Anunciando imóveis',
        items: [
            {
                key: 'publisher',
                label: 'Anunciar meu imóvel',
                path: '/anuncio/cadastrar/',
                counter: 96,
                onRedirect: () => {
                    window.open('/anuncio/cadastrar/', '_self', 'noopener');
                }
            }
        ]
    }
];

export const config = {
    logo,
    user,
    navbar,
    sidebar,
    onLogout: () => {
        window.open('/anuncio/cadastrar/', '_self', 'noopener');
    }
}