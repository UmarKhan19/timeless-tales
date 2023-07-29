import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timeless Tales",
  description:
    "Welcome to our enchanting journey through the timeless wonders of India's rich heritage. Immerse yourself in a kaleidoscope of vibrant cultures, ancient traditions, and majestic landmarks. Discover the beauty of our cultural tapestry as we celebrate the essence of India's diverse past. From the regal monuments of the Mughal era to the colorful festivals that light up our hearts, join us in experiencing the grandeur and spirit that make India truly unique. Unfold the stories of our ancestors and relish the magic of a nation that cherishes its heritage with pride and love. Let's embark on this unforgettable odyssey together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
