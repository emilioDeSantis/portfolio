import Head from "next/head";
import "./globals.css";

export const metadata = {
  openGraph: {
    title: 'UI Design Studio',
    description: 'Creating beautiful and functional interfaces for web and mobile applications.',
    url: 'https://www.ui-design-studio.com/',
    siteName: 'ui-design-studio.com',
    images: [
      {
        url: 'https://www.ui-design-studio.com/og.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  title: 'UI Design Studio',
  description: 'Creating beautiful and functional interfaces for web and mobile applications.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                ></link>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                ></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <body>{children}</body>
        </html>
    );
}
