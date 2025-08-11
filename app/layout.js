import "./globals.css";

import Wrapper from "../components/Wrapper";
export const metadata = {
  title: "Portfolio | Saurabh Bisht",
  description: "Full-Stack Web Developer Portfolio",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Wrapper children={children} />
      </body>
    </html>
  );
}
