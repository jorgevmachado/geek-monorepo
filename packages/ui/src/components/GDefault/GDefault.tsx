import Fade from "../../animations/fade";
import GHeader from "../GHeader";

import './GDefault.scss';

interface DefaultProps {
    logo: string;
    children: React.ReactNode;
}
export default function GDefault({ logo, children }: DefaultProps ) {
    return (
        <Fade>
            <GHeader logo={logo} />
            <main className="main-container">
                <div className="main-content">
                    {children}
                </div>
            </main>
        </Fade>
    )
}