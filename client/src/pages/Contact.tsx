/**
 * VSTVault Contact Page
 * Design: Cyberpunk-Industrial Dark
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

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
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}>
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
              Contact Us
            </h1>
            <p style={{ color: 'oklch(0.60 0.02 255)' }}>
              Have a question, suggestion, or just want to say hello?
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'hello@vstvault.org',
                  desc: 'We respond within 24 hours',
                },
                {
                  icon: MessageSquare,
                  title: 'Discord',
                  value: 'discord.gg/vstvault',
                  desc: 'Join our community',
                },
              ].map(item => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-5"
                  style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(37, 99, 235, 0.15)' }}
                    >
                      <item.icon size={17} style={{ color: 'oklch(0.60 0.18 255)' }} />
                    </div>
                    <h3 className="font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-mono mb-1" style={{ color: 'oklch(0.65 0.12 255)', fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.value}
                  </p>
                  <p className="text-xs" style={{ color: 'oklch(0.45 0.02 255)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-6 sm:p-8"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'oklch(0.60 0.18 155)' }} />
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'oklch(0.58 0.02 255)' }}>
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className="search-input w-full px-3 py-2.5 rounded-lg text-sm"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="search-input w-full px-3 py-2.5 rounded-lg text-sm resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
