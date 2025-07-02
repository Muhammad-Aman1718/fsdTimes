// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "Tech Blog",
//   description: "A modern blog about technology and programming",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${inter.variable} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
//       >
//         <Header />
//         <main className="flex-1">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             {children}
//           </div>
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Heading font (Serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700", "900"], // Regular, Bold, Extra Bold
});

// Body font (Sans-serif)
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"], // Regular, Medium, Bold
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "A modern blog about technology and programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${openSans.variable} font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
