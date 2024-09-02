import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";


const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Motiv8r",
  description: "Get motivated daily to be your best self",
};

export default function RootLayout({ children }) { 

const header  = (
  <header className='p-4 sm:p-8 flex items-center justify-between gap-4 '>
    <Link href={'/'}>
      <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Motiv8r</h1>
    </Link>
    <Logout />
  </header>
)
const footer  = (
  <footer className='p-4 sm:p-8 grid place-items-center'>
    <Link href={'https://davisjr.netlify.app/'} target="_blank" className="">
        <p className={'text-purple-500 duration-200 hover:text-white hover:bg-purple-500  ' + fugaz.className}>Created by D.Jr 💪</p>
      </Link>
  </footer>
)

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
