import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-black/50 dark:via-black/60 dark:to-black" />
        <div className="relative grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 w-fit text-xs font-medium mb-4">
              <Shield className="h-4 w-4" /> Secure • <CreditCard className="h-4 w-4" /> Subscriptions • <Rocket className="h-4 w-4" /> Fast
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Build your AI chat experience
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-xl">
              A modern, animated chat interface with authentication, subscriptions, and delightful UX. Designed with a minimal glass aesthetic.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#chat" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 shadow-md hover:shadow-lg transition">
                Try the demo
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition">
                Explore features
              </a>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden>
            {/* spacer for 3D scene visibility */}
          </div>
        </div>
      </div>
    </section>
  );
}
