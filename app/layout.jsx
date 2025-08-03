export const metadata = {
  title: 'Cosmic OS GLM-4.5',
  description: 'A Next.js cosmic simulation system with embedded sound FX and archetypal logic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}