/**
 * VSTVault About Page
 * Design: Cyberpunk-Industrial Dark
 */

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Heart, Download, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const ABOUT_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663631252228/3M5t9C36obhdouDku6ELVs/about-bg-LzzXZWYBTyGTvgVL6DmHnZ.webp';

const VALUES = [
  {
    icon: Heart,
    title: 'Free Forever',
    description: 'Every plugin on VSTVault is and will always be completely free. No freemium, no trials, no paywalls.',
  },
  {
    icon: Shield,
    title: 'Safe & Verified',
    description: 'All plugins are scanned and verified before being added to the vault. Your security is our priority.',
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'No registration, no email, no waiting. Click download and start making music immediately.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by producers, for producers. Our community helps curate and expand the plugin library.',
  },
];

const TEAM = [
  { name: 'Alex Mercer', role: 'Founder & Audio Engineer', bio: '15 years in professional audio. Believes great tools should be accessible to everyone.' },
  { name: 'Priya Nair', role: 'Lead Developer', bio: 'Full-stack developer and music producer. Built VSTVault from the ground up.' },
  { name: 'Jordan Blake', role: 'Plugin Curator', bio: 'Former studio engineer with an ear for quality. Personally tests every plugin in the vault.' },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.02 255)' }}>
      <ParticleBackground />
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-24 pb-20 overflow-hidden min-h-[50vh] flex items-center"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(5,11,24,0.88) 0%, rgba(5,11,24,0.70) 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.09 0.02 255))' }}
        />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 rounded" style={{ background: 'oklch(0.55 0.22 255)' }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'oklch(0.55 0.22 255)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Our Story
              </span>
            </div>
            <h1
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              About VSTVault
            </h1>
            <p
              className="text-xl max-w-2xl"
              style={{ color: 'oklch(0.70 0.02 255)', lineHeight: '1.7' }}
            >
              We believe that great music production tools should be accessible to everyone — not just those who can afford expensive software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: 'oklch(0.12 0.025 255)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              Our Mission
            </h2>
            <div className="space-y-4 prose-dark">
              <p>
                VSTVault was founded with a simple idea: the best music production tools should be free. Too many talented producers are held back not by lack of skill, but by lack of access to professional-grade software.
              </p>
              <p>
                We've built the largest curated collection of free VST plugins on the internet. Every plugin in our vault has been personally tested and verified by our team of audio engineers. We don't just collect plugins — we ensure they're actually worth using.
              </p>
              <p>
                Whether you're a bedroom producer just starting out, a seasoned professional looking to expand your toolkit, or a student learning the craft, VSTVault has something for you. And it's all completely free — no registration, no trials, no paywalls.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6 text-center"
                style={{
                  background: 'oklch(0.12 0.025 255)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(37, 99, 235, 0.15)' }}
                >
                  <value.icon size={22} style={{ color: 'oklch(0.60 0.18 255)' }} />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: 'oklch(0.58 0.02 255)', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-12">
        <div className="container">
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, oklch(0.13 0.04 255), oklch(0.11 0.03 265))',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: '30+', label: 'Free Plugins', icon: Download },
                { value: '2.1M+', label: 'Downloads', icon: Download },
                { value: '4.8', label: 'Avg Rating', icon: Star },
                { value: '100%', label: 'Free Forever', icon: Heart },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'oklch(0.65 0.22 255)' }}
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
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
            >
              The Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6 text-center"
                style={{
                  background: 'oklch(0.12 0.025 255)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'oklch(0.18 0.05 255)', border: '2px solid rgba(37, 99, 235, 0.3)' }}
                >
                  <Users size={22} style={{ color: 'oklch(0.55 0.15 255)' }} />
                </div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs mb-3 font-medium"
                  style={{ color: 'oklch(0.55 0.12 255)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {member.role}
                </p>
                <p className="text-xs" style={{ color: 'oklch(0.52 0.02 255)', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
