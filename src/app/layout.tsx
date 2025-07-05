import type { Metadata } from "next";
import "./globals.css";
import { Be_Vietnam_Pro, Poppins } from 'next/font/google'

export const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-be-vietnam',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})



export const metadata: Metadata = {
  title: {
    default: "Hire Purchase",
    template: "%s | Hire Purchase"
  },
  description: "Hire purchase is a platform to power crowdsourced venture individual and collective investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnam.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
