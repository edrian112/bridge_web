import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/icons/bridge-icon.svg" alt="BRIDGE" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-xl">BRIDGE</span>
          </div>
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link href="/notes" className="hover:text-bridge transition-colors">BRIDGE Notes</Link>
              <Link href="/pages" className="hover:text-bridge transition-colors">BRIDGE Pages</Link>
            </div>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link href="/about" className="hover:text-bridge transition-colors">About</Link>
              <Link href="/contact" className="hover:text-bridge transition-colors">Contact</Link>
              <Link href="/terms" className="hover:text-bridge transition-colors">이용약관</Link>
              <Link href="/privacy" className="hover:text-bridge transition-colors">개인정보처리방침</Link>
            </div>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <a href="https://github.com/edrian112/bridge" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-bridge transition-all" title="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-bridge transition-all" title="Contact">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </Link>
              </div>
              <div className="flex flex-col gap-1 text-sm opacity-80">
                <a href="https://www.threads.com/@bridge.project.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bridge transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.023.842-.697 2.023-1.108 3.428-1.191 1.09-.065 2.1.047 3.009.333.012-.774-.07-1.478-.253-2.1-.293-.992-.843-1.751-1.597-2.199-.828-.49-1.9-.696-3.189-.612-1.326.087-2.418.472-3.244 1.145-.869.707-1.383 1.63-1.528 2.744l-2.017-.27c.213-1.61.961-2.953 2.227-3.995 1.195-.984 2.742-1.531 4.601-1.628 1.686-.093 3.194.202 4.478.877 1.223.641 2.117 1.65 2.582 2.917.357.971.502 2.135.432 3.457 1.32.726 2.298 1.717 2.834 2.938.74 1.686.791 4.46-1.467 6.67-1.869 1.832-4.152 2.64-7.39 2.666zm-.12-8.262c-1.797.107-2.905.834-2.853 1.878.034.706.508 1.94 2.623 1.824 1.5-.082 2.473-.702 2.988-1.902.265-.617.39-1.384.376-2.29-.87-.207-1.876-.32-3.134-.235z"/></svg>
                  <span>@bridge.project.ai</span>
                </a>
                <a href="https://www.threads.com/@edari_bridge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bridge transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.023.842-.697 2.023-1.108 3.428-1.191 1.09-.065 2.1.047 3.009.333.012-.774-.07-1.478-.253-2.1-.293-.992-.843-1.751-1.597-2.199-.828-.49-1.9-.696-3.189-.612-1.326.087-2.418.472-3.244 1.145-.869.707-1.383 1.63-1.528 2.744l-2.017-.27c.213-1.61.961-2.953 2.227-3.995 1.195-.984 2.742-1.531 4.601-1.628 1.686-.093 3.194.202 4.478.877 1.223.641 2.117 1.65 2.582 2.917.357.971.502 2.135.432 3.457 1.32.726 2.298 1.717 2.834 2.938.74 1.686.791 4.46-1.467 6.67-1.869 1.832-4.152 2.64-7.39 2.666zm-.12-8.262c-1.797.107-2.905.834-2.853 1.878.034.706.508 1.94 2.623 1.824 1.5-.082 2.473-.702 2.988-1.902.265-.617.39-1.384.376-2.29-.87-.207-1.876-.32-3.134-.235z"/></svg>
                  <span>@edari_bridge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm opacity-70">
            © 2025 BRIDGE. From Chat to Brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
