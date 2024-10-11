"use client";
import {config} from "../config";
import { Default } from "@geek/ui";

export default function Rental() {
    const { logo, user, navbar, sidebar} = config;
    return (
        <Default logo={logo} user={user} navbar={navbar} sidebar={sidebar}>
            <h3> ALUGUEL </h3>
        </Default>
    );
}