import './global.css';
import Providers from './providers';

export const metadata = {
  title: 'Welcome to payflow',
  description: 'Payflow web application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
