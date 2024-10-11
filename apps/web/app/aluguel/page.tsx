"use client";
import {config} from "../config";
import { Default } from "@geek/ui";

export default function Rental() {
    const { logo, user, navbar, sidebar, onLogout} = config;
    return (
        <Default logo={logo} user={user} navbar={navbar} sidebar={sidebar} onLogout={onLogout}>
            <h3> ALUGUEL </h3>
        </Default>
    );
}