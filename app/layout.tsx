import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GridPattern } from "@/components/grid-pattern";
import { BottomNav } from "@/components/bottom-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velprabhakaran Basker | AI Engineer",
  description:
    "AI Engineer and Full Stack Engineer building and architecting intelligent systems that solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GridPattern className="h-[100px] z-0" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
            <main className="relative flex min-h-dvh flex-col gap-14">
              {children}
            </main>
          </div>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
