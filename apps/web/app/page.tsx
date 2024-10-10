import GDefault from "@geek/ui/GDefault";
import {FaBeer} from "react-icons/fa";
import { GHeaderNavBarProps } from "@geek/ui/GHeader";
import {CiCalendar, CiHeart, CiPhone, CiUser} from "react-icons/ci";
import {IoDocumentTextOutline} from "react-icons/io5";
import {GSidebarItemProps} from "@geek/ui/GSidebar";
export default function Home() {
    const navbar: Array<GHeaderNavBarProps> = [
        {
            key: 'rental',
            type: 'button',
            path: '/aluguel',
            label: 'Alugar',
            href: '/aluguel',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'sale',
            type: 'button',
            label: 'Comprar',
            path: '/venda',
            href: '/venda',
            rel: 'noopener',
            target: 'self',
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
                    href: '/lancamentos/imoveis/na-planta',
                    rel: 'noopener',
                    target: 'self',
                },
                {
                    key: 'under-construction',
                    type: 'button',
                    label: 'Em construção',
                    path: '/lancamentos/imoveis/em-construcao',
                    href: '/lancamentos/imoveis/em-construcao',
                    rel: 'noopener',
                    target: 'self',
                },
                {
                    key: 'ready-to-live',
                    type: 'button',
                    label: 'Pronto para morar',
                    path: '/lancamentos/imoveis/pronto-para-morar',
                    href: '/lancamentos/imoveis/pronto-para-morar',
                    rel: 'noopener',
                    target: 'self',
                },
                {
                    key: 'all-properties',
                    type: 'button',
                    label: 'Todos os imóveis',
                    path: '/lancamentos',
                    href: '/lancamentos',
                    rel: 'noopener',
                    target: 'self',
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
                    path: '/proprietarios',
                    href: '/proprietarios',
                    rel: 'noopener',
                    target: 'self',
                },
                {
                    key: 'owner',
                    type: 'button',
                    label: 'Sou proprietário(a)',
                    path: '/proprietarios',
                    href: '/proprietarios',
                    rel: 'noopener',
                    target: 'self',
                },
            ]
        },
        {
            key: 'discovery',
            type: 'button',
            label: 'Descobrir',
            path: '/descobrir',
            href: '/descobrir',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'financing',
            type: 'button',
            label: 'Financiamento',
            path: '/financiamento',
            href: '/financiamento',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'help',
            type: 'button',
            label: 'Ajuda',
            path: '/ajuda',
            href: '/ajuda',
            rel: 'noopener',
            target: 'self',
        }
    ];

    const sidebar: Array<GSidebarItemProps> = [
        {
            key: 'personal',
            icon: <CiUser />,
            label: 'Meus dados',
            path: '/meus-dados/perfil',
            href: '/meus-dados/perfil',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'favorites',
            icon: <CiHeart />,
            label: 'Favoritos',
            path: '/favoritos',
            href: '/favoritos',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'contracted-advertisements',
            icon: <CiPhone />,
            label: 'Anúncios contatados',
            path: '/contatados',
            href: '/contatados',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'requested-visits',
            icon: <CiCalendar />,
            label: 'Visitas solicitadas',
            path: '/minhas-visitas',
            href: '/minhas-visitas',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'proposals-sent',
            icon: <IoDocumentTextOutline />,
            label: 'Propostas enviadas',
            path: '/minhas-propostas',
            href: '/minhas-propostas',
            rel: 'noopener',
            target: 'self',
        },
        {
            key: 'publisher',
            label: 'Anunciar meu imóvel',
            path: '/anuncio/cadastrar/',
            href: '/anuncio/cadastrar/',
            rel: 'noopener',
            target: 'self',
        },
    ];
    return (
        <GDefault logo="/logo/logo.svg" navbar={navbar} sidebar={sidebar}>
            <h3> Lets go for a <FaBeer/>? </h3>
        </GDefault>
    );
}
