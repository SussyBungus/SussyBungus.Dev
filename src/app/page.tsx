import Image from "next/image";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About"
import Currently from "@/components/home/Currently";
export default function Home() {
  return (
    <main>
      < Hero />
      < About />
      < Currently />
    </main>
  );
}
