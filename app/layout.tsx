export const metadata = {
  title: 'Sureena Portfolio',
  description: 'Portfolio of Sureena',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
