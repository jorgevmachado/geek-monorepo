"use client";
import {config} from "../config";
import GDefault from "@geek/ui/GDefault";

export default function Rental() {
    const { logo, navbar, sidebar} = config;
    return (
        <GDefault logo={logo} navbar={navbar} sidebar={sidebar}>
            <h3> ALUGUEL </h3>
        </GDefault>
    );
}