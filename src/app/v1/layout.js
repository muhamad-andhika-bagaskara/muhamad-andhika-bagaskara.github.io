import { Inter } from "next/font/google";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    author : "Muhamad Andhika Bagaskra",
    title : "Muhamad Andhika Bagaskara - Portfolio",
    description : "Welcome to my Portfolio - It's about everything that I've been built with love.",
    logo : "/dk_logo.svg",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href={metadata.logo} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* <meta property="og:image" content="/images/thumbnail.png" /> */}
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                {/* <meta name="twitter:card" content="/images/thumbnail.png" /> */}
                <meta name="author" content={metadata.author} />

                <title>{metadata.title}</title>
            </head>
            <body className={inter.className}>
                <Menu />
                {children}
            </body>
        </html>
    )
}