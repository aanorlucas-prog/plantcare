import { CalendarDays, Droplets } from "lucide-react";
import { useWatering } from "../../contexts/WateringContext";

interface WateringHistoryProps {
  plantId: number;
}

export default function WateringHistory({
  plantId,
}: WateringHistoryProps) {
  const { waterings } = useWatering();

  const plantWaterings = waterings
    .filter((watering) => watering.plantId === plantId)
    .sort(
      (a, b) =>
        new Date(b.wateredAt).getTime() -
        new Date(a.wateredAt).getTime()
    );

  return (
    <section className="rounded-2xl border border-[#e8eee5] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
          <CalendarDays size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            Historique d'arrosage
          </h3>
          <p className="text-xs text-gray-soft">
            {plantWaterings.length} arrosage
            {plantWaterings.length > 1 ? "s" : ""} enregistré
            {plantWaterings.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {plantWaterings.length === 0 ? (
        <div className="rounded-xl bg-sand px-4 py-6 text-center">
          <Droplets
            size={25}
            className="mx-auto mb-2 text-gray-soft/60"
          />
          <p className="text-sm font-medium text-gray-700">
            Aucun arrosage enregistré
          </p>
          <p className="mt-1 text-xs text-gray-soft">
            Les prochains arrosages apparaîtront ici.
          </p>
        </div>
      ) : (
        <div className="space-y-0">
          {plantWaterings.map((watering, index) => {
            const date = new Date(watering.wateredAt);

            return (
              <div
                key={watering.id}
                className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-0"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
                  <Droplets size={17} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {index === 0 ? "Dernier arrosage" : "Arrosage"}
                  </p>
                  <p className="text-xs text-gray-soft">
                    {date.toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <span className="text-xs text-gray-soft">
                  {date.toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}