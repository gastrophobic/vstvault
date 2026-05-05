/**
 * VSTVault Plugins Page
 * Grid layout with search, sort (newest/name/random/downloads)
 * Design: Cyberpunk-Industrial Dark
 */

import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Package, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PluginCard from '@/components/PluginCard';
import ParticleBackground from '@/components/ParticleBackground';
import { getAllPlugins, sortPlugins, searchPlugins, SortOption } from '@/lib/plugins';

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'name', label: 'Name (A–Z)' },
  { value: 'downloads', label: 'Most Downloaded' },
  { value: 'random', label: 'Random' },
];

export default function Plugins() {
  const [location] = useLocation();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('newest');

  // Parse sort from URL query
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sortParam = params.get('sort') as SortOption;
    if (sortParam && SORT_OPTIONS.find(o => o.value === sortParam)) {
      setSort(sortParam);
    }
  }, [location]);

  const allPlugins = useMemo(() => getAllPlugins(), []);

  const filteredAndSorted = useMemo(() => {
    const searched = searchPlugins(allPlugins, search);
    return sortPlugins(searched, sort);
  }, [allPlugins, search, sort]);

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, oklch(0.10 0.03 255) 0%, oklch(0.09 0.02 255) 100%)',
          borderBottom: '1px solid rgba(37, 99, 235, 0.12)',
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 blur-3xl rounded-full"
          style={{ background: 'oklch(0.55 0.22 255)' }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-0.5 rounded" style={{ background: 'oklch(0.55 0.22 255)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Plugin Library
              </span>
            </div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              All VST Plugins
            </h1>
            <p style={{ color: 'oklch(0.60 0.02 255)' }}>
              {allPlugins.length} professional plugins — all completely free
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="relative z-10 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'oklch(0.45 0.05 255)' }}
              />
              <input
                type="text"
                placeholder="Search plugins by name or developer..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input w-full pl-9 pr-9 py-2.5 rounded-lg text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-white transition-colors"
                  style={{ color: 'oklch(0.45 0.05 255)' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} style={{ color: 'oklch(0.50 0.05 255)' }} />
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="search-input px-3 py-2.5 rounded-lg text-sm appearance-none pr-8"
                style={{ minWidth: '160px' }}
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value} style={{ background: 'oklch(0.12 0.025 255)' }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 flex items-center gap-2">
            <Package size={13} style={{ color: 'oklch(0.45 0.05 255)' }} />
            <span className="text-xs" style={{ color: 'oklch(0.45 0.05 255)', fontFamily: 'JetBrains Mono, monospace' }}>
              {filteredAndSorted.length} plugin{filteredAndSorted.length !== 1 ? 's' : ''} found
              {search && ` for "${search}"`}
            </span>
          </div>
        </div>
      </section>

      {/* Plugin Grid */}
      <section className="relative z-10 py-10">
        <div className="container">
          {filteredAndSorted.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Package size={48} className="mx-auto mb-4 opacity-30" style={{ color: 'oklch(0.55 0.15 255)' }} />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'oklch(0.70 0.05 255)' }}
              >
                No plugins found
              </h3>
              <p className="text-sm mb-4" style={{ color: 'oklch(0.45 0.02 255)' }}>
                Try a different search term or clear the filter
              </p>
              <button
                onClick={() => setSearch('')}
                className="btn-primary px-4 py-2 rounded-lg text-sm font-medium"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredAndSorted.map((plugin, i) => (
                  <PluginCard key={plugin.id} plugin={plugin} index={i} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
