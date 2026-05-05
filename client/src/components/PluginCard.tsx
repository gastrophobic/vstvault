/**
 * VSTVault Plugin Card
 * Dark card with blue glow on hover, no icons/tags
 * Shows: name, developer, version, size, downloads, verified badge
 */

import { Link } from 'wouter';
import { Download, Star, CheckCircle, Calendar } from 'lucide-react';
import { Plugin, formatDownloads, formatDate } from '@/lib/plugins';
import { motion } from 'framer-motion';

interface PluginCardProps {
  plugin: Plugin;
  index?: number;
}

const CARD_BG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663631252228/3M5t9C36obhdouDku6ELVs/plugin-card-bg-mLG9N86M2VqKtetyLbGwNG.webp';

export default function PluginCard({ plugin, index = 0 }: PluginCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href={`/plugins/${plugin.slug}`}>
        <div className="plugin-card rounded-xl overflow-hidden group cursor-pointer h-full">
          {/* Card header with subtle background */}
          <div
            className="relative h-28 overflow-hidden"
            style={{
              backgroundImage: `url(${CARD_BG_URL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(5,11,24,0.7) 0%, rgba(10,22,40,0.5) 100%)',
              }}
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              {plugin.isVerified && (
                <span className="badge-verified flex items-center gap-1">
                  <CheckCircle size={9} />
                  VERIFIED
                </span>
              )}
              <span className="badge-free">FREE</span>
            </div>

            {/* Version */}
            <div className="absolute bottom-3 right-3">
              <span
                className="text-xs font-mono px-2 py-1 rounded"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'oklch(0.60 0.15 255)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                }}
              >
                v{plugin.version}
              </span>
            </div>

            {/* Plugin name overlay */}
            <div className="absolute bottom-3 left-3">
              <h3
                className="font-display font-700 text-white text-base leading-tight group-hover:text-blue-300 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
              >
                {plugin.name}
              </h3>
            </div>
          </div>

          {/* Card body */}
          <div className="p-4">
            <p
              className="text-xs mb-3 line-clamp-2"
              style={{ color: 'oklch(0.55 0.02 255)', lineHeight: '1.5' }}
            >
              {plugin.description}
            </p>

            {/* Developer */}
            <p
              className="text-xs mb-3 font-medium"
              style={{ color: 'oklch(0.60 0.12 255)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {plugin.developer}
            </p>

            {/* Stats row */}
            <div
              className="flex items-center justify-between pt-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3">
                {/* Downloads */}
                <div className="flex items-center gap-1">
                  <Download size={11} style={{ color: 'oklch(0.55 0.15 255)' }} />
                  <span
                    className="text-xs font-mono"
                    style={{ color: 'oklch(0.65 0.10 255)', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {formatDownloads(plugin.downloadCount)}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star size={11} style={{ color: 'oklch(0.75 0.18 85)' }} fill="oklch(0.75 0.18 85)" />
                  <span
                    className="text-xs font-mono"
                    style={{ color: 'oklch(0.65 0.10 255)', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {plugin.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Size */}
              <span
                className="text-xs font-mono"
                style={{ color: 'oklch(0.45 0.02 255)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {plugin.size}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
