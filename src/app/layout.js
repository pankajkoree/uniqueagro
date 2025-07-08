import "@/app/globals.css"
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

export const metadata = {
  title: "Unique Agro Company",
  description: "Official Website of Unique Agro Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
