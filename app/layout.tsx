import "./globals.css";

import { Metadata } from "next";
import Head from "next/head";
import SpriteAnimate from "./components/ui/SpriteAnimate";
import BottomBar from "./components/ui/BottomBar";

export const metadata: Metadata = {
  title: 'TheLeader - Massamba Kiminou Chadrack Delmard',
  description: "Découvrez TheLeader, dirigé par Massamba Kiminou Chadrack Delmard, une communauté dédiée à l'innovation, au développement web et mobile, et au marketing digital.",
  other: {
    "google-site-verification": "s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs"
  },
  authors: [{ name: 'Massamba Kiminou Chadrack Delmard' }],
  keywords: [
    'TheLeader',
    'espoir dev',
    'espoir',
    'Comunity',
    'IEPA',
    'Congo',
    'Informatique',
    'Programmation',
    'Massamba Kiminou Chadrack Delmard',
    'chadrack',
    'chadrack massamba',
    'the leader',
    'Développement web',
    'Développement mobile',
    'Marketing digital',
    'Communauté',
  ],
  openGraph: {
    title: 'TheLeader - Massamba Kiminou Chadrack Delmard',
    description: "Rejoignez TheLeader, une communauté innovante dirigée par Massamba Kiminou Chadrack Delmard, spécialisée dans le développement et le marketing digital.",
    url: 'https://chadrack-massamba.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/icons/image.jpg',
        alt: 'Logo TheLeader',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs" />
      </Head>
      <body
        className={` dark w-full h-full bg-background antialiased`}
      >
        {children}
        <SpriteAnimate />
        <BottomBar />
      </body>
    </html>
  );
}
