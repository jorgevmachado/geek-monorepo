"use client";
import {Default} from "@geek/ui";
import {FaBeer} from "react-icons/fa";
import {config} from "./config";

export default function Home() {
    const { user, logo, navbar, sidebar, onLogout } = config;
    return (
        <Default
            user={user}
            logo={logo}
            navbar={navbar}
            sidebar={sidebar}
            onLogout={onLogout}
        >
            <h3> Lets go for a <FaBeer/>? </h3>
        </Default>
    );
}
