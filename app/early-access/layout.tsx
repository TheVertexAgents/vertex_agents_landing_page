import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EarlyAccessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">{children}</main>
      <Footer />
    </>
  );
}
