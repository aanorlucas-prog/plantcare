
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowLeft,
  Save,
  Leaf,
  MapPin,
  CalendarDays,
  Droplets,
  Sun,
  Cloud,
  Thermometer,
  Image,
  FileText,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import { plants } from "../data/plants";
import type { Plant } from "../types/plant";

export default function EditPlantPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const plant = plants.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState<Plant | null>(() => {
    if (!plant) return null;

    const savedPlants = localStorage.getItem("plantcare-plants");

    if (savedPlants) {
      try {
        const parsedPlants: Plant[] = JSON.parse(savedPlants);
        return parsedPlants.find((item) => item.id === Number(id)) ?? plant;
      } catch {
        return plant;
      }
    }

    return plant;
  });

  if (!plant || !formData) {
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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) =>
      previous ? { ...previous, [name]: value } : previous
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const savedPlants = localStorage.getItem("plantcare-plants");

    let currentPlants: Plant[] = plants;

    if (savedPlants) {
      try {
        currentPlants = JSON.parse(savedPlants);
      } catch {
        currentPlants = plants;
      }
    }

    const updatedPlants = currentPlants.map((item) =>
      item.id === formData.id ? formData : item
    );

    localStorage.setItem("plantcare-plants", JSON.stringify(updatedPlants));

    navigate(`/plante/${formData.id}`);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10";

  const labelClass =
    "mb-1.5 block text-xs font-semibold text-gray-700";

  return (
    <div className="flex min-h-screen gap-5 bg-sand p-4 pl-24">
      <Sidebar activePage="collection" compact />

      <main className="min-w-0 w-full">
        {/* En-tête */}
        <div className="mb-6">
          <Link
            to={`/plante/${plant.id}`}
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-soft transition hover:text-forest"
          >
            <ArrowLeft size={17} />
            Retour à la fiche plante
          </Link>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest">
              Ma collection / {plant.name}
            </p>
            <h1 className="font-heading text-2xl font-bold text-gray-900">
              Modifier ma plante
            </h1>
            <p className="mt-1 text-sm text-gray-soft">
              Modifiez les informations et les conditions d'entretien de votre plante.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Informations générales */}
          <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-light">
                <Leaf size={19} className="text-forest" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-gray-900">
                  Informations générales
                </h2>
                <p className="text-xs text-gray-soft">
                  Identité de votre plante
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nom de la plante *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="scientificName" className={labelClass}>
                  Nom scientifique
                </label>
                <input
                  id="scientificName"
                  name="scientificName"
                  value={formData.scientificName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="location" className={labelClass}>
                  <MapPin size={13} className="mr-1 inline" />
                  Emplacement
                </label>
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : Salon"
                />
              </div>

              <div>
                <label htmlFor="acquired" className={labelClass}>
                  <CalendarDays size={13} className="mr-1 inline" />
                  Date d'acquisition
                </label>
                <input
                  id="acquired"
                  name="acquired"
                  value={formData.acquired}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : 15 janvier 2025"
                />
              </div>
            </div>
          </section>

          {/* Photo */}
          <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
                <Image size={19} className="text-terracotta" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-gray-900">
                  Photo de la plante
                </h2>
                <p className="text-xs text-gray-soft">
                  Modifiez l'image affichée dans votre collection
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[180px_1fr]">
              <div className="h-36 overflow-hidden rounded-xl bg-sage-light">
                <img
                  src={formData.image}
                  alt={formData.name}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
              </div>

              <div>
                <label htmlFor="image" className={labelClass}>
                  URL de l'image
                </label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="https://..."
                />
                <p className="mt-2 text-xs text-gray-soft">
                  Collez l'adresse d'une image accessible en ligne.
                </p>
              </div>
            </div>
          </section>

          {/* Entretien */}
          <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <Droplets size={19} className="text-blue-600" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-gray-900">
                  Conditions d'entretien
                </h2>
                <p className="text-xs text-gray-soft">
                  Les besoins de votre plante
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="watering" className={labelClass}>
                  <Droplets size={13} className="mr-1 inline text-blue-500" />
                  Fréquence d'arrosage
                </label>
                <input
                  id="watering"
                  name="watering"
                  value={formData.watering}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : Tous les 7 à 10 jours"
                />
              </div>

              <div>
                <label htmlFor="light" className={labelClass}>
                  <Sun size={13} className="mr-1 inline text-terracotta" />
                  Luminosité
                </label>
                <select
                  id="light"
                  name="light"
                  value={formData.light}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Indirecte">Lumière indirecte</option>
                  <option value="Lumineuse">Lumière lumineuse</option>
                  <option value="Modérée">Lumière modérée</option>
                  <option value="Tamisée">Lumière tamisée</option>
                  <option value="Directe">Soleil direct</option>
                </select>
              </div>

              <div>
                <label htmlFor="humidity" className={labelClass}>
                  <Cloud size={13} className="mr-1 inline text-sky-500" />
                  Humidité
                </label>
                <input
                  id="humidity"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : 60 à 80 %"
                />
              </div>

              <div>
                <label htmlFor="temperature" className={labelClass}>
                  <Thermometer size={13} className="mr-1 inline text-red-500" />
                  Température
                </label>
                <input
                  id="temperature"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : 18 à 27 °C"
                />
              </div>

              <div>
                <label htmlFor="wateringLabel" className={labelClass}>
                  Libellé d'arrosage de la collection
                </label>
                <input
                  id="wateringLabel"
                  name="wateringLabel"
                  value={formData.wateringLabel}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex : Tous les 7 jours"
                />
              </div>

              <div>
                <label htmlFor="wateringStatus" className={labelClass}>
                  Statut d'arrosage
                </label>
                <select
                  id="wateringStatus"
                  name="wateringStatus"
                  value={formData.wateringStatus}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="up-to-date">À jour</option>
                  <option value="upcoming">Bientôt à arroser</option>
                  <option value="needed">À arroser</option>
                </select>
              </div>
            </div>
          </section>

          {/* Description et notes */}
          <section className="rounded-2xl border border-white bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-light">
                <FileText size={19} className="text-forest" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-gray-900">
                  Description et notes
                </h2>
                <p className="text-xs text-gray-soft">
                  Informations complémentaires
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="description" className={labelClass}>
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-y`}
                  placeholder="Présentez votre plante..."
                />
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  Mes notes personnelles
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-y`}
                  placeholder="Ajoutez vos observations..."
                />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-wrap justify-end gap-3 pb-4">
            <Link
              to={`/plante/${plant.id}`}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Annuler
            </Link>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-dark"
            >
              <Save size={17} />
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
