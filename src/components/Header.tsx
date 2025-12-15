"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/bridge-icon.svg" alt="BRIDGE" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-xl text-foreground">BRIDGE</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/notes"
              className={isActive("/notes") ? "text-notes font-medium" : "text-foreground-light hover:text-notes transition-colors"}
            >
              BRIDGE Notes
            </Link>
            <Link
              href="/pages"
              className={isActive("/pages") ? "text-pages font-medium" : "text-foreground-light hover:text-pages transition-colors"}
            >
              BRIDGE Pages
            </Link>
            <Link
              href="/about"
              className={isActive("/about") ? "text-bridge font-medium" : "text-foreground-light hover:text-bridge transition-colors"}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={isActive("/pricing") ? "text-bridge font-medium" : "text-foreground-light hover:text-bridge transition-colors"}
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
