import { Droplets, Check } from "lucide-react";
import { useWatering } from "../../contexts/WateringContext";

interface WateringButtonProps {
  plantId: number;
  compact?: boolean;
}

export default function WateringButton({
  plantId,
  compact = false,
}: WateringButtonProps) {
  const { addWatering, hasWateredToday } = useWatering();

  const alreadyWatered = hasWateredToday(plantId);

  return (
    <button
      type="button"
      disabled={alreadyWatered}
      onClick={() => addWatering(plantId)}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl
        font-semibold transition-all duration-200
        ${
          alreadyWatered
            ? "cursor-not-allowed bg-sage-light text-forest/70"
            : "bg-forest text-white shadow-sm hover:bg-forest-dark active:scale-[0.98]"
        }
        ${compact ? "p-2.5 text-sm" : "px-4 py-3 text-sm"}
      `}
    >
      {alreadyWatered ? (
        <Check size={compact ? 17 : 18} />
      ) : (
        <Droplets size={compact ? 17 : 18} />
      )}

      {!compact && (
        <span>
          {alreadyWatered ? "Déjà arrosée aujourd'hui" : "Arrosée aujourd'hui"}
        </span>
      )}
    </button>
  );
}