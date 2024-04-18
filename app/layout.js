 import "./globals.css";
 
export const metadata = {
  title: "ISM E ZAAT",
  description: "ISM E ZAAT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
