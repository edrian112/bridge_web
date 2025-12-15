interface ValueCardProps {
  icon: string;
  title: string;
  description: string | React.ReactNode;
  color?: "bridge" | "notes" | "pages";
  variant?: "colored" | "neutral";
}

export default function ValueCard({ icon, title, description, color = "bridge", variant = "colored" }: ValueCardProps) {
  const bgClasses = {
    bridge: "bg-bridge-light",
    notes: "bg-notes-light",
    pages: "bg-pages-light",
  };

  const iconBgClasses = {
    bridge: "bg-bridge",
    notes: "bg-notes",
    pages: "bg-pages",
  };

  const cardBg = variant === "neutral" ? "bg-background-alt" : bgClasses[color];

  return (
    <div className={`text-center p-8 ${cardBg} rounded-2xl`}>
      <div className={`w-16 h-16 ${iconBgClasses[color]} rounded-full flex items-center justify-center mx-auto mb-6`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground-light">{description}</p>
    </div>
  );
}
