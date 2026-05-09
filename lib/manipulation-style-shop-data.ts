import { ManipulationStyleResultType } from './manipulation-style-data'

export interface ManipulationStyleReportProduct {
  slug: ManipulationStyleResultType
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number
  currency: string
}

export const manipulationStyleReportProducts: Record<ManipulationStyleResultType, ManipulationStyleReportProduct> = {
  charmer: {
    slug: 'charmer',
    displayName: 'The Charmer',
    reportTitle: 'The Full Report: The Charmer',
    shortDescription: 'Your manipulation style revealed. The magnetic pull you create and what it costs everyone involved.',
    whatYouGet: [
      'The fear beneath your charm and what you\'re really trying to secure',
      'Why you perform even when no performance is needed',
      'How your charm reads to people once the spell starts to wear off',
      'What your closest relationships look like from the other side',
      'The triggers that make you turn the charm up or weaponize it',
      'Your dark side — when charm becomes a tool of deliberate harm',
      'The relationship types most vulnerable to your influence',
      'What authentic connection looks like without the performance',
    ],
    whyItMatters:
      'Charm doesn\'t feel like manipulation. It feels like being good with people. Natural. Likeable. This report shows you what\'s underneath: the need, the strategy, the cost — and the exhaustion of performing a self that isn\'t quite real.',
    price: 99,
    currency: 'eur',
  },
  strategist: {
    slug: 'strategist',
    displayName: 'The Strategist',
    reportTitle: 'The Full Report: The Strategist',
    shortDescription: 'Your manipulation style revealed. The calculated moves you make and the relationships that suffer for them.',
    whatYouGet: [
      'The core driver beneath your need to see and control the board',
      'Why information feels like safety and why you hoard it',
      'How your strategic approach reads to people who realize what\'s happening',
      'What your relationships look like to the people inside them',
      'The triggers that push you from analysis into active manipulation',
      'Your dark side — when strategy becomes deliberate psychological harm',
      'The personality types most affected by your approach',
      'What it looks like to engage honestly without losing your sharpness',
    ],
    whyItMatters:
      'Strategic thinking doesn\'t feel like manipulation. It feels like preparation. Intelligence. Self-protection. This report names what\'s really happening: the patterns, the power games, and the cost to the people who trusted you.',
    price: 99,
    currency: 'eur',
  },
  guiltmaker: {
    slug: 'guiltmaker',
    displayName: 'The Guilt-Maker',
    reportTitle: 'The Full Report: The Guilt-Maker',
    shortDescription: 'Your manipulation style revealed. The quiet power of making others feel responsible — and the wound that drives it.',
    whatYouGet: [
      'The pain beneath your use of guilt as leverage',
      'Why making others feel responsible feels better than asking directly',
      'How people experience your guilt induction even when you don\'t name it',
      'What your long-term relationships look like from the other side',
      'The triggers that activate your guilt-making most intensely',
      'Your dark side — how guilt becomes a long-term control mechanism',
      'The personality types who absorb your guilt most readily',
      'What direct asking feels like — and why it\'s harder but healthier',
    ],
    whyItMatters:
      'Guilt-making doesn\'t feel like manipulation. It feels like expressing hurt. Needing to be seen. Wanting accountability. This report shows you what\'s really happening underneath the grievance — and what it costs the people who love you.',
    price: 99,
    currency: 'eur',
  },
  withholder: {
    slug: 'withholder',
    displayName: 'The Withholder',
    reportTitle: 'The Full Report: The Withholder',
    shortDescription: 'Your manipulation style revealed. The power of silence and absence — and the damage it quietly does.',
    whatYouGet: [
      'Why withholding feels like dignity and not punishment',
      'The fear beneath your use of silence as leverage',
      'How your withdrawals read to people on the receiving end',
      'What your relationships look like to the people inside them',
      'The triggers that cause you to shut down and withhold most',
      'Your dark side — when silence becomes a sustained form of cruelty',
      'The personality types most destabilized by your withdrawal',
      'What transparent communication feels like and why it\'s worth the exposure',
    ],
    whyItMatters:
      'Withholding feels composed. Dignified. Self-protective. This report names what it is from the other side: a form of control that punishes without accountability, and the cost it accumulates in every relationship where it appears.',
    price: 99,
    currency: 'eur',
  },
  performer: {
    slug: 'performer',
    displayName: 'The Performer',
    reportTitle: 'The Full Report: The Performer',
    shortDescription: 'Your manipulation style revealed. The emotional displays that move people — and what you\'re really communicating.',
    whatYouGet: [
      'The unmet need beneath your emotional performances',
      'Why amplification feels more honest than understatement',
      'How your intensity reads to people who\'ve watched it before',
      'What your relationships look like to the people who absorb your performances',
      'The triggers that activate your most dramatic emotional displays',
      'Your dark side — when performance becomes emotional coercion',
      'The personality types who respond to your performances vs. disengage',
      'What regulated emotional expression costs — and what it builds',
    ],
    whyItMatters:
      'Emotional intensity doesn\'t feel like manipulation. It feels like passion. Authenticity. Caring deeply. This report shows you the pattern your intensity creates in others — and the difference between expressing emotion and using it.',
    price: 99,
    currency: 'eur',
  },
  pressurepoint: {
    slug: 'pressurepoint',
    displayName: 'The Pressure Point',
    reportTitle: 'The Full Report: The Pressure Point',
    shortDescription: 'Your manipulation style revealed. The precision with which you find and press weaknesses — and what it reveals about you.',
    whatYouGet: [
      'Why you can find vulnerabilities faster than most people build trust',
      'The early experience that made reading weakness feel necessary',
      'How people experience your precision once they realize what\'s happening',
      'What your closest relationships look like to the people inside them',
      'The triggers that make you reach for someone\'s pressure points',
      'Your dark side — when insight becomes a weapon you use deliberately',
      'The relationship types most damaged by your approach',
      'What using your perceptiveness for connection instead of leverage looks like',
    ],
    whyItMatters:
      'Finding pressure points doesn\'t feel malicious. It feels like understanding people. Like being perceptive. This report names what\'s really underneath: the power dynamic you create, the cost to trust, and the difference between insight and exploitation.',
    price: 99,
    currency: 'eur',
  },
}
