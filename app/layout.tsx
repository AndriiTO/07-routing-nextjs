// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          
          <main>
            {children}
            {modal}
          </main>
          <Footer/>
        </TanStackProvider>
      </body>
    </html>
  );
}




// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {

//   return (

//     <html>

//       <body>

//         <TanStackProvider>

//           <Header />

//           {children}

//           <Footer />

//         </TanStackProvider>

//       </body>

//     </html>

//   );

// }

