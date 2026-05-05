/**
 * VSTVault Request Plugin Page
 * Design: Cyberpunk-Industrial Dark
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Send, CheckCircle, Lightbulb, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const RECENT_REQUESTS = [
  { name: 'Vintage Tape Saturator', votes: 142, status: 'In Progress' },
  { name: 'Spectral Compressor', votes: 98, status: 'Planned' },
  { name: 'Granular Synthesizer', votes: 87, status: 'Planned' },
  { name: 'Convolution Reverb', votes: 76, status: 'Planned' },
  { name: 'Multiband Transient Shaper', votes: 65, status: 'Reviewing' },
];

export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    pluginName: '',
    pluginType: '',
    description: '',
    email: '',
  });

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
                Community
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
              Request a Plugin
            </h1>
            <p style={{ color: 'oklch(0.60 0.02 255)' }}>
              Can't find what you need? Tell us what to add to the vault.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      Request Submitted!
                    </h3>
                    <p className="mb-2" style={{ color: 'oklch(0.58 0.02 255)' }}>
                      Thanks for your request. We'll review it and add it to our roadmap.
                    </p>
                    <p className="text-sm" style={{ color: 'oklch(0.45 0.02 255)' }}>
                      Popular requests are typically added within 2–4 weeks.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
                      Submit a Request
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Plugin Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.pluginName}
                          onChange={e => setForm(f => ({ ...f, pluginName: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm"
                          placeholder="e.g. Vintage Tape Saturator"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Plugin Type *
                        </label>
                        <select
                          required
                          value={form.pluginType}
                          onChange={e => setForm(f => ({ ...f, pluginType: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm appearance-none"
                        >
                          <option value="" style={{ background: 'oklch(0.12 0.025 255)' }}>Select a type...</option>
                          <option value="reverb" style={{ background: 'oklch(0.12 0.025 255)' }}>Reverb</option>
                          <option value="compressor" style={{ background: 'oklch(0.12 0.025 255)' }}>Compressor</option>
                          <option value="eq" style={{ background: 'oklch(0.12 0.025 255)' }}>EQ</option>
                          <option value="delay" style={{ background: 'oklch(0.12 0.025 255)' }}>Delay</option>
                          <option value="distortion" style={{ background: 'oklch(0.12 0.025 255)' }}>Distortion / Saturation</option>
                          <option value="modulation" style={{ background: 'oklch(0.12 0.025 255)' }}>Modulation</option>
                          <option value="synth" style={{ background: 'oklch(0.12 0.025 255)' }}>Synthesizer</option>
                          <option value="sampler" style={{ background: 'oklch(0.12 0.025 255)' }}>Sampler</option>
                          <option value="utility" style={{ background: 'oklch(0.12 0.025 255)' }}>Utility</option>
                          <option value="other" style={{ background: 'oklch(0.12 0.025 255)' }}>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Description
                        </label>
                        <textarea
                          rows={4}
                          value={form.description}
                          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm resize-none"
                          placeholder="Describe what the plugin should do, any specific features you need, or similar existing plugins..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.60 0.05 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          Email (optional — for updates)
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="search-input w-full px-3 py-2.5 rounded-lg text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        <Send size={14} />
                        Submit Request
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* How it works */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="text-sm font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
                  How It Works
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Lightbulb, text: 'Submit your plugin request' },
                    { icon: Users, text: 'Community votes on requests' },
                    { icon: Clock, text: 'We add popular requests' },
                    { icon: Package, text: 'Plugin appears in the vault' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(37, 99, 235, 0.15)' }}
                      >
                        <step.icon size={13} style={{ color: 'oklch(0.60 0.18 255)' }} />
                      </div>
                      <span className="text-xs" style={{ color: 'oklch(0.62 0.02 255)' }}>{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Requests */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'oklch(0.12 0.025 255)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="text-sm font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
                  Top Requests
                </h3>
                <div className="space-y-3">
                  {RECENT_REQUESTS.map((req, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium truncate" style={{ color: 'oklch(0.75 0.02 255)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {req.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{
                            color: req.status === 'In Progress' ? 'oklch(0.60 0.18 155)' : 'oklch(0.45 0.02 255)',
                            fontFamily: 'JetBrains Mono, monospace',
                          }}
                        >
                          {req.status}
                        </div>
                      </div>
                      <span
                        className="text-xs font-mono shrink-0"
                        style={{ color: 'oklch(0.55 0.12 255)', fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {req.votes} votes
                      </span>
                    </div>
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
