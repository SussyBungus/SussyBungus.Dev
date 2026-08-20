import Image from "next/image";
import Hero from "@/components/about/Hero"
import WhoIAm from "@/components/about/WhoIAm";
import Timeline from "@/components/about/Timeline"
export default function About() {
  return (
    <main>
      <Hero />
      < WhoIAm />
      <Timeline />
    </main>
  );
}
