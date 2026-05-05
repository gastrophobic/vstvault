/**
 * VSTVault Plugin Detail Page
 * Shows: version, size, date, description, features, reviews, download
 * Design: Cyberpunk-Industrial Dark
 */

import { useState, useEffect } from 'react';
import { Link, useParams } from 'wouter';
import { motion } from 'framer-motion';
import {
  Download, Star, CheckCircle, Calendar, HardDrive,
  Tag, Monitor, ArrowLeft, ThumbsUp, User, Package, Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PluginCard from '@/components/PluginCard';
import {
  getPluginBySlug, generateReviews, getAllPlugins,
  formatDownloads, formatDate, Plugin
} from '@/lib/plugins';
import { Streamdown } from 'streamdown';

const CARD_BG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663631252228/3M5t9C36obhdouDku6ELVs/plugin-card-bg-mLG9N86M2VqKtetyLbGwNG.webp';

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={size}
          style={{
            color: star <= Math.round(rating) ? 'oklch(0.75 0.18 85)' : 'oklch(0.30 0.02 255)',
            fill: star <= Math.round(rating) ? 'oklch(0.75 0.18 85)' : 'transparent',
          }}
        />
      ))}
    </div>
  );
}

export default function PluginDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const plugin = getPluginBySlug(slug);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [downloadCount, setDownloadCount] = useState(plugin?.downloadCount ?? 0);

  const reviews = plugin ? generateReviews(plugin.name, 6) : [];
  const relatedPlugins = plugin
    ? getAllPlugins().filter(p => p.id !== plugin.id).slice(0, 3)
    : [];

  function handleDownload() {
    if (downloading || downloaded) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setDownloadCount(c => c + 1);
    }, 1500);
  }

  if (!plugin) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.09 0.02 255)' }}>
        <Navbar />
        <div className="text-center">
          <Package size={48} className="mx-auto mb-4 opacity-30" style={{ color: 'oklch(0.55 0.15 255)' }} />
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
            Plugin Not Found
          </h1>
          <p className="mb-6" style={{ color: 'oklch(0.55 0.02 255)' }}>
            This plugin doesn't exist in the vault.
          </p>
          <Link href="/plugins">
            <button className="btn-primary px-6 py-2.5 rounded-lg font-semibold">
              Back to Plugins
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-24 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url(${CARD_BG_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(5,11,24,0.85) 0%, oklch(0.09 0.02 255) 100%)' }}
        />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <Link href="/plugins">
            <button
              className="flex items-center gap-2 text-sm mb-6 hover:text-blue-300 transition-colors"
              style={{ color: 'oklch(0.55 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <ArrowLeft size={14} />
              Back to Plugins
            </button>
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {plugin.isVerified && (
                  <span className="badge-verified flex items-center gap-1">
                    <CheckCircle size={9} />
                    VERIFIED
                  </span>
                )}
                <span className="badge-free">FREE</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
              >
                {plugin.name}
              </motion.h1>

              <p
                className="text-base mb-4"
                style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                by {plugin.developer}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={plugin.rating} />
                <span
                  className="text-sm font-mono"
                  style={{ color: 'oklch(0.65 0.10 255)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {plugin.rating.toFixed(1)} ({plugin.reviewCount} reviews)
                </span>
              </div>

              <p className="text-base max-w-2xl" style={{ color: 'oklch(0.70 0.02 255)', lineHeight: '1.7' }}>
                {plugin.description}
              </p>
            </div>

            {/* Right: Download Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-72 shrink-0"
            >
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'oklch(0.12 0.025 255)',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.1)',
                }}
              >
                {/* Price */}
                <div className="text-center mb-5">
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'oklch(0.65 0.22 255)' }}
                  >
                    FREE
                  </div>
                  <div className="text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                    No registration required
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { icon: Tag, label: 'Version', value: `v${plugin.version}` },
                    { icon: HardDrive, label: 'Size', value: plugin.size },
                    { icon: Calendar, label: 'Released', value: formatDate(plugin.releaseDate) },
                    { icon: Download, label: 'Downloads', value: formatDownloads(downloadCount) },
                    { icon: Monitor, label: 'Format', value: plugin.format },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <item.icon size={13} style={{ color: 'oklch(0.50 0.10 255)' }} />
                        <span className="text-xs" style={{ color: 'oklch(0.50 0.02 255)' }}>{item.label}</span>
                      </div>
                      <span
                        className="text-xs font-mono"
                        style={{ color: 'oklch(0.75 0.05 255)', fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    downloaded
                      ? 'bg-green-600/20 border border-green-500/40 text-green-400'
                      : downloading
                      ? 'opacity-70 cursor-wait'
                      : 'btn-primary btn-download'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {downloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Preparing...
                    </>
                  ) : downloaded ? (
                    <>
                      <CheckCircle size={16} />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Download Free
                    </>
                  )}
                </button>

                <p className="text-xs text-center mt-3" style={{ color: 'oklch(0.40 0.02 255)' }}>
                  {plugin.compatibility}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Description + Features */}
            <div className="lg:col-span-2 space-y-8">
              {/* Long Description */}
              <div
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  About This Plugin
                </h2>
                <div className="prose-dark">
                  <Streamdown>{plugin.longDescription}</Streamdown>
                </div>
              </div>

              {/* Features */}
              <div
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plugin.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2">
                      <Zap size={13} style={{ color: 'oklch(0.55 0.22 255)', flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: 'oklch(0.72 0.02 255)' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Requirements */}
              <div
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  System Requirements
                </h2>
                <div className="space-y-2">
                  {[
                    { label: 'Compatibility', value: plugin.compatibility },
                    { label: 'Requirements', value: plugin.requirements },
                    { label: 'Plugin Format', value: plugin.format },
                  ].map(item => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-sm w-32 shrink-0" style={{ color: 'oklch(0.50 0.02 255)' }}>
                        {item.label}
                      </span>
                      <span className="text-sm" style={{ color: 'oklch(0.75 0.02 255)' }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                  >
                    User Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <StarRating rating={plugin.rating} size={14} />
                    <span
                      className="text-sm font-mono"
                      style={{ color: 'oklch(0.65 0.10 255)', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {plugin.rating.toFixed(1)}/5
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review, i) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-lg p-4"
                      style={{
                        background: 'oklch(0.10 0.02 255)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'oklch(0.20 0.05 255)' }}
                          >
                            <User size={13} style={{ color: 'oklch(0.55 0.15 255)' }} />
                          </div>
                          <div>
                            <div
                              className="text-sm font-semibold"
                              style={{ color: 'oklch(0.82 0.02 255)', fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                              {review.author}
                            </div>
                            <div
                              className="text-xs"
                              style={{ color: 'oklch(0.40 0.02 255)', fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {formatDate(review.date)}
                            </div>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size={12} />
                      </div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: 'oklch(0.80 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {review.title}
                      </p>
                      <p className="text-sm" style={{ color: 'oklch(0.60 0.02 255)', lineHeight: '1.6' }}>
                        {review.body}
                      </p>
                      <div className="flex items-center gap-1.5 mt-3">
                        <ThumbsUp size={11} style={{ color: 'oklch(0.45 0.05 255)' }} />
                        <span className="text-xs" style={{ color: 'oklch(0.40 0.02 255)' }}>
                          {review.helpful} found this helpful
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <h3
                  className="text-sm font-semibold mb-4 uppercase tracking-wider"
                  style={{ color: 'oklch(0.55 0.10 255)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem' }}
                >
                  Plugin Stats
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Total Downloads', value: formatDownloads(downloadCount) },
                    { label: 'User Rating', value: `${plugin.rating.toFixed(1)} / 5.0` },
                    { label: 'Reviews', value: plugin.reviewCount.toString() },
                    { label: 'File Size', value: plugin.size },
                    { label: 'Version', value: `v${plugin.version}` },
                    { label: 'Release Date', value: formatDate(plugin.releaseDate) },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'oklch(0.48 0.02 255)' }}>{item.label}</span>
                      <span
                        className="text-xs font-mono font-semibold"
                        style={{ color: 'oklch(0.72 0.08 255)', fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Plugins */}
              <div>
                <h3
                  className="text-sm font-semibold mb-4 uppercase tracking-wider"
                  style={{ color: 'oklch(0.55 0.10 255)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem' }}
                >
                  More Plugins
                </h3>
                <div className="space-y-3">
                  {relatedPlugins.map(p => (
                    <Link key={p.id} href={`/plugins/${p.slug}`}>
                      <div
                        className="rounded-lg p-3 cursor-pointer transition-all duration-200 hover:border-blue-500/30"
                        style={{
                          background: 'oklch(0.12 0.025 255)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: 'oklch(0.82 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {p.name}
                          </span>
                          {p.isVerified && (
                            <CheckCircle size={12} style={{ color: 'oklch(0.55 0.18 255)' }} />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                            {p.developer}
                          </span>
                          <span
                            className="text-xs font-mono"
                            style={{ color: 'oklch(0.50 0.08 255)', fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            {formatDownloads(p.downloadCount)} dl
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
