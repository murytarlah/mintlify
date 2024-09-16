import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 items-center">
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}
