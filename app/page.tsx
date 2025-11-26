import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-12 px-6 sm:py-16 sm:px-8">
        {/* Navigation */}
        <div className="w-full text-center pt-8">
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
          {/* Logo */}
          <div className="w-48 sm:w-56 md:w-64">
            <Image
              src="/assets/CONGOLICIOUS-FEST-LOGO-cropped.png"
              alt="Congolicious Fest Logo"
              width={300}
              height={300}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Event Details */}
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2">
              20-21 & 27-28
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              DÉCEMBRE 2025
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
              TRIOMPHAL PARK
            </h3>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl text-center pb-8">
          <div className="flex items-start justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm">
            <div className="w-[30%] flex items-start justify-center">
              <Image
                src="/assets/BASELINE-CONGOLICIOUS-FEST-WHITE-cropped.png"
                alt="Congolicious Fest Baseline"
                width={200}
                height={133}
                className="w-full h-auto"
              />
            </div>
            <div className="w-[60%] text-left">
              <p className="leading-relaxed">
                Le Congolicious Fest est le tout premier festival Food & Music de la RDC, célébrant la richesse de notre diversité musicale et culinaire. Cet événement de quatre jours rassemble mélomanes, gourmands et philanthropes autour d&apos;une RDC solidaire et pacifique. Les bénéfices sont entièrement reversés à la Congolicious Foundation pour soutenir la lutte contre la faim et l&apos;assistance aux communautés vulnérables.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
