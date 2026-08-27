import CTA from "@/components/photography/CTA";
import Gear from "@/components/photography/Gear";
import Hero from "@/components/photography/Hero";
import SelectedWork from "@/components/photography/Selected";
import Image from "next/image";
export default function Photography() {
  return (
    <main>
      < Hero />
      < SelectedWork />
      < Gear />
      < CTA />
    </main>
  );
}
