
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Droplets,
  Sprout,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import { useWatering } from "../contexts/WateringContext";
import { plants } from "../data/plants";

function HistoryPage() {
  const { id } = useParams<{ id: string }>();
  const { waterings } = useWatering();

  const plant = plants.find((item) => item.id === Number(id));

  if (!plant) {
    return (
      <div className="flex min-h-screen bg-sand p-4 pl-24">
        <Sidebar activePage="collection" compact />

        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <Sprout size={42} className="mb-4 text-forest" />
          <h1 className="text-xl font-bold text-gray-900">
            Plante introuvable
          </h1>
          <Link
            to="/collection"
            className="mt-4 text-sm font-semibold text-forest hover:underline"
          >
            Retour à ma collection
          </Link>
        </main>
      </div>
    );
  }

  const history = waterings
    .filter((watering) => watering.plantId === plant.id)
    .sort(
      (a, b) =>
        new Date(b.wateredAt).getTime() -
        new Date(a.wateredAt).getTime()
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return {
      day: date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  return (
    <div className="flex min-h-screen gap-5 bg-sand p-4 pl-24">
      <Sidebar activePage="collection" compact />

      <main className="min-w-0 w-full">
        {/* En-tête */}
        <header className="mb-7">
          <Link
            to={`/plante/${plant.id}`}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-soft transition hover:text-forest"
          >
            <ArrowLeft size={17} />
            Retour à la fiche plante
          </Link>

          <div className="mb-1 flex items-center gap-2 text-xs font-medium text-forest">
            <Sprout size={15} />
            <span>MON UNIVERS VÉGÉTAL</span>
          </div>

          <h1 className="font-heading text-2xl font-bold text-gray-900">
            Historique d'entretien
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <img
              src={plant.image}
              alt={plant.name}
              className="h-12 w-12 rounded-xl object-cover"
            />

            <div>
              <p className="text-sm font-semibold text-gray-900">
                {plant.name}
              </p>
              <p className="text-xs italic text-gray-soft">
                {plant.scientificName}
              </p>
            </div>
          </div>
        </header>

        {/* Statistiques */}
        <section className="mb-6">
          <div className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-light">
              <Droplets size={22} className="text-forest" />
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">
                {history.length}
              </p>
              <p className="text-xs text-gray-soft">
                Arrosage{history.length > 1 ? "s" : ""} enregistré
                {history.length > 1 ? "s" : ""} pour cette plante
              </p>
            </div>
          </div>
        </section>

        {/* Liste historique */}
        <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="font-heading text-base font-bold text-gray-900">
              Mes interventions
            </h2>
            <p className="mt-1 text-xs text-gray-soft">
              Retrouvez les interventions effectuées sur cette plante.
            </p>
          </div>

          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl bg-sand px-5 py-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light">
                <CalendarDays size={27} className="text-forest" />
              </div>

              <h3 className="font-semibold text-gray-800">
                Aucun arrosage enregistré
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-soft">
                Les prochains arrosages de {plant.name} apparaîtront ici.
              </p>

              <Link
                to={`/plante/${plant.id}`}
                className="mt-4 text-sm font-semibold text-forest hover:underline"
              >
                Retourner à ma plante
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {history.map((item) => {
                const date = formatDate(item.wateredAt);

                return (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-light">
                      <Droplets size={20} className="text-forest" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Arrosage effectué
                      </p>
                      <p className="mt-1 text-xs text-gray-soft">
                        {plant.name}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-800">
                        {date.day}
                      </p>
                      <p className="mt-1 text-xs text-gray-soft">
                        {date.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HistoryPage;
