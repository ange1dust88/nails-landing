import AboutUs from "@/components/AboutUs";
import Found from "@/components/Found";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Found />
        <AboutUs />
      </main>
    </>
  );
}
