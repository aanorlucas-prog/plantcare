
import {
  Leaf,
  House,
  Star,
  Droplets,
  Sprout,
  ArrowRight,
  Plus,
  Shovel,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";

const statistics = [
  {
    label: "Plantes",
    value: 8,
    Icon: Leaf,
    color: "text-forest",
    background: "bg-sage-light",
  },
  {
    label: "Emplacements",
    value: 3,
    Icon: House,
    color: "text-forest",
    background: "bg-sage-light",
  },
  {
    label: "À arroser",
    value: 2,
    Icon: Droplets,
    color: "text-blue-600",
    background: "bg-blue-50",
  },
  {
    label: "Bientôt",
    value: 2,
    Icon: Star,
    color: "text-terracotta",
    background: "bg-orange-50",
  },
];

const upcomingTasks = [
  {
    name: "Monstera deliciosa",
    date: "Aujourd'hui",
    status: "À arroser",
    statusStyle: "bg-red-100 text-red-700",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=120&h=120&fit=crop",
  },
  {
    name: "Ficus elastica",
    date: "Demain",
    status: "Bientôt",
    statusStyle: "bg-orange-100 text-orange-700",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=120&h=120&fit=crop",
  },
  {
    name: "Pothos",
    date: "Dans 3 jours",
    status: "À jour",
    statusStyle: "bg-green-100 text-green-800",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=120&h=120&fit=crop",
  },
];

const recentActivities = [
  {
    label: "Fertilisation",
    plant: "Monstera deliciosa",
    date: "Le 12 avr. 2025",
    Icon: Sprout,
    color: "text-forest",
  },
  {
    label: "Arrosage",
    plant: "Pothos",
    date: "Le 10 avr. 2025",
    Icon: Droplets,
    color: "text-blue-600",
  },
  {
    label: "Rempotage",
    plant: "Ficus elastica",
    date: "Le 5 avr. 2025",
    Icon: Shovel,
    color: "text-terracotta",
  },
];

function DashboardPage() {
  return (
    <div className="flex min-h-screen gap-5 bg-sand p-4 pl-32">
      <Sidebar activePage="dashboard" />

      <main className="relative min-w-0 w-full ">
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-bold text-gray-900">
            Bonjour ! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-soft">
            Voici un aperçu de votre collection
          </p>
        </header>

        {/* Statistiques */}
        <section className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {statistics.map(({ label, value, Icon, color, background }) => (
            <article
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${background}`}
              >
                <Icon size={23} className={color} />
              </div>

              <span className="text-2xl font-bold text-gray-900">
                {value}
              </span>

              <span className="mt-0.5 text-xs text-gray-soft">
                {label}
              </span>
            </article>
          ))}
        </section>

        {/* Prochaines échéances et dernières interventions */}
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
            <div className="flex items-center justify-between bg-sage-light px-4 py-3">
              <h2 className="font-heading text-sm font-bold text-gray-900">
                Prochaines échéances
              </h2>

              <a
                href="/collection"
                className="flex items-center gap-1 text-xs font-medium text-forest hover:text-forest-dark"
              >
                Voir tout <ArrowRight size={13} />
              </a>
            </div>

            <div className="divide-y divide-gray-100 px-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.name}
                  className="flex items-center gap-3 py-3"
                >
                  <img
                    src={task.image}
                    alt={task.name}
                    className="h-10 w-10 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-gray-900">
                      {task.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-soft">
                      {task.date}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${task.statusStyle}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
            <div className="flex items-center justify-between bg-sand px-4 py-3">
              <h2 className="font-heading text-sm font-bold text-gray-900">
                Dernières interventions
              </h2>

              <a
                href="/collection"
                className="flex items-center gap-1 text-xs font-medium text-forest hover:text-forest-dark"
              >
                Voir tout <ArrowRight size={13} />
              </a>
            </div>

            <div className="divide-y divide-gray-100 px-3">
              {recentActivities.map(
                ({ label, plant, date, Icon, color }) => (
                  <div
                    key={`${label}-${plant}`}
                    className="flex items-center gap-3 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage-light">
                      <Icon size={19} className={color} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-gray-900">
                        {label} – {plant}
                      </p>
                      <p className="mt-1 text-xs text-gray-soft">
                        {date}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </article>
        </section>

        {/* Bouton d'ajout */}
        <div className="mt-5">
          <a
            href="/ajouter"
            className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-dark"
          >
            <Plus size={19} />
            Ajouter une plante
          </a>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
