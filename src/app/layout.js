import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prompt Generator',
  description: 'Prompt Generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
       <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WDGDZ4QZPV"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WDGDZ4QZPV');
          `,
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
