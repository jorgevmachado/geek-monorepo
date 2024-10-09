import GHeader, { GHeaderNavBarProps } from '../GHeader';
import Fade from '../../animations/fade';


import './GDefault.scss';
import GSidebar from '../GSidebar';

interface DefaultProps {
    logo: string;
    navbar?: Array<GHeaderNavBarProps>;
    children: React.ReactNode;
}
export default function GDefault({ logo, navbar, children }: DefaultProps ) {
    return (
        <Fade>
            <GHeader logo={logo} navbar={navbar} />
            <main className="main-container">
                <GSidebar />
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    );
}