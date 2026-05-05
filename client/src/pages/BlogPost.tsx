/**
 * VSTVault Blog Post Detail Page
 * Renders full blog post content with Streamdown markdown
 * Design: Cyberpunk-Industrial Dark
 */

import { Link, useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { getBlogPost, BLOG_POSTS, formatBlogDate } from '@/lib/blog';
import { Streamdown } from 'streamdown';

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug);

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== params.slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.09 0.02 255)' }}>
        <Navbar />
        <div className="text-center">
          <BookOpen size={48} className="mx-auto mb-4 opacity-30" style={{ color: 'oklch(0.55 0.15 255)' }} />
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
            Post Not Found
          </h1>
          <Link href="/blog">
            <button className="btn-primary px-6 py-2.5 rounded-lg font-semibold mt-4">
              Back to Blog
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

      {/* Hero */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, oklch(0.10 0.03 255) 0%, oklch(0.09 0.02 255) 100%)',
          borderBottom: '1px solid rgba(37, 99, 235, 0.12)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 opacity-10 blur-3xl rounded-full"
          style={{ background: 'oklch(0.55 0.22 255)' }}
        />
        <div className="container relative z-10 max-w-3xl">
          <Link href="/blog">
            <button
              className="flex items-center gap-2 text-sm mb-6 hover:text-blue-300 transition-colors"
              style={{ color: 'oklch(0.55 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <ArrowLeft size={14} />
              Back to Blog
            </button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
              <Calendar size={12} />
              {formatBlogDate(post.date)}
            </div>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
              <Clock size={12} />
              {post.readTime} min read
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white', lineHeight: '1.25' }}
          >
            {post.title}
          </motion.h1>

          <p className="text-lg mb-6" style={{ color: 'oklch(0.62 0.02 255)', lineHeight: '1.7' }}>
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'oklch(0.18 0.05 255)', border: '1px solid rgba(37, 99, 235, 0.25)' }}
            >
              <BookOpen size={15} style={{ color: 'oklch(0.55 0.15 255)' }} />
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'oklch(0.82 0.02 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                {post.author}
              </div>
              <div className="text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>
                {post.authorRole}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl p-6 sm:p-8"
                style={{
                  background: 'oklch(0.12 0.025 255)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="prose-dark">
                  <Streamdown>{post.content}</Streamdown>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div
                  className="rounded-xl p-5"
                  style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <h3
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ color: 'oklch(0.50 0.10 255)', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    More Articles
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map(p => (
                      <Link key={p.id} href={`/blog/${p.slug}`}>
                        <div className="group cursor-pointer">
                          <h4
                            className="text-sm font-semibold mb-1 group-hover:text-blue-300 transition-colors"
                            style={{ color: 'oklch(0.78 0.02 255)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: '1.4' }}
                          >
                            {p.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs" style={{ color: 'oklch(0.40 0.02 255)' }}>
                            <Clock size={10} />
                            {p.readTime} min
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.14 0.04 255), oklch(0.12 0.03 265))',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                  }}
                >
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                  >
                    Browse Free Plugins
                  </h3>
                  <p className="text-xs mb-4" style={{ color: 'oklch(0.55 0.02 255)', lineHeight: '1.6' }}>
                    Put your new knowledge to work with our collection of free VST plugins.
                  </p>
                  <Link href="/plugins">
                    <button
                      className="btn-primary w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Browse Plugins
                      <ArrowRight size={12} />
                    </button>
                  </Link>
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
