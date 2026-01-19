import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Banking System",
  description: "Banking system dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Providers>
          <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
          <nav style={{ background: 'white', borderBottom: '1px solid #ddd', padding: '10px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/" style={{ fontSize: '20px', fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>
                Banking System
              </Link>
              <Link href="/" style={{ color: '#333', textDecoration: 'none', padding: '8px 12px' }}>
                Dashboard
              </Link>
            </div>
          </nav>
          <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {children}
          </main>
        </div>
        </Providers>
      </body>
    </html>
  );
}
