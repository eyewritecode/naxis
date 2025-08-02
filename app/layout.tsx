import "./globals.css";
import Logo from "@/components/navbar/Logo"
import { Metadata } from "next";
import ConnectWalletButton from "@/components/navbar/ConnectWalletButton";

export const metadata: Metadata = {
  title: 'Naxis',
  description: 'Buy Top Performing Memecoins in 1 Transaction',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--foreground)] text-[var(--background)] font-sans min-h-screen flex flex-col">
        <header className="flex items-center justify-between px-6 py-4">
          <Logo />
          <ConnectWalletButton />
        </header>
        <main className="flex-grow flex flex-col items-center px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
