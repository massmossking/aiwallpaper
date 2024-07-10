import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s by AI Wallpaper Generator",
    default: "AI Wallpaper Generator",
  },
  description:
    "AI Wallpaper is an AI Wallpaper Generator, used to generate beautiful wallpapers with AI.",
  keywords:
    "AI Wallpaper, AI Art generator, AI emoji, AI image",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" richColors />

          {children}

          <script
            async
            src="https://chatgpt-umami.vercel.app/script.js"
            data-website-id="def28550-20ea-49d8-9c1a-68dbfaba0134"
          ></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
