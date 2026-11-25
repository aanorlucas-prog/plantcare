/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Watering } from "../types/watering";

interface WateringContextType {
  waterings: Watering[];
  addWatering: (plantId: number) => void;
  undoWatering: (wateringId: string) => void;
  hasWateredToday: (plantId: number) => boolean;
}

const WateringContext = createContext<WateringContextType | undefined>(
  undefined
);

const STORAGE_KEY = "plantcare-waterings";

export function WateringProvider({ children }: { children: ReactNode }) {
  const [waterings, setWaterings] = useState<Watering[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast actuellement affiché
  const [toast, setToast] = useState<{
    wateringId: string;
    message: string;
  } | null>(null);

  // Sauvegarde automatique des arrosages
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(waterings));
  }, [waterings]);

  // Fermeture automatique du toast après 4 secondes
  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const hasWateredToday = (plantId: number) => {
    const today = new Date().toDateString();

    return waterings.some(
      (watering) =>
        watering.plantId === plantId &&
        new Date(watering.wateredAt).toDateString() === today
    );
  };

  const addWatering = (plantId: number) => {
    if (hasWateredToday(plantId)) return;

    const newWatering: Watering = {
      id: crypto.randomUUID(),
      plantId,
      wateredAt: new Date().toISOString(),
    };

    setWaterings((previous) => [...previous, newWatering]);

    setToast({
      wateringId: newWatering.id,
      message: "Arrosage enregistré !",
    });
  };

  const undoWatering = (wateringId: string) => {
    setWaterings((previous) =>
      previous.filter((watering) => watering.id !== wateringId)
    );

    setToast(null);
  };

  return (
    <WateringContext.Provider
      value={{
        waterings,
        addWatering,
        undoWatering,
        hasWateredToday,
      }}
    >
      {children}

      {/* Toast global */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[100] flex w-[calc(100%-3rem)] max-w-sm items-center gap-3 rounded-2xl border border-[#dce8dc] bg-white px-4 py-3 shadow-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest">
            <span className="text-lg">✓</span>
          </div>

          <p className="flex-1 text-sm font-medium text-gray-800">
            {toast.message}
          </p>

          <button
            type="button"
            onClick={() => undoWatering(toast.wateringId)}
            className="text-sm font-semibold text-forest hover:text-forest-dark"
          >
            Annuler
          </button>
        </div>
      )}
    </WateringContext.Provider>
  );
}

export function useWatering() {
  const context = useContext(WateringContext);

  if (!context) {
    throw new Error(
      "useWatering doit être utilisé à l'intérieur de WateringProvider"
    );
  }

  return context;
}