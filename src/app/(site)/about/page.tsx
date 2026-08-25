import Image from "next/image";
import Hero from "@/components/about/Hero"
import WhoIAm from "@/components/about/WhoIAm";
import Timeline from "@/components/about/Timeline"
import TechStack from "@/components/about/TechStack";
import WhatIDo from "@/components/about/WhatIDo";
import Background from "@/components/about/Background";
import CTA from "@/components/about/CTA";
export default function About() {
  return (
    <main>
      <Hero />
      < WhoIAm />
      <Timeline />
      <TechStack />
      <WhatIDo />
      < Background />
      < CTA />
    </main>
  );
}
