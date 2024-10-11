import './Default.scss';

import Fade from '../../animations/fade';

import Header from '../Header';
import Sidebar from '../Sidebar';

import type { NavSidebar, Navbar, User } from '../interface';

interface DefaultProps {
    user: User;
    logo: string;
    navbar?: Array<Navbar>;
    sidebar?: Array<NavSidebar>;
    children: React.ReactNode;
}
export default function Default({ user, logo, navbar, sidebar, children }: DefaultProps ) {
    return (
        <Fade>
            <Header user={user} logo={logo} navbar={navbar} sidebar={sidebar} />
            <main className="main-container">
                <Sidebar sidebar={sidebar} />
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    );
}