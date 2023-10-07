import './globals.css'
import { Inter } from 'next/font/google';
import { ThemeProvider } from "./theme-provider";
import { ThemeContextProvider } from './context/theme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
          <title>Copa Tomada</title>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
          <meta name="theme-color" content="#000000" />
          <meta
              name="description"
              content="Somos un negocio de ventas de bebidas en Nueva Córdoba. ¡Pedí lo que quieras y te lo llevamos!"
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Copa Tomada' />
          <meta property='og:image' content='https://copatomada.com.ar/assets/logoheader.png' />
          <meta property='og:description' content="Somos un negocio de ventas de bebidas en Nueva Córdoba. ¡Pedí lo que quieras y te lo llevamos!" />
          <meta property='og:site_name' content='Copa Tomada' />
          <script type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: `{
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Copa Tomada",
                      "url": "https://copatomada.com.ar/",
                      "logo": "https://copatomada.com.ar/assets/logoheader.png",
                      "contactPoint": {
                          "@type": "ContactPoint",
                          "telephone": "+54 351 260-3614",
                          "contactType": "customer service",
                          "areaServed": "AR",
                          "availableLanguage": "es"
                      },
                      "sameAs": [
                          "https://www.facebook.com/copatomada",
                          "https://www.instagram.com/copatomada/",
                          "https://twitter.com/CopaTomada"
                      ]
                  }`,
              }}
          />
          <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-B1NV5N5JSV"
          />
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-B1NV5N5JSV', {
                        page_path: window.location.pathname,
                      });
                    `,
              }}
          />
      </head> 
      <body 
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
