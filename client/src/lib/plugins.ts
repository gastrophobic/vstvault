/**
 * VSTVault Plugin Data System
 * 
 * Plugins are stored in /plugins/PluginName/plugin.dll
 * This module auto-generates consistent metadata per plugin using seeded randomness.
 * All data is deterministic per plugin name (same name = same data every time).
 */

export interface Plugin {
  id: string;
  name: string;
  slug: string;
  version: string;
  size: string;
  sizeBytes: number;
  releaseDate: string;
  description: string;
  longDescription: string;
  developer: string;
  downloadUrl: string;
  downloadCount: number;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  features: string[];
  requirements: string;
  format: string;
  compatibility: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  helpful: number;
}

// Seeded pseudo-random number generator (deterministic per seed)
function seededRandom(seed: number): () => number {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function stringToSeed(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function pickRandom<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickRandomN<T>(arr: T[], n: number, rng: () => number): T[] {
  const shuffled = [...arr].sort(() => rng() - 0.5);
  return shuffled.slice(0, n);
}

// Plugin name components for auto-generation
const DEVELOPERS = [
  'Nexus Audio', 'Vortex Labs', 'Phantom DSP', 'Stellar Plugins', 'Quantum Audio',
  'Nova Sound', 'Apex DSP', 'Cipher Audio', 'Prism Labs', 'Echo Forge',
  'Vertex Audio', 'Pulse DSP', 'Orbit Labs', 'Zenith Sound', 'Flux Audio',
  'Cascade DSP', 'Resonance Labs', 'Spectrum Audio', 'Axiom DSP', 'Helix Sound'
];

const DESCRIPTION_TEMPLATES = [
  (name: string) => `${name} is a professional-grade VST plugin designed for modern music production. Featuring an intuitive interface and pristine audio quality, it delivers studio-level results straight out of the box.`,
  (name: string) => `Experience the power of ${name} — a meticulously crafted audio processor built for producers who demand the best. Zero latency, zero compromise.`,
  (name: string) => `${name} brings cutting-edge DSP algorithms to your DAW. Whether you're mixing, mastering, or sound designing, this plugin delivers exceptional results every time.`,
  (name: string) => `Engineered for precision, ${name} offers an unparalleled combination of warmth and clarity. Used by thousands of producers worldwide in professional studio environments.`,
  (name: string) => `${name} is your go-to tool for professional audio processing. Built with advanced algorithms and a clean, modern interface, it integrates seamlessly into any workflow.`,
  (name: string) => `Unlock new creative possibilities with ${name}. This powerful VST plugin combines analog-inspired character with modern digital precision for truly unique results.`,
];

const LONG_DESCRIPTION_TEMPLATES = [
  (name: string, dev: string) => `## About ${name}

${name} is a professional VST plugin developed by ${dev}, designed to bring studio-quality audio processing to producers of all levels. Built on a foundation of advanced DSP research, it delivers transparent, musical results that sit perfectly in any mix.

## Key Features

The plugin features a highly optimized processing engine that ensures minimal CPU usage even when running multiple instances. The interface has been carefully designed to be intuitive while still offering deep control for advanced users.

## Technical Excellence

${name} uses 64-bit double-precision processing internally, ensuring the highest possible audio quality. The plugin supports all standard sample rates from 44.1kHz to 192kHz and is fully compatible with all major DAWs.

## Who Is It For?

Whether you're a bedroom producer just starting out or a seasoned professional mixing platinum records, ${name} has something to offer. Its versatile nature makes it suitable for a wide range of applications.`,

  (name: string, dev: string) => `## Overview

Developed by ${dev}, ${name} represents the culmination of years of research into digital signal processing and user interface design. The result is a plugin that sounds exceptional and is a joy to use.

## Sound Quality

At the heart of ${name} is a proprietary processing algorithm that has been tuned to deliver the most musical results possible. Every parameter has been carefully calibrated to ensure that even extreme settings produce usable, professional results.

## Workflow Integration

${name} is designed to integrate seamlessly into your existing workflow. It supports all major plugin formats and DAWs, and its lightweight CPU footprint means you can use it freely without worrying about performance.

## Community

Join thousands of producers worldwide who rely on ${name} as an essential part of their toolkit. The plugin has been praised for its exceptional sound quality and ease of use.`,
];

const FEATURE_POOL = [
  '64-bit double-precision processing',
  'Zero-latency mode available',
  'Oversampling up to 8x',
  'A/B comparison system',
  'Undo/redo history',
  'MIDI learn on all parameters',
  'Preset management system',
  'Resizable interface',
  'CPU-optimized engine',
  'Phase-coherent processing',
  'Stereo/Mid-Side modes',
  'Sidechain input support',
  'Automation ready',
  'Retina/HiDPI display support',
  'Dark and light themes',
  'Preset sharing via clipboard',
  'Spectrum analyzer built-in',
  'VU meter display',
  'Gain reduction metering',
  'Input/output level control',
];

const FORMATS = ['VST3, VST2, AU, AAX', 'VST3, VST2', 'VST3, AU, AAX', 'VST3, VST2, AU'];
const COMPATIBILITY = [
  'Windows 10/11, macOS 10.14+',
  'Windows 10/11 (64-bit)',
  'Windows 10/11, macOS 11+, Linux',
  'Windows 10/11, macOS 10.15+',
];
const REQUIREMENTS = [
  'DAW with VST3 support, 4GB RAM recommended',
  'Any VST-compatible DAW, 8GB RAM recommended',
  'DAW with VST2/VST3 support, 4GB RAM minimum',
  'Compatible DAW, Intel i5 or AMD equivalent',
];

const REVIEW_NAMES = [
  'Alex M.', 'Sarah K.', 'DJ_ProducerX', 'MixMaestro', 'StudioRat99',
  'BeatCraft', 'SoundEngineer_Tom', 'Melodica_J', 'AudioPhile42', 'ProducerLane',
  'NightOwlBeats', 'FrequencyFred', 'WaveformWendy', 'BassDropDave', 'HarmonyHunter',
  'VSTCollector', 'PluginJunkie', 'StudioSam', 'AudioAlchemist', 'MixMaster3000',
];

const REVIEW_TITLES = [
  'Absolutely essential plugin!',
  'Best free VST I\'ve ever used',
  'Sounds incredible, highly recommend',
  'Game changer for my workflow',
  'Surprisingly professional quality',
  'Can\'t believe this is free',
  'Studio-quality results every time',
  'My go-to plugin for this job',
  'Exceeded all my expectations',
  'Perfect for any genre',
  'Solid plugin, does the job well',
  'Great addition to my arsenal',
  'Impressive sound quality',
  'Very intuitive and musical',
  'Outstanding value (free!)',
];

const REVIEW_BODIES = [
  'I\'ve been using this plugin for about 6 months now and it has completely changed how I approach my mixes. The sound quality is on par with plugins that cost hundreds of dollars. Highly recommended!',
  'Downloaded this on a whim and ended up using it on every single track in my latest project. The interface is clean, the sound is pristine, and it\'s completely free. What more could you ask for?',
  'As a professional mixing engineer, I\'m very picky about the tools I use. This plugin surprised me with its quality. The processing is transparent and musical at the same time.',
  'Been producing for 10 years and this is one of the best free plugins I\'ve come across. The developers clearly know their stuff. The sound design possibilities are endless.',
  'Simple to use but incredibly powerful. I love how it integrates into my workflow without getting in the way. The presets are a great starting point too.',
  'The CPU usage is remarkably low for the quality you get. I can run multiple instances without any performance issues. This is now a permanent fixture in my template.',
  'I was skeptical at first since it\'s free, but after using it on a few sessions, I\'m completely sold. The sound is warm, detailed, and sits perfectly in a mix.',
  'This plugin does exactly what it says on the tin, and it does it extremely well. No bloat, no unnecessary features — just great sound.',
];

// Generate a version number seeded by plugin name
function generateVersion(rng: () => number): string {
  const major = Math.floor(rng() * 3) + 1;
  const minor = Math.floor(rng() * 10);
  const patch = Math.floor(rng() * 20);
  return `${major}.${minor}.${patch}`;
}

// Generate a file size seeded by plugin name
function generateSize(rng: () => number): { display: string; bytes: number } {
  const mb = 2 + rng() * 28; // 2MB to 30MB
  const bytes = Math.floor(mb * 1024 * 1024);
  return {
    display: `${mb.toFixed(1)} MB`,
    bytes,
  };
}

// Generate a release date seeded by plugin name
function generateDate(rng: () => number): string {
  const now = new Date();
  const daysAgo = Math.floor(rng() * 730); // Up to 2 years ago
  const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return date.toISOString().split('T')[0];
}

// Generate download count seeded by plugin name
function generateDownloadCount(rng: () => number): number {
  const base = Math.floor(rng() * 50000) + 1000;
  return base;
}

// Generate a slug from a name
export function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Generate full plugin data from a plugin name (deterministic)
export function generatePluginData(name: string): Plugin {
  const seed = stringToSeed(name);
  const rng = seededRandom(seed);

  const slug = nameToSlug(name);
  const version = generateVersion(rng);
  const sizeInfo = generateSize(rng);
  const releaseDate = generateDate(rng);
  const downloadCount = generateDownloadCount(rng);
  const developer = pickRandom(DEVELOPERS, rng);
  const descTemplate = pickRandom(DESCRIPTION_TEMPLATES, rng);
  const longDescTemplate = pickRandom(LONG_DESCRIPTION_TEMPLATES, rng);
  const features = pickRandomN(FEATURE_POOL, 6 + Math.floor(rng() * 4), rng);
  const format = pickRandom(FORMATS, rng);
  const compatibility = pickRandom(COMPATIBILITY, rng);
  const requirements = pickRandom(REQUIREMENTS, rng);
  const isVerified = rng() > 0.35; // ~65% chance of verified
  const rating = 3.5 + rng() * 1.5; // 3.5 to 5.0
  const reviewCount = Math.floor(rng() * 200) + 10;

  return {
    id: slug,
    name,
    slug,
    version,
    size: sizeInfo.display,
    sizeBytes: sizeInfo.bytes,
    releaseDate,
    description: descTemplate(name),
    longDescription: longDescTemplate(name, developer),
    developer,
    downloadUrl: `/plugins/${name}/plugin.dll`,
    downloadCount,
    isVerified,
    rating: Math.round(rating * 10) / 10,
    reviewCount,
    features,
    requirements,
    format,
    compatibility,
  };
}

// Generate fake reviews for a plugin (deterministic)
export function generateReviews(pluginName: string, count: number = 5): Review[] {
  const seed = stringToSeed(pluginName + '_reviews');
  const rng = seededRandom(seed);
  const reviews: Review[] = [];

  for (let i = 0; i < count; i++) {
    const reviewSeed = stringToSeed(pluginName + '_review_' + i);
    const reviewRng = seededRandom(reviewSeed);
    const daysAgo = Math.floor(reviewRng() * 365);
    const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

    reviews.push({
      id: `${pluginName}-review-${i}`,
      author: pickRandom(REVIEW_NAMES, reviewRng),
      rating: Math.floor(reviewRng() * 2) + 4, // 4 or 5 stars mostly
      date: date.toISOString().split('T')[0],
      title: pickRandom(REVIEW_TITLES, reviewRng),
      body: pickRandom(REVIEW_BODIES, reviewRng),
      helpful: Math.floor(reviewRng() * 50) + 1,
    });
  }

  return reviews;
}

// The master list of plugins available in the /plugins folder
// Add plugin folder names here — data is auto-generated from the name
export const PLUGIN_NAMES: string[] = [
  'ProVerb X',
  'NexusComp',
  'StellarEQ',
  'VortexDelay',
  'PhantomSaturator',
  'CrystalChorus',
  'QuantumLimiter',
  'NovaFlanger',
  'ApexTransient',
  'CipherDistortion',
  'PrismMultiband',
  'EchoMachine',
  'VertexPitch',
  'PulseStereo',
  'OrbitModulator',
  'ZenithGate',
  'FluxTremolo',
  'CascadeFilter',
  'ResonanceExciter',
  'SpectrumAnalyzer Pro',
  'AxiomBitcrusher',
  'HelixPhaser',
  'NebulaPad',
  'CometArpeggiator',
  'AuroraSynth',
  'MeteorDrum',
  'SolarChord',
  'GalaxyReverb',
  'PulsarDelay',
  'CosmicSaturator',
];

// Get all plugins as generated data
export function getAllPlugins(): Plugin[] {
  return PLUGIN_NAMES.map(generatePluginData);
}

// Get a plugin by slug
export function getPluginBySlug(slug: string): Plugin | undefined {
  return getAllPlugins().find(p => p.slug === slug);
}

// Get featured plugins (first 6)
export function getFeaturedPlugins(): Plugin[] {
  return getAllPlugins().slice(0, 6);
}

// Sort plugins
export type SortOption = 'newest' | 'name' | 'random' | 'downloads';

export function sortPlugins(plugins: Plugin[], sort: SortOption): Plugin[] {
  switch (sort) {
    case 'newest':
      return [...plugins].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    case 'name':
      return [...plugins].sort((a, b) => a.name.localeCompare(b.name));
    case 'downloads':
      return [...plugins].sort((a, b) => b.downloadCount - a.downloadCount);
    case 'random':
      // Seeded shuffle based on today's date for consistency within a day
      const today = new Date().toDateString();
      const seed = stringToSeed(today);
      const rng = seededRandom(seed);
      return [...plugins].sort(() => rng() - 0.5);
    default:
      return plugins;
  }
}

// Search plugins
export function searchPlugins(plugins: Plugin[], query: string): Plugin[] {
  if (!query.trim()) return plugins;
  const q = query.toLowerCase();
  return plugins.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.developer.toLowerCase().includes(q)
  );
}

// Format download count
export function formatDownloads(count: number): string {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}

// Format date
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
