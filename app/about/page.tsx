import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center py-12 px-6 sm:py-16 sm:px-8">
        {/* Navigation */}
        <div className="w-full text-center pt-8 mb-16">
          <Navigation />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full gap-12">
          {/* Logo */}
          <div className="w-48 sm:w-64">
            <Image
              src="/assets/CONGOLICIOUS-FEST-LOGO-cropped.png"
              alt="Congolicious Fest Logo"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* About Content */}
          <div className="text-white space-y-12 text-left sm:text-left max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
              À propos
            </h1>

            {/* Introduction */}
            <section className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                La République Démocratique du Congo, riche de sa diversité musicale et culinaire,
                connaît aujourd&apos;hui un véritable essor dans ces deux secteurs. Pour célébrer ce
                double héritage culturel, l&apos;association sans but lucratif <span className="font-bold">Congolicious Foundation</span> a
                lancé en 2024 le <span className="font-bold">Congolicious Fest</span>, le tout premier festival Food & Music du pays.
              </p>
              <p>
                Cet événement ambitieux a pour vocation de devenir un symbole de solidarité et de paix
                pour l&apos;ensemble du peuple congolais. Au-delà de sa dimension culturelle et économique,
                il porte un message social fort : les bénéfices générés sont entièrement reversés à
                l&apos;association afin de soutenir ses actions sur le terrain.
              </p>
            </section>

            {/* Contexte */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                «Kolia pona bomoko, ndule pona kimia»
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Cet événement annuel de quatre jours, organisé à Kinshasa, est bien plus qu&apos;un simple
                festival. Il s&apos;impose comme un rendez-vous incontournable réunissant mélomanes, gourmands,
                philanthropes et touristes du monde entier autour d&apos;une RDC solidaire, unie et pacifique.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="">
                  <h3 className="text-xl font-bold mb-3">Concerts</h3>
                  <p className="text-sm sm:text-base">
                    Des artistes talentueux de la scène musicale congolaise enflamment la scène
                    avec des performances d&apos;exception.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-3">Food Court</h3>
                  <p className="text-sm sm:text-base">
                    Les meilleurs restaurants, chefs et artisans culinaires mettent à l&apos;honneur
                    la richesse gastronomique du Congo.
                  </p>
                </div>
              </div>
              <p className=" pt-4 text-lg font-semibold">
                Entrée accessible dès <span className="text-2xl font-bold">3$</span>
              </p>
            </section>

            {/* Objectifs */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Nos Objectifs</h2>
              <div className="grid gap-4">
                <div className=" ">
                  <h3 className="font-bold text-lg mb-2">Rassembler par la culture</h3>
                  <p className="text-sm sm:text-base">
                    Créer un espace de rencontres et de célébration où chacun peut se retrouver
                    autour de valeurs communes.
                  </p>
                </div>
                <div className="  ">
                  <h3 className="font-bold text-lg mb-2">Valoriser les talents locaux</h3>
                  <p className="text-sm sm:text-base">
                    Mettre sous les projecteurs la richesse de la scène musicale et culinaire congolaise.
                  </p>
                </div>
                <div className="   ">
                  <h3 className="font-bold text-lg mb-2">Changer la narration sur la RDC</h3>
                  <p className="text-sm sm:text-base">
                    Porter un regard positif sur la nation et révéler au monde la créativité et
                    le dynamisme de la jeunesse congolaise.
                  </p>
                </div>
                <div className="  ">
                  <h3 className="font-bold text-lg mb-2">Soutenir la lutte contre la faim</h3>
                  <p className="text-sm sm:text-base">
                    Les recettes contribuent directement aux missions de la Congolicious Foundation
                    pour la sécurité alimentaire et l&apos;assistance aux communautés vulnérables.
                  </p>
                </div>
              </div>
            </section>

            {/* Event Details */}
            {/* <section className=" p-8 rounded-lg text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Rejoignez-nous</h2>
              <p className="text-xl sm:text-2xl font-bold">
                20-21 & 27-28 Décembre 2025
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                Triomphal Park, Kinshasa
              </p>
            </section> */}

            {/* Newsletter Section */}
            <section className=" p-8 rounded-lg space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold">Restez informé</h2>
                <p className="text-base sm:text-lg">
                  Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du festival
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
                >
                  S&apos;inscrire
                </button>
              </form>
            </section>
          </div>

          {/* Sponsor */}
          <div className="flex items-center gap-4 text-white text-sm pt-8">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/BASELINE-CONGOLICIOUS-FEST-WHITE-cropped.png"
                alt="Congolicious Fest Baseline"
                width={150}
                height={100}
                className="w-28 sm:w-32 md:w-36 h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
