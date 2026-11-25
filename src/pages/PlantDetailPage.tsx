/* eslint-disable react-hooks/rules-of-hooks */

import {
  ArrowLeft,
  Droplets,
  Sun,
  Thermometer,
  Cloud,
  MapPin,
   Shovel,
  Scissors,
  CalendarDays,
  Clock,
  Sprout,
  Pencil,
  Leaf,
  CheckCircle2,
  AlertCircle,
  Trash2,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import WateringButton from "../components/plants/WateringButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { plants } from "../data/plants";
import { useState } from "react";
// Données temporaires


const statusStyles = {
  "up-to-date": {
    label: "À jour",
    color: "bg-green-100 text-green-800",
    Icon: CheckCircle2,
  },
  upcoming: {
    label: "Bientôt à arroser",
    color: "bg-orange-100 text-orange-800",
    Icon: Clock,
  },
  needed: {
    label: "À arroser",
    color: "bg-red-100 text-red-700",
    Icon: AlertCircle,
  },
};

function PlantDetailPage() {
  const { id } = useParams<{ id: string }>();

  const plant = plants.find(
    (item) => item.id === Number(id)
  );

  if (!plant) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Plante introuvable
          </h1>

          <Link
            to="/collection"
            className="mt-4 inline-block text-sm font-semibold text-forest hover:underline"
          >
            Retour à ma collection
          </Link>
        </div>
      </div>
    );
  }
const navigate = useNavigate();
const [showToast, setShowToast] = useState(false);

const handleDelete = () => {
  const confirmed = window.confirm(
    `Voulez-vous vraiment supprimer ${plant.name} ? Cette action est irréversible.`
  );

  if (!confirmed) return;

  const savedPlants = localStorage.getItem("plantcare-plants");

  let currentPlants = plants;

  if (savedPlants) {
    try {
      currentPlants = JSON.parse(savedPlants);
    } catch {
      currentPlants = plants;
    }
  }

  const updatedPlants = currentPlants.filter(
    (item) => item.id !== plant.id
  );

  localStorage.setItem("plantcare-plants", JSON.stringify(updatedPlants));

  setShowToast(true);

  setTimeout(() => {
    navigate("/collection");
  }, 1500);
};
  const status = statusStyles[plant.wateringStatus];
  const StatusIcon = status.Icon;
const history = [
  {
    type: "watering",
    label: "Arrosage",
    description: "La plante a été arrosée",
    date: plant.lastWatering,
    Icon: Droplets,
    background: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    type: "fertilizing",
    label: "Fertilisation",
    description: "Ajout d'engrais liquide",
    date: "12 mars 2025",
    Icon: Sprout,
    background: "bg-green-50",
    color: "text-green-500",
  },
  {
    type: "repotting",
    label: "Rempotage",
    description: "Changement de pot et de substrat",
    date: "2 février 2025",
    Icon: Shovel,
    background: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    type: "pruning",
    label: "Taille",
    description: "Retrait des feuilles abîmées",
    date: "15 janvier 2025",
    Icon: Scissors,
    background: "bg-purple-50",
    color: "text-purple-500",
  },
];
  return (
    <div className="flex min-h-screen gap-5 bg-sand p-4 pl-24">

      {/* Navigation */}
      <Sidebar activePage="collection" compact />

      <main className="min-w-0 w-full">

        {/* Retour et titre */}
        <div className="mb-6">
          <a
            href="/collection"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-soft transition hover:text-forest"
          >
            <ArrowLeft size={17} />
            Retour à ma collection
          </a>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest">
                Ma collection / Fiche plante
              </p>

              <h1 className="font-heading text-2xl font-bold text-gray-900">
                {plant.name}
              </h1>

              <p className="mt-1 text-sm italic text-gray-soft">
                {plant.scientificName}
              </p>
            </div>

          <div className="flex flex-wrap items-center gap-2">
  <Link
    to={`/plante/${plant.id}/modifier`}
    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-forest hover:text-forest"
  >
    <Pencil size={16} />
    Modifier
  </Link>

  <button
    type="button"
    onClick={handleDelete}
    className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:border-red-300 hover:bg-red-50"
  >
    <Trash2 size={16} />
    Supprimer
  </button>
</div>
          </div>
        </div>

        {/* Présentation principale */}
        <section className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-2">

          {/* Photo */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-sage-light shadow-sm">
            <img
              src={plant.image}
              alt={plant.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold shadow-sm ${status.color}`}>
                <StatusIcon size={15} />
                {status.label}
              </span>
            </div>
          </div>

          {/* Informations générales */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-soft">
                À propos de ma plante
              </p>

              <p className="text-sm leading-6 text-gray-600">
                {plant.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-sand p-3">
                <div className="mb-2 flex items-center gap-2 text-gray-soft">
                  <MapPin size={16} className="text-forest" />
                  <span className="text-xs">Emplacement</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {plant.location}
                </p>
              </div>

              <div className="rounded-xl bg-sand p-3">
                <div className="mb-2 flex items-center gap-2 text-gray-soft">
                  <CalendarDays size={16} className="text-forest" />
                  <span className="text-xs">Acquise le</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {plant.acquired}
                </p>
              </div>
            </div>

            <div className="mt-auto rounded-xl bg-sage-light/70 p-3">
              <div className="mb-1 flex items-center gap-2 text-forest">
                <Leaf size={16} />
                <span className="text-xs font-semibold">
                  Mes notes
                </span>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                {plant.notes}
              </p>
            </div>
          </div>
        </section>

        {/* Entretien */}
        <section className="mb-5">
          <div className="mb-3">
            <h2 className="font-heading text-base font-bold text-gray-900">
              Conditions d'entretien
            </h2>
            <p className="mt-1 text-xs text-gray-soft">
              Les conditions idéales pour garder votre plante en bonne santé.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">

            <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Droplets size={21} className="text-blue-600" />
              </div>
              <p className="text-xs text-gray-soft">Arrosage</p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {plant.watering}
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <Sun size={21} className="text-terracotta" />
              </div>
              <p className="text-xs text-gray-soft">Luminosité</p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {plant.light}
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                <Cloud size={21} className="text-sky-600" />
              </div>
              <p className="text-xs text-gray-soft">Humidité</p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {plant.humidity}
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <Thermometer size={21} className="text-red-500" />
              </div>
              <p className="text-xs text-gray-soft">Température</p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {plant.temperature}
              </p>
            </div>
          </div>
        </section>

        {/* Prochain arrosage */}
        <section className="mb-5 rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Droplets size={24} className="text-red-500" />
              </div>

              <div>
                <h2 className="font-heading text-sm font-bold text-gray-900">
                  Prochain arrosage
                </h2>
                <p className="mt-1 text-xs text-gray-soft">
                  Dernier arrosage : {plant.lastWatering}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-sm font-bold text-red-600">
                {plant.nextWatering}
              </p>

              <WateringButton plantId={plant.id} />
            </div>
          </div>
        </section>

        {/* Historique */}
        <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-heading text-base font-bold text-gray-900">
                Historique d'entretien
              </h2>
              <p className="mt-1 text-xs text-gray-soft">
                Les dernières interventions sur cette plante.
              </p>
            </div>

           <Link
               to={`/plante/${plant.id}/historique`}
               className="text-xs font-semibold text-forest hover:text-forest-dark"
               >
                Voir tout
           </Link>
          </div>

         <div className="divide-y divide-gray-100">
  {history.map((item) => {
    const Icon = item.Icon;

    return (
      <div
        key={item.type}
        className="flex items-center gap-3 py-3"
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.background}`}
        >
          <Icon size={19} className={item.color} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            {item.label}
          </p>
          <p className="mt-0.5 text-xs text-gray-soft">
            {item.description}
          </p>
        </div>

        <span className="shrink-0 text-xs text-gray-soft">
          {item.date}
        </span>
      </div>
    );
  })}
</div>
        </section>
{showToast && (
  <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl border border-green-100 bg-white px-5 py-4 shadow-lg animate-in slide-in-from-bottom-3 fade-in duration-300">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
      <CheckCircle2 size={20} className="text-green-600" />
    </div>

    <div>
      <p className="text-sm font-semibold text-gray-900">
        Plante supprimée
      </p>
      <p className="mt-0.5 text-xs text-gray-soft">
        {plant.name} a été retirée de votre collection.
      </p>
    </div>
  </div>
)}
      </main>
      
    </div>
  );
}

export default PlantDetailPage;
