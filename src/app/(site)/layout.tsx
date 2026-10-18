import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <CommandPalette />
      {children}
      <Footer />
    </>
  );
}