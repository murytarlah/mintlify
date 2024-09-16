import Footer from "@/components/Footer";
import HeroContent from "./_sections/HeroContent";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <HeroContent />
      </main>
      <Footer />
    </div>
  );
}
