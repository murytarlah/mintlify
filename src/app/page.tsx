import Footer from "@/components/Footer";
import HeroContent from "./_sections/HeroContent";
import Reviews from "./_sections/Reviews";
import Features from "./_sections/Features";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <HeroContent />
        <Features />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
