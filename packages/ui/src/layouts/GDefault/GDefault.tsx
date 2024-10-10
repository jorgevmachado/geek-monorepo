import GHeader, { GHeaderNavBarProps } from '../GHeader';
import Fade from '../../animations/fade';


import './GDefault.scss';
import GSidebar, { GSidebarItemProps } from '../GSidebar';

interface DefaultProps {
    logo: string;
    navbar?: Array<GHeaderNavBarProps>;
    sidebar?: Array<GSidebarItemProps>;
    children: React.ReactNode;
}
export default function GDefault({ logo, navbar, sidebar, children }: DefaultProps ) {
    return (
        <Fade>
            <GHeader logo={logo} navbar={navbar} />
            <main className="main-container">
                <GSidebar sidebar={sidebar} />
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    );
}