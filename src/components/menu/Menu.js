"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import "./Menu.css";

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experiences", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/contacts", label: "Contacts" },
];

const Menu = () => {
    const version = process.env.NEXT_PUBLIC_APP_VERSION;
    // const container = useRef();

    return <ul>
        {menuLinks.map(({ path, label }, index) => (
            <li key={index}>
                <a href={`/${version}${path}`}>
                    {label}
                </a>
            </li>
        ))}
    </ul>;
}

export default Menu;