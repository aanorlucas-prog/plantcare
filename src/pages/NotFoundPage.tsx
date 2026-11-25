
import { Link } from "react-router-dom";
import { ArrowLeft, House, Sprout } from "lucide-react";
import Sidebar from "../components/layout/Sidebar";
import plantImg from "../assets/plant-sidebar-2.png";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-sand">
      <Sidebar activePage="" compact />

      <main className="min-h-screen pl-[88px] md:pl-[104px] flex items-center justify-center p-6">
        <section className="relative w-full max-w-5xl min-h-[520px] overflow-hidden rounded-[2rem] bg-white shadow-sm border border-[#e8eee5] flex items-center">

          {/* Décoration végétale en transparence */}
          <img
            src={plantImg}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none select-none
              absolute -right-20 -bottom-16
              w-[480px] max-w-none
              opacity-20
            "
          />

          {/* Contenu */}
          <div className="relative z-10 w-full max-w-xl px-8 py-16 sm:px-14">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light text-forest">
              <Sprout size={30} strokeWidth={1.7} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Oups, petite erreur de parcours
            </p>

            <h1 className="mb-5 text-7xl font-bold tracking-tight text-forest-dark sm:text-8xl">
              404
            </h1>

            <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">
              Cette page s'est égarée...
            </h2>

            <p className="mb-9 max-w-md text-base leading-relaxed text-gray-soft">
              On dirait que cette page a pris racine ailleurs.
              Pas d'inquiétude, vos plantes sont toujours là !
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="
                  inline-flex items-center gap-2 rounded-xl
                  bg-forest px-5 py-3
                  text-sm font-semibold text-white
                  shadow-sm transition hover:bg-forest-dark
                "
              >
                <House size={17} />
                Retour au tableau de bord
              </Link>

              <Link
                to="/collection"
                className="
                  inline-flex items-center gap-2 rounded-xl
                  border border-[#dce8dc] px-5 py-3
                  text-sm font-semibold text-forest-dark
                  transition hover:bg-sage-light
                "
              >
                <ArrowLeft size={17} />
                Ma collection
              </Link>
            </div>
          </div>

          {/* Petit numéro décoratif */}
          <span className="absolute bottom-6 right-8 text-xs font-medium tracking-widest text-forest/40">
            PLANTCARE · 404
          </span>
        </section>
      </main>
    </div>
  );
}
