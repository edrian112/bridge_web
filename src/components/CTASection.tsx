import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string | React.ReactNode;
  buttonText: string;
  buttonHref: string;
  color?: "bridge" | "notes" | "pages";
  secondaryContent?: React.ReactNode;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  color = "bridge",
  secondaryContent
}: CTASectionProps) {
  const bgClasses = {
    bridge: "bg-bridge",
    notes: "bg-notes",
    pages: "bg-pages",
  };

  const buttonClasses = {
    bridge: "text-bridge hover:bg-bridge-light",
    notes: "text-notes hover:bg-notes-light",
    pages: "text-pages hover:bg-pages-light",
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClasses[color]}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        {subtitle && (
          <div className="text-xl text-white/80 mb-10">
            {subtitle}
          </div>
        )}
        {secondaryContent}
        <Link
          href={buttonHref}
          className={`inline-flex px-8 py-4 bg-white ${buttonClasses[color]} rounded-xl font-semibold text-lg transition-colors shadow-lg`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
