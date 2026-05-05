/**
 * VSTVault Blog Page
 * Lists all real blog posts with dates, authors, excerpts
 * Design: Cyberpunk-Industrial Dark
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { BLOG_POSTS, formatBlogDate } from '@/lib/blog';

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      {/* Header */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, oklch(0.10 0.03 255) 0%, oklch(0.09 0.02 255) 100%)',
          borderBottom: '1px solid rgba(37, 99, 235, 0.12)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 blur-3xl rounded-full"
          style={{ background: 'oklch(0.55 0.22 255)' }}
        />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-0.5 rounded" style={{ background: 'oklch(0.55 0.22 255)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Knowledge Base
              </span>
            </div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              The VSTVault Blog
            </h1>
            <p style={{ color: 'oklch(0.60 0.02 255)' }}>
              Tutorials, tips, and insights for music producers and audio engineers
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link href={`/blog/${featured.slug}`}>
              <div
                className="rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-blue-500/30"
                style={{
                  background: 'oklch(0.12 0.025 255)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded"
                      style={{
                        background: 'rgba(37, 99, 235, 0.15)',
                        color: 'oklch(0.65 0.18 255)',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      FEATURED
                    </span>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                      <Calendar size={12} />
                      {formatBlogDate(featured.date)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                      <Clock size={12} />
                      {featured.readTime} min read
                    </div>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                  >
                    {featured.title}
                  </h2>

                  <p className="text-base mb-5 max-w-3xl" style={{ color: 'oklch(0.62 0.02 255)', lineHeight: '1.7' }}>
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: 'oklch(0.20 0.05 255)' }}
                      >
                        <BookOpen size={13} style={{ color: 'oklch(0.55 0.15 255)' }} />
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: 'oklch(0.78 0.02 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {featured.author}
                        </div>
                        <div className="text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                          {featured.authorRole}
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                      style={{ color: 'oklch(0.60 0.15 255)', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Read Article
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div
                    className="rounded-xl overflow-hidden cursor-pointer group h-full flex flex-col transition-all duration-300 hover:border-blue-500/30"
                    style={{
                      background: 'oklch(0.12 0.025 255)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.42 0.02 255)' }}>
                          <Calendar size={11} />
                          {formatBlogDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.42 0.02 255)' }}>
                          <Clock size={11} />
                          {post.readTime} min
                        </div>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors flex-1"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white', lineHeight: '1.4' }}
                      >
                        {post.title}
                      </h3>

                      <p className="text-sm mb-4" style={{ color: 'oklch(0.58 0.02 255)', lineHeight: '1.6' }}>
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span className="text-xs" style={{ color: 'oklch(0.50 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {post.author}
                        </span>
                        <div
                          className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all"
                          style={{ color: 'oklch(0.55 0.15 255)' }}
                        >
                          Read
                          <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
