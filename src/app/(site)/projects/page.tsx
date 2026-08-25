import CTA from "@/components/projects/CTA";
import FeaturedProject from "@/components/projects/Featured";
import Hero from "@/components/projects/Hero";
import OtherProjects from "@/components/projects/Projects";
import Image from "next/image";
export default function Projects() {
  return (
    <main>
      < Hero />
      < FeaturedProject />
      < OtherProjects />
      < CTA />
    </main>
  );
}
