import { Inter } from "next/font/google";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title : "Muhamad Andhika Bagaskara | Portfolio",
    description : "Everything about me"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Menu />
                <h1>{children}</h1>
            </body>
        </html>
    )
}