import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Home, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="text-8xl sm:text-9xl font-bold mb-4 text-glow"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'oklch(0.55 0.22 255)',
                letterSpacing: '-0.04em',
              }}
            >
              404
            </div>
            <div
              className="w-16 h-0.5 mx-auto mb-6 rounded"
              style={{ background: 'linear-gradient(90deg, transparent, oklch(0.55 0.22 255), transparent)' }}
            />
            <h1
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              Page Not Found
            </h1>
            <p className="mb-8 max-w-sm mx-auto" style={{ color: 'oklch(0.55 0.02 255)' }}>
              The plugin or page you're looking for doesn't exist in the vault.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/">
                <button
                  className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  <Home size={15} />
                  Go Home
                </button>
              </Link>
              <Link href="/plugins">
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-white/10"
                  style={{
                    color: 'oklch(0.75 0.05 255)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  <Package size={15} />
                  Browse Plugins
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
