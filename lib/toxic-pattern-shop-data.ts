import { ToxicPatternResultType } from './toxic-pattern-data'

export interface ToxicPatternReportProduct {
  slug: ToxicPatternResultType
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number
  currency: string
}

export const toxicPatternReportProducts: Record<ToxicPatternResultType, ToxicPatternReportProduct> = {
  saboteur: {
    slug: 'saboteur',
    displayName: 'The Saboteur',
    reportTitle: 'The Full Report: The Saboteur',
    shortDescription: 'Your toxic pattern revealed. The self-defeating loops and hidden costs of your sabotage instinct.',
    whatYouGet: [
      'Why you undermine what you actually want',
      'The fear beneath the sabotage and what it protects',
      'How this pattern shows up in relationships without you realizing',
      'What other people notice that you deny about yourself',
      'The triggers that activate your self-destructive behavior',
      'Your dark side under pressure — what it costs the people close to you',
      'The relationship dynamics that sustain or break this pattern',
      'A real path forward that doesn\'t require becoming someone else',
    ],
    whyItMatters:
      'You\'ve seen the pattern. You know something keeps going wrong right when things could go right. This report names it precisely: the mechanism, the fear, the cost. Most frameworks call this a bad habit. This one calls it what it is — a survival strategy that stopped serving you.',
    price: 99,
    currency: 'eur',
  },
  controller: {
    slug: 'controller',
    displayName: 'The Controller',
    reportTitle: 'The Full Report: The Controller',
    shortDescription: 'Your toxic pattern revealed. The anxiety-driven need to manage outcomes and the cost to your relationships.',
    whatYouGet: [
      'The core anxiety that drives your need to control',
      'Why control feels like love — and why it isn\'t',
      'How this pattern appears in your closest relationships',
      'What the people you control actually experience',
      'The triggers that make your need for order spike dangerously',
      'Your dark side when things slip beyond your management',
      'The relationship types that feed vs. challenge this pattern',
      'What growth looks like when you stop managing and start trusting',
    ],
    whyItMatters:
      'Control doesn\'t feel toxic from the inside. It feels responsible. Necessary. Even loving. This report dismantles that story and shows you what\'s actually underneath your management: the fear, the cost, and the freedom you\'ve been refusing yourself.',
    price: 99,
    currency: 'eur',
  },
  pleaser: {
    slug: 'pleaser',
    displayName: 'The Pleaser',
    reportTitle: 'The Full Report: The Pleaser',
    shortDescription: 'Your toxic pattern revealed. The invisible cost of never saying no and always making peace.',
    whatYouGet: [
      'The wound that made approval feel like survival',
      'Why kindness became your primary defense mechanism',
      'How this pattern makes you resentful without knowing it',
      'What people sense about you that you don\'t see yourself',
      'The triggers that push you into over-giving and self-erasure',
      'Your dark side — what happens when the resentment finally surfaces',
      'The relationship dynamics that trap you in the pleaser role',
      'What it looks like to need and receive, not just give',
    ],
    whyItMatters:
      'People-pleasing doesn\'t look like a problem from the outside. You seem easy, agreeable, kind. But inside you\'re exhausted and quietly furious. This report names what\'s really happening: why you can\'t stop, what it\'s costing you, and what becomes possible when you stop.',
    price: 99,
    currency: 'eur',
  },
  accuser: {
    slug: 'accuser',
    displayName: 'The Accuser',
    reportTitle: 'The Full Report: The Accuser',
    shortDescription: 'Your toxic pattern revealed. The relentless pattern of blame and the pain that drives it.',
    whatYouGet: [
      'The original hurt that made blame feel like safety',
      'Why accountability in others feels more urgent than your own',
      'How this pattern pushes away the people who could actually help',
      'What your closest relationships look like from the other side',
      'The triggers that activate your accusatory reflex',
      'Your dark side under stress — how you escalate conflict you could resolve',
      'The relationship types that sustain or finally challenge this pattern',
      'What it looks like to hold yourself to the same standard',
    ],
    whyItMatters:
      'Accusation feels like truth-telling. Like accountability. Like justice. This report shows you the part you\'re not seeing: the role you play in your own story, the pain that needs someone to blame, and the cost of a standard applied only outward.',
    price: 99,
    currency: 'eur',
  },
  withholder: {
    slug: 'withholder',
    displayName: 'The Withholder',
    reportTitle: 'The Full Report: The Withholder',
    shortDescription: 'Your toxic pattern revealed. The quiet power of giving nothing and what it truly protects.',
    whatYouGet: [
      'Why withholding feels like dignity rather than punishment',
      'The early experience that made emotional availability feel dangerous',
      'How this pattern creates the exact disconnection you fear',
      'What the people in your life experience in your silence',
      'The triggers that cause you to lock down and go cold',
      'Your dark side — how your withholding becomes a form of cruelty',
      'Which relationship types eventually break through and which confirm your pattern',
      'What genuine openness costs — and why it\'s worth it',
    ],
    whyItMatters:
      'Withholding doesn\'t feel like a problem. It feels like self-protection. Composure. Boundaries. This report names what\'s actually happening: why you pull back, what you\'re punishing, and the intimacy you\'ve been refusing yourself in the name of safety.',
    price: 99,
    currency: 'eur',
  },
  escapist: {
    slug: 'escapist',
    displayName: 'The Escapist',
    reportTitle: 'The Full Report: The Escapist',
    shortDescription: 'Your toxic pattern revealed. The compulsive need to leave and the discomfort it never actually resolves.',
    whatYouGet: [
      'Why staying feels unbearable even when leaving makes no sense',
      'The fear at the center of your need to exit',
      'How this pattern affects every long-term relationship you enter',
      'What people experience when you begin the slow withdrawal',
      'The triggers that make escape feel like the only option',
      'Your dark side — how your avoidance becomes harm without intent',
      'The relationship dynamics that either hold you or accelerate your leaving',
      'What it looks like to stay through discomfort without losing yourself',
    ],
    whyItMatters:
      'Escape feels like freedom. Like self-respect. Like knowing when to leave. This report shows you the other side: what you keep running from, what you never resolve by leaving, and what becomes available only when you stay.',
    price: 99,
    currency: 'eur',
  },
}
