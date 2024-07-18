import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import theme from '../theme';
import './global.css';

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
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
