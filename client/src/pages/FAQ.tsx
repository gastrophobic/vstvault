/**
 * VSTVault FAQ Page
 * Design: Cyberpunk-Industrial Dark
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const FAQS = [
  {
    q: 'Are all plugins really free?',
    a: 'Yes, absolutely. Every single plugin in the VSTVault library is 100% free to download and use. There are no hidden fees, no premium tiers, no trials. We believe great tools should be accessible to everyone.',
  },
  {
    q: 'Do I need to create an account to download?',
    a: 'No account required. Just find the plugin you want, click the download button, and it\'s yours. We don\'t collect your email address or any personal information for downloads.',
  },
  {
    q: 'What plugin formats are supported?',
    a: 'Most plugins in our library support VST3 and VST2 formats. Many also support AU (Audio Units) for macOS and AAX for Pro Tools. Each plugin page lists the specific formats supported.',
  },
  {
    q: 'Are the plugins safe to use?',
    a: 'Yes. Every plugin in our library has been scanned for malware and viruses before being added. Plugins with the "Verified" badge have been additionally tested by our team of audio engineers.',
  },
  {
    q: 'Which DAWs are compatible?',
    a: 'Our plugins work with all major DAWs that support VST plugins, including Ableton Live, FL Studio, Reaper, Cubase, Logic Pro (AU format), Studio One, Bitwig, and many more.',
  },
  {
    q: 'How do I install a VST plugin?',
    a: 'Download the plugin file (.dll for Windows, .vst3 or .component for macOS). Copy it to your VST plugins folder (usually C:\\Program Files\\VSTPlugins\\ on Windows or /Library/Audio/Plug-Ins/ on macOS). Then scan for new plugins in your DAW.',
  },
  {
    q: 'Can I use these plugins in commercial projects?',
    a: 'Yes. All plugins in our library can be used in commercial projects, including music releases, film scores, game audio, and any other commercial application. Check the individual plugin page for specific license details.',
  },
  {
    q: 'How often are new plugins added?',
    a: 'We add new plugins regularly, typically several times per month. Follow our blog or check the "Latest Uploads" section on the homepage to stay up to date with new additions.',
  },
  {
    q: 'Can I request a specific plugin?',
    a: 'Absolutely! Use our Request Plugin page to submit a request. We review all requests and prioritize based on community demand. Popular requests are typically added within a few weeks.',
  },
  {
    q: 'What if a plugin doesn\'t work in my DAW?',
    a: 'First, make sure the plugin format is compatible with your DAW. If you\'re still having issues, check our FAQ for DAW-specific troubleshooting tips, or contact us through the Contact page and we\'ll help you out.',
  },
  {
    q: 'Are there any 32-bit plugins?',
    a: 'Most of our plugins are 64-bit only, which is the current standard. Some older plugins may include 32-bit versions. The plugin page will specify the available architectures.',
  },
  {
    q: 'How can I support VSTVault?',
    a: 'The best way to support us is to share VSTVault with other producers and musicians. You can also contribute by submitting plugin requests, writing reviews, and reporting any issues you find.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? 'oklch(0.13 0.03 255)' : 'oklch(0.12 0.025 255)',
        border: isOpen ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span
          className="font-semibold text-sm pr-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: isOpen ? 'white' : 'oklch(0.82 0.02 255)' }}
        >
          {q}
        </span>
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-200"
          style={{
            color: isOpen ? 'oklch(0.60 0.18 255)' : 'oklch(0.45 0.05 255)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-5">
              <p className="text-sm" style={{ color: 'oklch(0.62 0.02 255)', lineHeight: '1.7' }}>
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                Help Center
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'oklch(0.60 0.02 255)' }}>
              Everything you need to know about VSTVault and our plugins
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-xl p-6 text-center"
            style={{
              background: 'linear-gradient(135deg, oklch(0.13 0.04 255), oklch(0.11 0.03 265))',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }}
          >
            <HelpCircle size={32} className="mx-auto mb-3" style={{ color: 'oklch(0.55 0.18 255)' }} />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>
              Still have questions?
            </h3>
            <p className="text-sm mb-4" style={{ color: 'oklch(0.58 0.02 255)' }}>
              Can't find what you're looking for? Our team is happy to help.
            </p>
            <a href="/contact">
              <button className="btn-primary px-6 py-2.5 rounded-lg font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Contact Support
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
