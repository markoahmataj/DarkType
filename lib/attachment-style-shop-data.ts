import { AttachmentStyleResultType } from './attachment-style-data'

export interface AttachmentStyleReportProduct {
  slug: AttachmentStyleResultType
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number
  currency: string
}

export const attachmentStyleReportProducts: Record<AttachmentStyleResultType, AttachmentStyleReportProduct> = {
  anchor: {
    slug: 'anchor',
    displayName: 'The Anchor',
    reportTitle: 'The Full Report: The Anchor',
    shortDescription: 'Your attachment style revealed. The secure foundation beneath you and what it costs when others can\'t match it.',
    whatYouGet: [
      'The core of what makes you securely attached and how it developed',
      'The hidden costs of being the stable one in every relationship',
      'How your stability can become inadvertent pressure on anxious partners',
      'What you experience when someone can\'t meet your steadiness',
      'The subtle triggers that can shake even your equilibrium',
      'Your shadow side — what security looks like when it becomes complacency',
      'The attachment types you attract and why',
      'What growth looks like when you\'ve already done so much right',
    ],
    whyItMatters:
      'Secure attachment isn\'t the same as no pattern. Even Anchors have blindspots — about what they require, who they attract, and what they inadvertently demand. This report shows you the full picture of your attachment style, not just the part that sounds like a compliment.',
    price: 99,
    currency: 'eur',
  },
  clinger: {
    slug: 'clinger',
    displayName: 'The Clinger',
    reportTitle: 'The Full Report: The Clinger',
    shortDescription: 'Your attachment style revealed. The anxious pursuit of closeness and the distance it creates.',
    whatYouGet: [
      'The early relational wound that made closeness feel urgent',
      'Why reassurance never quite works and what you\'re actually looking for',
      'How your pursuit of closeness creates the distance you fear',
      'What your partners experience in the early and late stages of relationships with you',
      'The triggers that spike your anxiety and activate your clinging',
      'Your shadow side — how love becomes surveillance and pressure',
      'The attachment types you attract and the dynamics they create',
      'What secure attachment actually feels like and how to build toward it',
    ],
    whyItMatters:
      'Anxious attachment doesn\'t feel anxious from the inside. It feels like love. Intensity. Devotion. This report shows you what\'s underneath: the fear, the patterns, the cost — and why the things you do to feel close keep creating distance.',
    price: 99,
    currency: 'eur',
  },
  fortress: {
    slug: 'fortress',
    displayName: 'The Fortress',
    reportTitle: 'The Full Report: The Fortress',
    shortDescription: 'Your attachment style revealed. The avoidant distance that protects and isolates in equal measure.',
    whatYouGet: [
      'What made closeness feel threatening and independence feel like safety',
      'Why your self-sufficiency is both genuine and defensive',
      'How your distance pattern reads to the people who want to get close',
      'What intimacy actually triggers in you beneath the composure',
      'The specific moments that cause you to pull back hardest',
      'Your shadow side — when independence becomes cruelty',
      'The attachment types you attract and the dynamics that follow',
      'What it looks like to let someone in without losing yourself',
    ],
    whyItMatters:
      'Avoidant attachment looks like strength. Self-reliance. Knowing what you need. This report dismantles the story and shows you what\'s really there: the emotional history that made walls feel necessary, and what you sacrifice every time you keep them up.',
    price: 99,
    currency: 'eur',
  },
  runner: {
    slug: 'runner',
    displayName: 'The Runner',
    reportTitle: 'The Full Report: The Runner',
    shortDescription: 'Your attachment style revealed. The compulsion to exit before you can be hurt — and the hurt it creates anyway.',
    whatYouGet: [
      'The fear that activates your impulse to leave before things get real',
      'Why closeness and threat feel like the same thing',
      'How your exits damage the relationships you actually wanted',
      'What the people you leave experience in your patterns',
      'The specific triggers that make staying feel impossible',
      'Your shadow side — how your disappearing acts become a form of harm',
      'The attachment types that can hold you long enough to matter',
      'What it costs to stay — and what becomes possible when you do',
    ],
    whyItMatters:
      'Leaving feels like self-preservation. Like knowing your limits. Like freedom. This report names the part you don\'t see: what you\'re actually running from, what you never resolve by leaving, and the pattern that follows you everywhere you go.',
    price: 99,
    currency: 'eur',
  },
  pushpull: {
    slug: 'pushpull',
    displayName: 'The Push-Pull',
    reportTitle: 'The Full Report: The Push-Pull',
    shortDescription: 'Your attachment style revealed. The disorganized cycle of craving and rejecting — and what drives it.',
    whatYouGet: [
      'The early relational experience that created your contradictory attachment needs',
      'Why you want closeness and push it away in the same breath',
      'How your cycles destabilize even the most patient partners',
      'What the people you cycle with experience over time',
      'The triggers that shift you from drawing in to pushing away',
      'Your shadow side — how confusion becomes cruelty without intent',
      'The attachment types drawn into your cycle and why',
      'What stability feels like and how to build toward it',
    ],
    whyItMatters:
      'Push-pull doesn\'t feel like a pattern from the inside — it feels like responding honestly to what the relationship is doing. This report shows you the full cycle: the engine, the triggers, the cost to you and the people caught in it with you.',
    price: 99,
    currency: 'eur',
  },
  watcher: {
    slug: 'watcher',
    displayName: 'The Watcher',
    reportTitle: 'The Full Report: The Watcher',
    shortDescription: 'Your attachment style revealed. The hypervigilant monitoring of relationships and the exhaustion it creates.',
    whatYouGet: [
      'What made observation feel safer than participation',
      'How hypervigilance protected you once and limits you now',
      'What your monitoring costs in the relationships that matter most',
      'What the people you watch actually experience under your gaze',
      'The micro-signals that activate your tracking instinct',
      'Your shadow side — when watching becomes distrust and control',
      'The attachment types who feel seen vs. surveilled by you',
      'What it looks like to trust without constant monitoring',
    ],
    whyItMatters:
      'Watching feels like care. Attentiveness. Emotional intelligence. This report shows you the other side: the vigilance that keeps you from ever really relaxing into connection, and what becomes possible when you stop scanning and start trusting.',
    price: 99,
    currency: 'eur',
  },
}
