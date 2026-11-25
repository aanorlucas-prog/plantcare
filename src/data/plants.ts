import type { Plant } from "../types/plant";



export const plants: Plant[] = [
  {
    id: 1,
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=900&fit=crop",
    location: "Salon",
    wateringStatus: "needed",
    wateringLabel: "Tous les 7 jours",
    nextWatering: "Arrosage nécessaire aujourd'hui",
    light: "Indirecte",

    description:
      "Le Monstera deliciosa est une plante tropicale originaire des forêts humides d'Amérique centrale. Apprécié pour ses grandes feuilles découpées, il apporte une touche exotique à votre intérieur.",
    watering: "Tous les 7 à 10 jours",
    humidity: "60 à 80 %",
    temperature: "18 à 27 °C",
    lastWatering: "Il y a 8 jours",
    acquired: "15 janvier 2025",
    notes:
      "Une nouvelle feuille est apparue récemment. Penser à vérifier le tuteur et à nettoyer les feuilles.",
  },
  {
    id: 2,
    name: "Ficus elastica",
    scientificName: "Ficus elastica",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&h=900&fit=crop",
    location: "Salon",
    wateringStatus: "upcoming",
    wateringLabel: "Tous les 10 jours",
    nextWatering: "Prochain arrosage demain",
    light: "Lumineuse",

    description:
      "Le Ficus elastica, aussi appelé caoutchouc, est une plante tropicale reconnaissable à ses grandes feuilles épaisses et brillantes. Il apprécie les pièces lumineuses et une atmosphère stable.",
    watering: "Tous les 10 à 15 jours",
    humidity: "40 à 60 %",
    temperature: "18 à 25 °C",
    lastWatering: "Il y a 9 jours",
    acquired: "3 mars 2025",
    notes:
      "Éviter les changements brusques de température et les courants d'air. Dépoussiérer régulièrement les feuilles.",
  },
  {
    id: 3,
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1200&h=900&fit=crop",
    location: "Chambre",
    wateringStatus: "up-to-date",
    wateringLabel: "Tous les 7 jours",
    nextWatering: "Prochain arrosage dans 5 jours",
    light: "Indirecte",

    description:
      "Le Pothos est une plante grimpante ou retombante particulièrement facile à entretenir. Ses longues tiges et ses feuilles en forme de cœur en font une plante idéale pour décorer une étagère ou une suspension.",
    watering: "Tous les 7 à 10 jours",
    humidity: "40 à 70 %",
    temperature: "18 à 25 °C",
    lastWatering: "Il y a 2 jours",
    acquired: "20 avril 2025",
    notes:
      "Les tiges peuvent être taillées pour favoriser une croissance plus dense. Peut être bouturé facilement dans l'eau.",
  },
  {
    id: 4,
    name: "Calathea",
    scientificName: "Goeppertia orbifolia",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=1200&h=900&fit=crop",
    location: "Chambre",
    wateringStatus: "needed",
    wateringLabel: "Tous les 4 jours",
    nextWatering: "Arrosage nécessaire aujourd'hui",
    light: "Tamisée",

    description:
      "La Goeppertia orbifolia est une plante tropicale appréciée pour ses grandes feuilles rondes aux motifs argentés. Elle préfère les environnements humides et la lumière douce, sans soleil direct.",
    watering: "Tous les 4 à 7 jours",
    humidity: "60 à 80 %",
    temperature: "18 à 26 °C",
    lastWatering: "Il y a 6 jours",
    acquired: "12 mai 2025",
    notes:
      "Surveiller l'humidité du substrat et éviter l'eau trop calcaire. Les bords des feuilles peuvent brunir si l'air est trop sec.",
  },
  {
    id: 5,
    name: "Monstera adansonii",
    scientificName: "Monstera adansonii",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1200&h=900&fit=crop",
    location: "Bureau",
    wateringStatus: "up-to-date",
    wateringLabel: "Tous les 7 jours",
    nextWatering: "Prochain arrosage dans 3 jours",
    light: "Indirecte",

    description:
      "Le Monstera adansonii est une plante tropicale grimpante dont les feuilles sont naturellement percées de petites ouvertures. Il apprécie une bonne luminosité indirecte et un environnement légèrement humide.",
    watering: "Tous les 7 à 10 jours",
    humidity: "50 à 70 %",
    temperature: "18 à 27 °C",
    lastWatering: "Il y a 4 jours",
    acquired: "8 juin 2025",
    notes:
      "Un support peut l'aider à grimper et à développer de plus grandes feuilles. Vérifier régulièrement l'état des tiges.",
  },
  {
    id: 6,
    name: "Zamioculcas",
    scientificName: "Zamioculcas zamiifolia",
    image:
      "https://images.unsplash.com/photo-1597055181300-e3633a917c4b?w=1200&h=900&fit=crop",
    location: "Salon",
    wateringStatus: "up-to-date",
    wateringLabel: "Tous les 15 jours",
    nextWatering: "Prochain arrosage dans 8 jours",
    light: "Modérée",

    description:
      "Le Zamioculcas est une plante tropicale robuste qui stocke l'eau dans ses rhizomes. Ses tiges épaisses et ses feuilles brillantes lui permettent de bien supporter les périodes de sécheresse.",
    watering: "Tous les 15 à 20 jours",
    humidity: "40 à 60 %",
    temperature: "18 à 26 °C",
    lastWatering: "Il y a 7 jours",
    acquired: "18 juillet 2025",
    notes:
      "Attention à ne pas trop arroser : laisser sécher le substrat entre deux arrosages. Éviter l'eau stagnante dans le cache-pot.",
  },
  {
    id: 7,
    name: "Spathiphyllum",
    scientificName: "Spathiphyllum wallisii",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=1200&h=900&fit=crop",
    location: "Cuisine",
    wateringStatus: "upcoming",
    wateringLabel: "Tous les 5 jours",
    nextWatering: "Prochain arrosage dans 2 jours",
    light: "Indirecte",

    description:
      "Le Spathiphyllum, également appelé fleur de lune, est une plante tropicale qui produit de jolies fleurs blanches. Il apprécie les emplacements lumineux sans soleil direct et un substrat qui reste légèrement humide.",
    watering: "Tous les 5 à 7 jours",
    humidity: "50 à 70 %",
    temperature: "18 à 25 °C",
    lastWatering: "Il y a 3 jours",
    acquired: "2 août 2025",
    notes:
      "Ses feuilles peuvent retomber lorsqu'il manque d'eau. Retirer les fleurs fanées pour entretenir la plante.",
  },
  {
    id: 8,
    name: "Pilea",
    scientificName: "Pilea peperomioides",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&h=900&fit=crop",
    location: "Bureau",
    wateringStatus: "up-to-date",
    wateringLabel: "Tous les 7 jours",
    nextWatering: "Prochain arrosage dans 4 jours",
    light: "Lumineuse",

    description:
      "Le Pilea peperomioides est reconnaissable à ses feuilles rondes portées par de longs pétioles. Il apprécie une bonne luminosité indirecte et peut produire de nombreux rejets à sa base.",
    watering: "Tous les 7 à 10 jours",
    humidity: "40 à 60 %",
    temperature: "15 à 25 °C",
    lastWatering: "Il y a 3 jours",
    acquired: "14 septembre 2025",
    notes:
      "Tourner régulièrement le pot pour favoriser une croissance équilibrée. Les rejets peuvent être séparés pour multiplier la plante.",
  },
];
