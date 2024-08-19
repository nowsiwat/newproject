import { Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic';
import { Kanit } from "next/font/google";

const Bootstrap = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min'), {
  ssr: false // ไม่โหลดในฝั่ง server
});
const nunito = Nunito({ subsets: ["latin"] });
const kunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
