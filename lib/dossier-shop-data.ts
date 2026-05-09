import { ResultType } from './quiz-data'

export interface DossierProduct {
  slug: ResultType
  displayName: string
  productTitle: string
  shortDescription: string
  coverImage: string
  whatIsInside: string[]
  selfMasterySection: string
  originalPrice: string
  launchPrice: string
  originalPriceCents: number
  launchPriceCents: number
  pageCount: number
  pdfPath: string
  available: boolean
}

export const dossierProducts: Record<ResultType, DossierProduct> = {
  strategist: {
    slug: 'strategist',
    displayName: 'The Strategist',
    productTitle: 'The Strategist Dossier',
    shortDescription: 'A 50-page psychological dossier on how you architect outcomes, control through information, and the real cost of your distance.',
    coverImage: '/shop/dossier-covers/thestrategist.png',
    whatIsInside: [
      'The core psychological pattern driving your need for control and information dominance',
      'How your emotional control developed and what it actually protects you from',
      'The hidden strength in your strategic thinking—and how it isolates you',
      'Your blind spots: why people feel like chess pieces to you, and the cost of viewing relationships as utilities',
      'Behavioral loops: the patterns you repeat in relationships and work that sabotage deeper connection',
      'Your shadow self: what emerges when control is threatened, and how you weaponize intelligence under stress',
      'Self-mastery map: how to use your strategic brilliance without becoming ruthless',
      'Reflection prompts: questions designed to expose what you\'ve been avoiding',
    ],
    selfMasterySection:
      'You think your distance is protection. It\'s become a prison. This dossier maps exactly how your need for control undermines the very connections you strategically calculate. Not to change you—but to show you what you\'re actually choosing. The dossier includes 12 reflection prompts designed to expose the patterns you navigate unconsciously, and a practical framework for wielding your strategic nature without weaponizing it.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/strategist-dossier.pdf',
    available: false,
  },
  charmer: {
    slug: 'charmer',
    displayName: 'The Charmer',
    productTitle: 'The Charmer Dossier',
    shortDescription: 'A 50-page psychological dossier on how you seduce through charm, perform to maintain relevance, and the real cost of needing to be wanted.',
    coverImage: '/shop/dossier-covers/thecharmer.png',
    whatIsInside: [
      'The core psychological pattern driving your need for attention and magnetic presence',
      'How your charm developed and what emotional void it actually fills',
      'The hidden strength in your charisma—and how it masks deeper insecurity',
      'Your blind spots: why people feel like mirrors for your validation, and the cost of performing instead of connecting',
      'Behavioral loops: the patterns you repeat in relationships where you seduce then disappear',
      'Your shadow self: what emerges when attention fades, and how you weaponize charm into manipulation under stress',
      'Self-mastery map: how to use your magnetic nature without needing the constant validation it provides',
      'Reflection prompts: questions designed to expose the performer behind the performance',
    ],
    selfMasterySection:
      'You think your charm is a gift. It\'s become a cage. This dossier maps exactly how your need for attention keeps you shallow, addicted to the rush of being wanted, and terrified of being truly seen. Not to change you—but to show you what your charm is actually protecting. The dossier includes 12 reflection prompts designed to expose the performer you\'ve perfected, and a practical framework for connecting without needing to seduce.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/charmer-dossier.pdf',
    available: false,
  },
  rebel: {
    slug: 'rebel',
    displayName: 'The Rebel',
    productTitle: 'The Rebel Dossier',
    shortDescription: 'A 50-page psychological dossier on how you sabotage commitment, confuse freedom with recklessness, and the real cost of rejecting everything.',
    coverImage: '/shop/dossier-covers/therebel.png',
    whatIsInside: [
      'The core psychological pattern driving your compulsive need to break free and defy structure',
      'How your rebellion developed and what control you\'re actually running from',
      'The hidden strength in your refusal to comply—and how it leaves you alone',
      'Your blind spots: why you cannot stay, and the cost of treating every commitment as a prison',
      'Behavioral loops: the patterns you repeat where you destroy what you build before it can contain you',
      'Your shadow self: what emerges when you\'re actually trapped, and how your freedom becomes recklessness under stress',
      'Self-mastery map: how to channel your freedom drive into something that lasts',
      'Reflection prompts: questions designed to expose what you\'re actually running toward',
    ],
    selfMasterySection:
      'You think your rebellion is freedom. It\'s actually a cage you carry everywhere. This dossier maps exactly how your compulsion to escape keeps you rootless, addicted to the rush of rebellion, and incapable of building anything lasting. Not to change you—but to show you what you\'re actually resisting. The dossier includes 12 reflection prompts designed to expose the pattern beneath every exit, and a practical framework for freedom that doesn\'t require destruction.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/rebel-dossier.pdf',
    available: false,
  },
  ghost: {
    slug: 'ghost',
    displayName: 'The Ghost',
    productTitle: 'The Ghost Dossier',
    shortDescription: 'A 50-page psychological dossier on how you disappear to survive, confuse distance with safety, and the real cost of invisibility.',
    coverImage: '/shop/dossier-covers/theghost.png',
    whatIsInside: [
      'The core psychological pattern driving your need to withdraw and vanish under pressure',
      'How your disappearing act developed and what vulnerability you\'re actually avoiding',
      'The hidden strength in your ability to survive alone—and how it isolates you completely',
      'Your blind spots: why you vanish when things get real, and the cost of using distance as your primary defense',
      'Behavioral loops: the patterns you repeat where you create intimacy then sabotage it through withdrawal',
      'Your shadow self: what emerges when you can\'t escape, and how your silence becomes weaponized under stress',
      'Self-mastery map: how to use your capacity for solitude without using it as a prison',
      'Reflection prompts: questions designed to expose what you\'re hiding from',
    ],
    selfMasterySection:
      'You think your silence is safety. It\'s actually a slow disappearance. This dossier maps exactly how your avoidance keeps you isolated, addicted to the false peace of invisibility, and incapable of real connection. Not to change you—but to show you what you\'re protecting yourself from. The dossier includes 12 reflection prompts designed to expose the fear beneath every retreat, and a practical framework for presence that doesn\'t require exposure.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/ghost-dossier.pdf',
    available: false,
  },
  mirror: {
    slug: 'mirror',
    displayName: 'The Mirror',
    productTitle: 'The Mirror Dossier',
    shortDescription: 'A 50-page psychological dossier on how you shape-shift to survive, confuse adaptation with authenticity, and the real cost of having no true self.',
    coverImage: '/shop/dossier-covers/themirror.png',
    whatIsInside: [
      'The core psychological pattern driving your compulsive need to mirror and adapt to everyone around you',
      'How your shape-shifting developed and what authentic self you\'re actually hiding',
      'The hidden strength in your adaptability—and how it erases your identity entirely',
      'Your blind spots: why you never show your true self, and the cost of being everything to everyone',
      'Behavioral loops: the patterns you repeat where you become whoever is needed, then resent them for needing you',
      'Your shadow self: what emerges when you can\'t adapt, and how you become unpredictably cruel under stress',
      'Self-mastery map: how to use your adaptability without losing yourself in the process',
      'Reflection prompts: questions designed to expose the person underneath all the mirrors',
    ],
    selfMasterySection:
      'You think your adaptability is a superpower. It\'s actually a dissociation. This dossier maps exactly how your mirroring keeps you invisible, addicted to the safety of being needed, and incapable of knowing who you actually are. Not to change you—but to show you what you\'ve been avoiding. The dossier includes 12 reflection prompts designed to expose the authentic self you\'ve abandoned, and a practical framework for adaptation that doesn\'t require self-erasure.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/mirror-dossier.pdf',
    available: false,
  },
  protector: {
    slug: 'protector',
    displayName: 'The Protector',
    productTitle: 'The Protector Dossier',
    shortDescription: 'A 50-page psychological dossier on how you defend through control, confuse protection with love, and the real cost of your intensity.',
    coverImage: '/shop/dossier-covers/theprotector.png',
    whatIsInside: [
      'The core psychological pattern driving your intense need to protect and control outcomes',
      'How your protective instinct developed and what loss you\'re actually trying to prevent',
      'The hidden strength in your loyalty—and how it becomes suffocating control',
      'Your blind spots: why you treat loved ones as projects to fix, and the cost of control disguised as care',
      'Behavioral loops: the patterns you repeat where you protect until people feel imprisoned',
      'Your shadow self: what emerges when you lose control, and how your protection becomes weaponized cruelty under stress',
      'Self-mastery map: how to channel your protective nature without becoming controlling',
      'Reflection prompts: questions designed to expose the fear beneath every defense',
    ],
    selfMasterySection:
      'You think your intensity is devotion. It\'s actually domination. This dossier maps exactly how your need to protect keeps people trapped, addicted to the role of defender, and incapable of allowing others autonomy. Not to change you—but to show you what your protection is actually defending against. The dossier includes 12 reflection prompts designed to expose the insecurity beneath every defense, and a practical framework for loyalty that doesn\'t require control.',
    originalPrice: '€4.99',
    launchPrice: '€2.99',
    originalPriceCents: 499,
    launchPriceCents: 299,
    pageCount: 50,
    pdfPath: '/public/reports/protector-dossier.pdf',
    available: false,
  },
}
