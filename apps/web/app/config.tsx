import React from 'react';

import { CiCalendar, CiHeart, CiPhone, CiUser } from 'react-icons/ci';
import { IoDocumentTextOutline } from 'react-icons/io5';

import { type Menu } from '@geek/ui';

const logo = '/logo/logo.svg';

const user = {
    name: 'Jorge Luiz',
    email: 'jorge.vmachado@gmail.com',
};

const menu: Array<Menu> = [
    {
        key: 'navbar',
        items: [
            {
                key: 'rental',
                path: '/aluguel',
                label: 'Alugar',
                onRedirect: () => {
                    window.open('/aluguel', '_self', 'noopener');
                },
            },
            {
                key: 'sale',
                label: 'Comprar',
                path: '/venda',
                onRedirect: () => {
                    window.open('/venda', '_self', 'noopener');
                },
            },
            {
                key: 'developments',
                path: '/',
                label: 'Lançamentos',
                items: [
                    {
                        key: 'on-the-plant',
                        label: 'Na planta',
                        path: '/lancamentos/imoveis/na-planta',
                        onRedirect: () => {
                            window.open('/lancamentos/imoveis/na-planta', '_self', 'noopener');
                        },
                    },
                    {
                        key: 'under-construction',
                        label: 'Em construção',
                        path: '/lancamentos/imoveis/em-construcao',
                        onRedirect: () => {
                            window.open('/lancamentos/imoveis/em-construcao', '_self', 'noopener');
                        },
                    },
                    {
                        key: 'ready-to-live',
                        label: 'Pronto para morar',
                        path: '/lancamentos/imoveis/pronto-para-morar',
                        onRedirect: () => {
                            window.open('/lancamentos/imoveis/pronto-para-morar', '_self', 'noopener');
                        },
                    },
                    {
                        key: 'all-properties',
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
                path: '/',
                label: 'Anunciar',
                items: [
                    {
                        key: 'broker',
                        label: 'Sou corretor(a)/imobiliária',
                        path: '/corretor',
                        onRedirect: () => {
                            window.open('/corretor', '_self', 'noopener');
                        },
                    },
                    {
                        key: 'owner',
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
                label: 'Descobrir',
                path: '/descobrir',
                onRedirect: () => {
                    window.open('/descobrir', '_self', 'noopener');
                },
            },
            {
                key: 'financing',
                label: 'Financiamento',
                path: '/financiamento',
                onRedirect: () => {
                    window.open('/financiamento', '_self', 'noopener');
                },
            },
            {
                key: 'help',
                label: 'Ajuda',
                path: '/ajuda',
                onRedirect: () => {
                    window.open('/ajuda', '_self', 'noopener');
                },
            }
        ]
    },
    {
        key: 'sidebar',
        items: [
            {
                key: 'profile',
                label: 'Perfil',
                items: [
                    {
                        key: 'profile',
                        icon: <CiUser/>,
                        label: 'Meus dados',
                        path: '/meus-dados',
                        onRedirect: () => {
                            window.open('/meus-dados', '_self', 'noopener');
                        }
                    },
                ],
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
        ]
    },
];

export const config = {
    logo,
    user,
    menu,
    onLogout: () => {
        window.open('/anuncio/cadastrar/', '_self', 'noopener');
    }
};