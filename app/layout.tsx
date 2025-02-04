// app/layout.tsx
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/auth/login">Se connecter</Link>
              </li>
              <li>
                <Link href="/auth/register">S'inscrire</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
