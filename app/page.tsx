import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Propuesta } from "@/components/sections/Propuesta";
import { QueIncluye } from "@/components/sections/QueIncluye";
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { Planes } from "@/components/sections/Planes";
import { Comparativa } from "@/components/sections/Comparativa";
import { Casos } from "@/components/sections/Casos";
import { TechTeaser } from "@/components/sections/TechTeaser";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <Propuesta pageCta={{ label: "Cómo lo hacemos", href: "/tecnologia" }} />
      <QueIncluye pageCta={{ label: "Ver todos los servicios", href: "/servicios" }} />
      <ComoTrabajamos />
      <Planes pageCta={{ label: "Ver planes en detalle", href: "/planes" }} />
      <Comparativa />
      <Casos pageCta={{ label: "Ver casos", href: "/casos" }} />
      <TechTeaser />
      <Faq limit={4} moreCta={{ label: "Más preguntas", href: "/planes#faq" }} />
      <CtaFinal />
    </>
  );
}
