import FeaturedCampaign from "@/components/heroPart/FeatureCampaign";
import Hero from "@/components/heroPart/Hero";
import Impact from "@/components/heroPart/Impact";
import Info from "@/components/heroPart/Info";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white/90 z-10" />
        <Hero />
      </div>
      <div className="relative z-20">
        <Impact />
        <FeaturedCampaign />
        <Info />
      </div>
    </main>
  );
}