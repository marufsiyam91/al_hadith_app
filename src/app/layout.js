import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const Hind = Hind_Siliguri({  weight: ['400', '500', '600'],
subsets: ['latin'],});

export const metadata = {
  title: "al-hadith-app",
  description: "Hadith application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Hind.className}>{children}</body>
    </html>
  );
}
