import "./globals.css";
import './bootstrap.css';
import NextScript from 'next/script'

export const metadata = {
  title: "モーダル表示",
  description: "Next.jsで動的に取得したコンテンツをモーダル表示",
};

export default async function RootLayout({ children, modal}) {

  return (
    <html lang="en">
      <body>
        <nav className="navbar bg-primary-subtle">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">layout.js</span>
          </div>
        </nav>
        {children}
        {modal}
        <NextScript src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></NextScript>
      </body>
    </html>
  );
}
