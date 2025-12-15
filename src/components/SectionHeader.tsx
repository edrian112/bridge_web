interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
