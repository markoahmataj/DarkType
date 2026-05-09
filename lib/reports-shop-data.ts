import { ResultType } from './quiz-data'

export interface ReportProduct {
  slug: ResultType
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number // in cents (99 = €0.99)
  currency: string
}

export const reportProducts: Record<ResultType, ReportProduct> = {
  strategist: {
    slug: 'strategist',
    displayName: 'The Strategist',
    reportTitle: 'The Full Report: The Strategist',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your strategic nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why you keep people at distance',
      'What triggers you and why your fear of incompetence runs so deep',
      'Your dark side under stress—how you weaponize intelligence',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond strategy',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Strategist. But that\'s the surface. This full report shows the complete pattern: why you calculate so obsessively, what you\'re really protecting yourself from, and the real cost of your distance. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
  charmer: {
    slug: 'charmer',
    displayName: 'The Charmer',
    reportTitle: 'The Full Report: The Charmer',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your magnetic nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why you keep people at distance',
      'What triggers you and why your fear of irrelevance runs so deep',
      'Your dark side under stress—how you weaponize charm into abuse',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond seduction',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Charmer. But that\'s the surface. This full report shows the complete pattern: why you need attention so desperately, what you\'re really protecting yourself from, and the real cost of your performance. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
  rebel: {
    slug: 'rebel',
    displayName: 'The Rebel',
    reportTitle: 'The Full Report: The Rebel',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your freedom-driven nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why you cannot stay',
      'What triggers you and why your fear of entrapment runs so deep',
      'Your dark side under stress—how your freedom becomes recklessness',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond rebellion',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Rebel. But that\'s the surface. This full report shows the complete pattern: why you resist everything, what you\'re really running from, and the real cost of your impulsivity. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
  ghost: {
    slug: 'ghost',
    displayName: 'The Ghost',
    reportTitle: 'The Full Report: The Ghost',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your disappearing nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why you vanish when things get real',
      'What triggers you and why your fear of vulnerability runs so deep',
      'Your dark side under stress—how you weaponize distance and silence',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond invisibility',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Ghost. But that\'s the surface. This full report shows the complete pattern: why you retreat so completely, what you\'re really protecting yourself from, and the real cost of your isolation. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
  mirror: {
    slug: 'mirror',
    displayName: 'The Mirror',
    reportTitle: 'The Full Report: The Mirror',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your shape-shifting nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why you never show your true self',
      'What triggers you and why your fear of being pinned down runs so deep',
      'Your dark side under stress—how you become unpredictable and cruel',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond adaptation',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Mirror. But that\'s the surface. This full report shows the complete pattern: why you shift constantly, what you\'re really escaping from, and the real cost of your adaptability. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
  protector: {
    slug: 'protector',
    displayName: 'The Protector',
    reportTitle: 'The Full Report: The Protector',
    shortDescription:
      'Your archetype revealed. The patterns, motivations, and hidden costs of your protective nature.',
    whatYouGet: [
      'Your core psychological driver and what fuels your behavior',
      'The hidden strength everyone misses about you',
      'Your blind spots and how they sabotage relationships',
      'How you show up in relationships and why control feels like love',
      'What triggers you and why your fear of loss runs so deep',
      'Your dark side under stress—how your protection becomes control',
      'Your best and worst romantic matches, psychologically explained',
      'The practical path to growth beyond defense',
    ],
    whyItMatters:
      'You got the outline. The free result gives you the archetype—The Protector. But that\'s the surface. This full report shows the complete pattern: why you guard so fiercely, what you\'re really defending against, and the real cost of your intensity. Most personality tests flatter you. This one explains the behaviors you already know are a problem.',
    price: 99,
    currency: 'eur',
  },
}
