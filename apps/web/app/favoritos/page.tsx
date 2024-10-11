"use client";
import {config} from "../config";
import { Default } from "@geek/ui";

export default function Favorites() {
    const { user, logo, navbar, sidebar} = config;
    return (
        <Default user={user} logo={logo} navbar={navbar} sidebar={sidebar}>
            <h3> Favoritos </h3>
        </Default>
    );
}