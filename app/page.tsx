import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Propuesta } from "@/components/sections/Propuesta";
import { QueIncluye } from "@/components/sections/QueIncluye";
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { Planes } from "@/components/sections/Planes";
import { Comparativa } from "@/components/sections/Comparativa";
import { Casos } from "@/components/sections/Casos";
import { Equipo } from "@/components/sections/Equipo";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problema />
        <Propuesta />
        <QueIncluye />
        <ComoTrabajamos />
        <Planes />
        <Comparativa />
        <Casos />
        <Equipo />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
