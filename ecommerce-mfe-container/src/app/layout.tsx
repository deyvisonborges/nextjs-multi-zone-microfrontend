export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <nav style={{ display: "flex", gap: 20, marginBottom: 40 }}>
          <a href="/">Home</a>
          <a href="/pedidos">Pedidos</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
