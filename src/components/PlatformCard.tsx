interface PlatformCardProps {
  icon: string;
  name: string;
  bgColor: string;
}

export default function PlatformCard({ icon, name, bgColor }: PlatformCardProps) {
  return (
    <div className="bg-background rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h4 className="font-semibold text-foreground">{name}</h4>
    </div>
  );
}
