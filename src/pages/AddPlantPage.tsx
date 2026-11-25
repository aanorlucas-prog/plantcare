
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowLeft,
  Camera,
  ImagePlus,
  Search,
  Leaf,
  MapPin,
  Sun,
  Droplets,
  CalendarDays,
  X,
  Sparkles,
} from "lucide-react";
import Sidebar from "../components/layout/Sidebar";

export default function AddPlantPage() {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [location, setLocation] = useState("");
  const [light, setLight] = useState("Lumière indirecte");
  const [watering, setWatering] = useState("1 fois par semaine");
  const [nextWatering, setNextWatering] = useState("");
  const [notes, setNotes] = useState("");

  const [identificationStatus, setIdentificationStatus] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setIdentificationStatus("Merci de sélectionner une image.");
      return;
    }

    setImageFile(file);
    setIdentificationStatus("");
    setFormStatus("");

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setImageFile(null);
    setIdentificationStatus("");
  };

  const handleIdentification = () => {
    if (!imageFile) return;

    // FUTURE API INTEGRATION:
    // 1. Envoyer imageFile à l'API d'identification (ex : Pl@ntNet).
    // 2. Récupérer le nom commun et le nom scientifique.
    // 3. Préremplir les champs name et scientificName.
    // 4. Afficher les propositions à l'utilisateur.

    setIdentificationStatus(
      "La photo est prête ! Il reste à connecter le service d'identification."
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // FUTURE BACKEND INTEGRATION:
    // Envoyer les informations de la plante et sa photo à l'API PlantCare.

    setFormStatus(
      "Le formulaire est prêt. La sauvegarde dans ta collection sera ajoutée avec le backend."
    );
  };

  return (
    <div className="min-h-screen bg-sand">
      <Sidebar activePage="add" compact />

      <main className="min-h-screen px-5 py-8 pl-[88px] md:px-8 md:pl-[104px] lg:px-12">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-8">
            <a
              href="/collection"
              className="mb-5 inline-flex items-center gap-2 text-sm text-gray-soft transition hover:text-forest"
            >
              <ArrowLeft size={17} />
              Retour à ma collection
            </a>

            <div>
              <p className="mb-2 text-sm font-medium text-forest">
                MA COLLECTION
              </p>

              <h1 className="text-3xl font-bold text-gray-800">
                Ajouter une plante
              </h1>

              <p className="mt-2 text-sm text-gray-soft">
                Ajoute une nouvelle plante et renseigne ses besoins pour
                prendre soin d'elle.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">

              {/* Photo et identification */}
              <section className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-5">
                  <div className="flex items-center gap-2">
                    <Camera size={19} className="text-forest" />
                    <h2 className="font-semibold text-gray-800">
                      Photo de ta plante
                    </h2>
                  </div>

                  <p className="mt-1 text-xs text-gray-soft">
                    Une photo nette des feuilles aidera à identifier ta plante.
                  </p>
                </div>

                {/* Image preview */}
                {image ? (
                  <div className="relative overflow-hidden rounded-xl bg-sage-light">
                    <img
                      src={image}
                      alt="Aperçu de la plante"
                      className="h-64 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-600 shadow-md transition hover:text-red-500"
                      aria-label="Supprimer la photo"
                    >
                      <X size={17} />
                    </button>
                  </div>
                ) : (
                  <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-sage bg-sage-light/40 p-6 text-center transition hover:border-forest hover:bg-sage-light/70">
                    <div className="mb-4 rounded-full bg-white p-4 text-forest shadow-sm">
                      <ImagePlus size={27} />
                    </div>

                    <span className="font-medium text-gray-700">
                      Ajouter une photo
                    </span>

                    <span className="mt-2 text-xs text-gray-soft">
                      JPG, PNG ou WEBP
                    </span>

                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}

                {/* Identification */}
                <div className="mt-5 rounded-xl border border-sage/50 bg-[#F8FAF6] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles size={17} className="text-forest" />
                    <h3 className="text-sm font-semibold text-gray-800">
                      Identification automatique
                    </h3>
                  </div>

                  <p className="mb-4 text-xs leading-relaxed text-gray-soft">
                    Tu ne connais pas le nom de ta plante ? Une future
                    fonctionnalité pourra l'identifier à partir de ta photo.
                  </p>

                  <button
                    type="button"
                    onClick={handleIdentification}
                    disabled={!imageFile}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-4 py-3 text-sm font-medium text-white transition hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Search size={16} />
                    Identifier ma plante
                  </button>

                  {identificationStatus && (
                    <p className="mt-3 text-xs leading-relaxed text-forest">
                      {identificationStatus}
                    </p>
                  )}
                </div>
              </section>

              {/* Informations de la plante */}
              <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-6 flex items-center gap-2">
                  <Leaf size={19} className="text-forest" />
                  <h2 className="font-semibold text-gray-800">
                    Informations générales
                  </h2>
                </div>

                <div className="space-y-5">

                  {/* Nom */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Nom de la plante *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex : Monstera deliciosa"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                    />
                  </div>

                  {/* Nom scientifique */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Nom scientifique
                    </label>
                    <input
                      type="text"
                      value={scientificName}
                      onChange={(e) => setScientificName(e.target.value)}
                      placeholder="Ex : Monstera deliciosa"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                    />
                    <p className="mt-1 text-xs text-gray-soft">
                      Pourra être complété automatiquement après identification.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <h3 className="mb-4 text-sm font-semibold text-gray-800">
                      Conditions de culture
                    </h3>

                    {/* Emplacement */}
                    <div className="mb-5">
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                        <MapPin size={16} className="text-forest" />
                        Emplacement
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Ex : Salon, près de la fenêtre"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                      />
                    </div>

                    {/* Lumière */}
                    <div className="mb-5">
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Sun size={16} className="text-forest" />
                        Exposition lumineuse
                      </label>
                      <select
                        value={light}
                        onChange={(e) => setLight(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-forest"
                      >
                        <option>Lumière indirecte</option>
                        <option>Lumière vive indirecte</option>
                        <option>Plein soleil</option>
                        <option>Mi-ombre</option>
                        <option>Ombre</option>
                      </select>
                    </div>

                    {/* Arrosage */}
                    <div className="mb-5">
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Droplets size={16} className="text-forest" />
                        Fréquence d'arrosage
                      </label>
                      <select
                        value={watering}
                        onChange={(e) => setWatering(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-forest"
                      >
                        <option>Plusieurs fois par semaine</option>
                        <option>1 fois par semaine</option>
                        <option>Tous les 10 à 15 jours</option>
                        <option>Toutes les 2 à 3 semaines</option>
                        <option>Selon le séchage du substrat</option>
                      </select>
                    </div>

                    {/* Prochain arrosage */}
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CalendarDays size={16} className="text-forest" />
                        Prochain arrosage
                      </label>
                      <input
                        type="date"
                        value={nextWatering}
                        onChange={(e) => setNextWatering(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-forest"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="border-t border-gray-100 pt-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Notes personnelles
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Particularités, conseils, date d'achat..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col items-end gap-3">
              {formStatus && (
                <p className="w-full rounded-xl bg-sage-light p-3 text-sm text-forest">
                  {formStatus}
                </p>
              )}

              <div className="flex w-full justify-end gap-3">
                <a
                  href="/collection"
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  Annuler
                </a>

                <button
                  type="submit"
                  className="rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-dark"
                >
                  Ajouter à ma collection
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
