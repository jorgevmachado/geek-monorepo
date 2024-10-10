import GHeader, { GHeaderNavBarProps } from '../GHeader';
import Fade from '../../animations/fade';


import './GDefault.scss';
import GSidebar, { GSidebarItemProps } from '../GSidebar';

interface DefaultProps {
    user: {
        name: string;
        email: string;
        picture?: string;
    }
    logo: string;
    navbar?: Array<GHeaderNavBarProps>;
    sidebar?: Array<GSidebarItemProps>;
    children: React.ReactNode;
}
export default function GDefault({ user = { name: 'Jorge Luiz', email: 'jorge.vmachado@gmail.com', picture: '/logo/logo.svg' }, logo, navbar, sidebar, children }: DefaultProps ) {
    return (
        <Fade>
            <GHeader user={user} logo={logo} navbar={navbar} />
            <main className="main-container">
                <GSidebar sidebar={sidebar} />
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    );
}