"use client";
import GDefault from "@geek/ui/GDefault";
import {FaBeer} from "react-icons/fa";
import { config } from "./config";

export default function Home() {
    const { logo, navbar, sidebar} = config;
    return (
        <GDefault
            user={{name: 'Jorge Luiz', email: 'jorge.vmachado@gmail.com', picture: '/logo/logo.svg'}}
            logo={logo}
            navbar={navbar}
            sidebar={sidebar}>
            <h3> Lets go for a <FaBeer/>? </h3>
        </GDefault>
    );
}
