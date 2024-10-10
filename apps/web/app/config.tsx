import {GHeaderNavBarProps} from "@geek/ui/GHeader";
import {GSidebarItemProps} from "@geek/ui/GSidebar";
import {CiCalendar, CiHeart, CiPhone, CiUser} from "react-icons/ci";
import {IoDocumentTextOutline} from "react-icons/io5";

const logo = '/logo/logo.svg';

const navbar: Array<GHeaderNavBarProps> = [
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
        label: 'Lançamentos',
        href: '/descobrir',
        rel: 'noopener',
        target: 'self',
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
        ]
    },
    {
        key: 'advertising',
        type: 'dropdown',
        label: 'Anunciar',
        rel: 'noopener',
        target: 'self',
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

const sidebar: Array<GSidebarItemProps> = [
    {
        key: 'personal',
        icon: <CiUser />,
        label: 'Meus dados',
        path: '/meus-dados/perfil',
        onRedirect: () => {
            window.open('/meus-dados/perfil', '_self', 'noopener');
        }
    },
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
    {
        key: 'publisher',
        label: 'Anunciar meu imóvel',
        path: '/anuncio/cadastrar/',
        onRedirect: () => {
            window.open('//anuncio/cadastrar/', '_self', 'noopener');
        }
    },
];

export const config = {
    logo,
    navbar,
    sidebar
}