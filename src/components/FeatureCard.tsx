interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color?: "bridge" | "notes" | "pages";
}

export default function FeatureCard({ icon, title, description, color = "bridge" }: FeatureCardProps) {
  const colorClasses = {
    bridge: "bg-bridge-light hover:border-bridge/30",
    notes: "bg-notes-light hover:border-notes/30",
    pages: "bg-pages-light hover:border-pages/30",
  };

  return (
    <div className={`p-6 bg-background rounded-2xl border border-border ${colorClasses[color].split(" ")[1]} transition-colors`}>
      <div className={`w-12 h-12 ${colorClasses[color].split(" ")[0]} rounded-xl flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground-light">{description}</p>
    </div>
  );
}
