import type { Metadata } from "next";

import "./globals.css";
import '@fontsource/montserrat';

export const metadata: Metadata = {
  title: "Music App",
  description: "Stream and enjoy your favorite music anytime, anywhere with our music app. Discover millions of songs, create playlists, and listen to top artists across all genres. Whether you’re into pop, rock, hip-hop, or classical, our app brings the best audio experience with personalized recommendations, offline listening, and high-quality streaming. Join now and explore the ultimate music journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
         style={{ fontFamily: 'montserrat' }}
      >
        {children}
      </body>
    </html>
  );
}
