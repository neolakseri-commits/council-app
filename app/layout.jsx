import './globals.css'

export const metadata = {
  title: 'COUNCIL – Meet Your 25-Agent Self',
  description: 'Your personal AI council debates your biggest decisions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

