/**
 * VSTVault Homepage
 * Design: Cyberpunk-Industrial Dark
 * Sections: Hero (animated), Stats, Featured Plugins, Latest Uploads, CTA
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Download, Star, CheckCircle, ArrowRight, Zap, Shield, Package, TrendingUp } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import { getAllPlugins, getFeaturedPlugins, formatDownloads } from '@/lib/plugins';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663631252228/3M5t9C36obhdouDku6ELVs/hero-bg-K2srfWPV8zFdrdLEgCMKLY.webp';

const STATS = [
  { label: 'Free Plugins', value: '30+', icon: Package },
  { label: 'Total Downloads', value: '2.1M+', icon: Download },
  { label: 'Verified Plugins', value: '95%', icon: Shield },
  { label: 'New This Month', value: '8', icon: TrendingUp },
];

export default function Home() {
  const featuredPlugins = getFeaturedPlugins();
  const allPlugins = getAllPlugins();
  const latestPlugins = [...allPlugins]
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
    .slice(0, 6);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(5,11,24,0.85) 0%, rgba(5,11,24,0.65) 50%, rgba(5,11,24,0.80) 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, transparent, oklch(0.09 0.02 255))',
          }}
        />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(37, 99, 235, 0.15)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
              }}
            >
              <Zap size={12} style={{ color: 'oklch(0.65 0.22 255)' }} />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: 'oklch(0.65 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                100% Free · No Registration Required
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              Unlimited Free
              <br />
              <span
                className="text-glow"
                style={{ color: 'oklch(0.65 0.22 255)' }}
              >
                VST Plugins
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 max-w-xl"
              style={{ color: 'oklch(0.70 0.02 255)', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}
            >
              Professional-grade VST plugins for producers, engineers, and musicians — all completely free. No paywalls, no trials, no catch.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/plugins">
                <button
                  className="btn-primary btn-download flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  <Download size={18} />
                  Browse All Plugins
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 hover:bg-white/10"
                  style={{
                    color: 'oklch(0.80 0.05 255)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              {['No sign-up needed', 'Virus-free guaranteed', 'Instant download'].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={13} style={{ color: 'oklch(0.60 0.18 155)' }} />
                  <span className="text-sm" style={{ color: 'oklch(0.60 0.02 255)' }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-16" style={{ background: 'oklch(0.09 0.02 255)' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-card rounded-xl p-6 text-center"
              >
                <stat.icon
                  size={24}
                  className="mx-auto mb-3"
                  style={{ color: 'oklch(0.60 0.18 255)' }}
                />
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'white',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'oklch(0.55 0.02 255)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PLUGINS ── */}
      <section className="relative z-10 py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-2"
              >
                <div
                  className="w-8 h-0.5 rounded"
                  style={{ background: 'oklch(0.55 0.22 255)' }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Featured
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
              >
                Featured Plugins
              </motion.h2>
            </div>
            <Link href="/plugins">
              <button
                className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-300"
                style={{ color: 'oklch(0.60 0.15 255)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                View all
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPlugins.map((plugin, i) => (
              <PluginCard key={plugin.id} plugin={plugin} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container">
        <div className="section-divider" />
      </div>

      {/* ── LATEST UPLOADS ── */}
      <section className="relative z-10 py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-2"
              >
                <div
                  className="w-8 h-0.5 rounded"
                  style={{ background: 'oklch(0.55 0.22 255)' }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Recent
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
              >
                Latest Uploads
              </motion.h2>
            </div>
            <Link href="/plugins?sort=newest">
              <button
                className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-300"
                style={{ color: 'oklch(0.60 0.15 255)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                See all new
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPlugins.map((plugin, i) => (
              <PluginCard key={plugin.id} plugin={plugin} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative z-10 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, oklch(0.13 0.04 255) 0%, oklch(0.11 0.03 265) 100%)',
              border: '1px solid rgba(37, 99, 235, 0.25)',
              boxShadow: '0 0 60px rgba(37, 99, 235, 0.1)',
            }}
          >
            {/* Glow orb */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: 'oklch(0.55 0.22 255)', transform: 'translate(30%, -30%)' }}
            />

            <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  Can't find what you need?
                </h2>
                <p style={{ color: 'oklch(0.65 0.05 255)' }}>
                  Request a specific plugin and we'll add it to the vault.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/request">
                  <button
                    className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Request a Plugin
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
