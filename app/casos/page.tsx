import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Casos } from "@/components/sections/Casos";
import { CTASection } from "@/components/ui/CTASection";
import { casosPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Casos de éxito — AERIS",
  description: "Estrategia, ejecución e IA. Impacto real en negocios reales.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero label={casosPage.label} title={casosPage.title} lead={casosPage.lead} titleMaxCh={14} />
      <Casos headless />
      <CTASection />
    </>
  );
}
