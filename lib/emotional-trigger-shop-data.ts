import { EmotionalTriggerResultType } from './emotional-trigger-data'

export interface EmotionalTriggerReportProduct {
  slug: EmotionalTriggerResultType
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number
  currency: string
}

export const emotionalTriggerReportProducts: Record<EmotionalTriggerResultType, EmotionalTriggerReportProduct> = {
  rejection: {
    slug: 'rejection',
    displayName: 'The Rejection Trigger',
    reportTitle: 'The Full Report: The Rejection Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when you feel unwanted — and the cost of protecting yourself first.',
    whatYouGet: [
      'The origin of your sensitivity to rejection and what it was protecting',
      'Why you interpret neutrality as rejection before it\'s confirmed',
      'How your preemptive withdrawal creates the rejection you feared',
      'What people close to you experience when your trigger fires',
      'The micro-cues that activate your rejection response',
      'Your shadow side — how self-protection becomes self-sabotage',
      'The relationship dynamics that sustain vs. challenge this trigger',
      'What it looks like to stay present when the rejection fear spikes',
    ],
    whyItMatters:
      'Rejection sensitivity doesn\'t feel like a pattern. It feels like accurate perception. Like knowing when you\'re not wanted. This report shows you what\'s underneath: the signal that fires too early, too often — and the connections it costs you.',
    price: 99,
    currency: 'eur',
  },
  control: {
    slug: 'control',
    displayName: 'The Control Trigger',
    reportTitle: 'The Full Report: The Control Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when you feel trapped — and why freedom always comes at a relational cost.',
    whatYouGet: [
      'The original experience that made autonomy feel like survival',
      'Why help feels like control and suggestions feel like demands',
      'How your resistance reads to the people who trigger it',
      'What your closest relationships look like to the people inside them',
      'The micro-cues that activate your control trigger',
      'Your shadow side — how your autonomy drive creates distance you didn\'t choose',
      'The relationship types that challenge vs. activate this trigger',
      'What it looks like to stay in connection while maintaining real freedom',
    ],
    whyItMatters:
      'The control trigger doesn\'t feel like a sensitivity. It feels like reasonable resistance. Healthy boundaries. Knowing your limits. This report shows you what it looks like from the other side — and what it costs when freedom becomes your only priority.',
    price: 99,
    currency: 'eur',
  },
  disrespect: {
    slug: 'disrespect',
    displayName: 'The Disrespect Trigger',
    reportTitle: 'The Full Report: The Disrespect Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when you feel undervalued — and how it changes every room you\'re in.',
    whatYouGet: [
      'The wound that made your sense of value so sensitive to other people\'s regard',
      'Why you hear disrespect in disagreement, doubt, and even silence',
      'How your response to perceived disrespect reads to people around you',
      'What your closest relationships experience when this trigger fires',
      'The micro-cues that activate your disrespect response',
      'Your shadow side — how self-defense becomes aggression',
      'The relationship types that soothe vs. constantly activate this trigger',
      'What it looks like to hold your own value without needing others to confirm it',
    ],
    whyItMatters:
      'The disrespect trigger feels like self-respect. Like refusing to be treated badly. Like having standards. This report shows you the pattern that creates itself: how protecting your dignity can damage it — and what the people around you experience.',
    price: 99,
    currency: 'eur',
  },
  abandonment: {
    slug: 'abandonment',
    displayName: 'The Abandonment Trigger',
    reportTitle: 'The Full Report: The Abandonment Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when you sense someone leaving — and the pressure it creates.',
    whatYouGet: [
      'The early experience that wired your nervous system for abandonment detection',
      'Why you feel exits before they happen — and why you\'re sometimes wrong',
      'How your fear of abandonment creates the pressure that drives people away',
      'What people close to you experience when your trigger fires',
      'The micro-signals that activate your abandonment response',
      'Your shadow side — how love becomes surveillance and desperation',
      'The attachment types that trigger vs. stabilize your pattern',
      'What it looks like to sit with uncertainty without acting on it immediately',
    ],
    whyItMatters:
      'Abandonment sensitivity feels like devotion. Like caring so much it hurts. Like knowing what real loss feels like. This report shows you the loop: the fear, the behavior it creates, and the distance it produces in the people you most need to stay.',
    price: 99,
    currency: 'eur',
  },
  exposure: {
    slug: 'exposure',
    displayName: 'The Exposure Trigger',
    reportTitle: 'The Full Report: The Exposure Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when you feel seen without permission — and the energy it costs to stay hidden.',
    whatYouGet: [
      'What made being seen feel dangerous rather than safe',
      'Why visibility feels like vulnerability and criticism feels like attack',
      'How your self-concealment reads to people who want to know you',
      'What your closest relationships experience in your managed distance',
      'The micro-cues that activate your exposure response',
      'Your shadow side — how self-protection becomes emotional unavailability',
      'The relationship types that make you feel safest vs. most exposed',
      'What it looks like to be seen on your own terms without retreating',
    ],
    whyItMatters:
      'The exposure trigger feels like privacy. Like having a self you protect. Like appropriate emotional control. This report shows you what it costs: the intimacy you\'ve refused yourself, and the difference between privacy and hiding.',
    price: 99,
    currency: 'eur',
  },
  injustice: {
    slug: 'injustice',
    displayName: 'The Injustice Trigger',
    reportTitle: 'The Full Report: The Injustice Trigger',
    shortDescription: 'Your emotional trigger revealed. What fires when something feels unfair — and the cost of a justice instinct that never rests.',
    whatYouGet: [
      'The original experience that made fairness feel like a matter of survival',
      'Why your sense of injustice is both accurate and disproportionate',
      'How your need to name wrong reads to the people in your life',
      'What your closest relationships look like to the people inside them',
      'The micro-cues that activate your injustice response most intensely',
      'Your shadow side — when justice becomes rigidity and grievance',
      'The relationship types that share vs. exhaust your moral intensity',
      'What it looks like to witness injustice without being consumed by it',
    ],
    whyItMatters:
      'The injustice trigger feels righteous. Like clarity. Like being one of the few people willing to name what others ignore. This report shows you the pattern: when right and wrong becomes a cage, and what it costs you to live inside it.',
    price: 99,
    currency: 'eur',
  },
}
