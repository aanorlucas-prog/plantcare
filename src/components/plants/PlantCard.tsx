
import {
  Droplets,
  MapPin,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import WateringButton from "./WateringButton";
import { Link } from "react-router-dom";
import type { Plant, WateringStatus } from "../../types/plant";




interface PlantCardProps {
  plant: Plant;
}
const statusStyles: Record<
  WateringStatus,
  { label: string; className: string; dot: string }
> = {
  "up-to-date": {
    label: "À jour",
    className: "bg-green-100 text-green-800",
    dot: "bg-green-500",
  },
  upcoming: {
    label: "Bientôt",
    className: "bg-orange-100 text-orange-800",
    dot: "bg-orange-500",
  },
  needed: {
    label: "À arroser",
    className: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
}; 


function PlantCard({ plant }: PlantCardProps) {
 
  const status = statusStyles[plant.wateringStatus];

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Photo */}
      <div className="relative h-48 overflow-hidden bg-sage-light">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge d'arrosage */}
        <div
          className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${status.className}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </div>

        {/* Bouton détail */}
        <Link to={`/plante/${plant.id}`}
          aria-label={`Voir les détails de ${plant.name}`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest shadow-sm transition hover:bg-white"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Informations */}
      <div className="p-4">

        <div className="mb-3">
          <h3 className="font-heading text-base font-bold text-gray-900">
            {plant.name}
          </h3>
          <p className="mt-0.5 text-xs italic text-gray-soft">
            {plant.scientificName}
          </p>
        </div>

        {/* Emplacement */}
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-soft">
          <MapPin size={15} className="shrink-0 text-sage" />
          <span>{plant.location}</span>
        </div>

        <div className="my-3 border-t border-gray-100" />

        {/* Entretien */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-soft">
            <Droplets size={15} className="shrink-0 text-blue-500" />
            <span>{plant.wateringLabel}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-soft">
            <Sun size={15} className="shrink-0 text-terracotta" />
            <span>{plant.light}</span>
          </div>
        </div>

        <p className="mt-3 text-xs font-medium text-forest">
          {plant.nextWatering}
        </p>
        <div className="pt-2">

        <WateringButton plantId={plant.id} compact  />
        </div>
      </div>
    </article>
  );
}

export default PlantCard;
