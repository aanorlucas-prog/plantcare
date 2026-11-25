
import {
  Leaf,
  Droplets,
  Clock,
  Plus,
  Sprout,
  Search,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import PlantCard, {
  // type Plant,
} from "../components/plants/PlantCard";
import { plants } from "../data/plants";

function PlantsPage() {
  const wateringCount = plants.filter(
    (plant) => plant.wateringStatus === "needed"
  ).length;

  const upcomingCount = plants.filter(
    (plant) => plant.wateringStatus === "upcoming"
  ).length;

  return (
    <div className="flex min-h-screen gap-5 bg-sand p-4 pl-24">

      {/* Navigation */}
      <Sidebar activePage="collection" compact />

      <main className="min-w-0 w-full">

        {/* En-tête */}
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-medium text-forest">
              <Sprout size={15} />
              <span>MON UNIVERS VÉGÉTAL</span>
            </div>

            <h1 className="font-heading text-2xl font-bold text-gray-900">
              Ma collection
            </h1>

            <p className="mt-1 text-sm text-gray-soft">
              Retrouvez et prenez soin de toutes vos plantes.
            </p>
          </div>

          <a
            href="/ajouter"
            className="inline-flex items-center gap-2 rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-dark"
          >
            <Plus size={18} />
            Ajouter une plante
          </a>
        </header>

        {/* Statistiques */}
        <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-light">
              <Leaf size={22} className="text-forest" />
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">
                {plants.length}
              </p>
              <p className="text-xs text-gray-soft">Plantes dans ma collection</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
              <Droplets size={22} className="text-red-500" />
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">
                {wateringCount}
              </p>
              <p className="text-xs text-gray-soft">À arroser aujourd'hui</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <Clock size={22} className="text-terracotta" />
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">
                {upcomingCount}
              </p>
              <p className="text-xs text-gray-soft">Arrosages à venir</p>
            </div>
          </div>
        </section>

        {/* Barre de recherche et organisation */}
        <section className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-base font-bold text-gray-900">
              Toutes mes plantes
            </h2>
            <p className="mt-0.5 text-xs text-gray-soft">
              {plants.length} plantes enregistrées
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-soft">
            <Search size={16} />
            <span>Ma collection</span>
          </div>
        </section>

        {/* Grille des plantes */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>

      </main>
    </div>
  );
}

export default PlantsPage;
