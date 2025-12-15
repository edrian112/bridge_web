import Image from "next/image";

interface BadgeProps {
  text: string;
  icon?: string;
  iconSrc?: string;
  color?: "bridge" | "notes" | "pages";
  variant?: "default" | "solid";
}

export default function Badge({ text, icon, iconSrc, color = "bridge", variant = "default" }: BadgeProps) {
  const colorClasses = {
    bridge: variant === "solid" ? "bg-bridge text-white" : "bg-bridge-light text-bridge-secondary",
    notes: variant === "solid" ? "bg-notes text-white" : "bg-notes/10 text-notes",
    pages: variant === "solid" ? "bg-pages text-white" : "bg-pages/10 text-pages",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses[color]} rounded-full text-sm font-medium`}>
      {iconSrc && (
        <Image src={iconSrc} alt="" width={24} height={24} className="rounded" />
      )}
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  );
}
