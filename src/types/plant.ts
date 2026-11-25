export type WateringStatus = "up-to-date" | "upcoming" | "needed";



export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  location: string;

  wateringStatus: WateringStatus;
  wateringLabel: string;
  nextWatering: string;
  lastWatering: string;

  light: string;
  humidity: string;
  temperature: string;

  description: string;
  acquired: string;
  notes: string;
  watering: string;


}
