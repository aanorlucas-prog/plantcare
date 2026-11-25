
import {
  Sprout,
  LayoutDashboard,
  Leaf,
  CirclePlus,
  Settings,
  Info,
} from "lucide-react";
import plantImg from "../../assets/plant-sidebar-2.png";

type SidebarProps = {
  activePage?: string;
  compact?: boolean;
};

const navigationItems = [
  {
    label: "Tableau de bord",
    icon: LayoutDashboard,
    href: "/",
    id: "dashboard",
  },
  {
    label: "Ma collection",
    icon: Leaf,
    href: "/collection",
    id: "collection",
  },
  {
    label: "Ajouter une plante",
    icon: CirclePlus,
    href: "/ajouter",
    id: "add",
  },
];

const bottomItems = [
  {
    label: "Paramètres",
    icon: Settings,
    href: "/parametres",
    id: "settings",
  },
  {
    label: "À propos",
    icon: Info,
    href: "/a-propos",
    id: "about",
  },
];

export default function Sidebar({
  activePage = "dashboard",
  compact = false,
}: SidebarProps) {
  const renderItem = (item: (typeof navigationItems)[number]) => {
    const Icon = item.icon;
    const isActive = activePage === item.id;

    return (
      <a
        key={item.id}
        href={item.href}
        title={compact ? item.label : undefined}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        className={`
          group flex items-center rounded-xl
          text-white/90 transition-all duration-200
          hover:bg-white/15 hover:text-white
          ${compact ? "justify-center p-3" : "gap-2 px-2 py-2"}
          ${isActive ? "bg-white/15 text-white shadow-inner" : ""}
        `}
      >
        <Icon
          size={compact ? 22 : 17}
          strokeWidth={1.8}
          className="shrink-0"
        />

        {!compact && (
          <span className="text-[10px] font-medium leading-tight">
            {item.label}
          </span>
        )}
      </a>
    );
  };

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        isolate flex flex-col
        h-dvh
        overflow-x-hidden overflow-y-auto
        rounded-r-2xl
        bg-gradient-to-b from-[#1F542F] via-[#347D48] to-[#19452D]
        text-white shadow-xl
        transition-all duration-300
        ${compact ? "w-[68px]" : "w-[104px]"}
      `}
    >
      {/* Décoration végétale */}
      {!compact && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-r-2xl">
          <img
            src={plantImg}
            alt=""
            aria-hidden="true"
            className="
              absolute
              bottom-[110px]
              right-[-150px]
              w-[350px]
              max-w-none
              h-auto
              opacity-40
              select-none
            "
          />
        </div>
      )}

      {/* Logo */}
      <div className="relative z-10 flex shrink-0 flex-col items-center px-2 pb-5 pt-5">
        <Sprout
          size={compact ? 29 : 34}
          strokeWidth={1.8}
          className="text-white"
        />

        {!compact && (
          <span className="mt-2 text-sm font-semibold tracking-tight">
            PlantCare
          </span>
        )}
      </div>

      {/* Navigation principale */}
      <nav className="relative z-10 flex flex-1 flex-col gap-2 px-2">
        {navigationItems.map((item) => renderItem(item))}
      </nav>

      {/* Navigation secondaire */}
      <div className="relative z-10 flex shrink-0 flex-col gap-2 border-t border-white/10 px-2 py-4">
        {bottomItems.map((item) => renderItem(item))}
      </div>
    </aside>
  );
}
