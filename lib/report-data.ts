import { ResultType } from './quiz-data'

export interface FullReport {
  displayName: string
  summary: string
  psychProfile: string
  hiddenStrength: string
  toxicTrait: string
  relationshipPattern: string
  howPeopleExperienceYou: string
  whatTriggersYou: string
  darkSideUnderStress: string
  bestMatch: string
  worstMatch: string
  typeSystem: string
  howToImprove: string
  shareableText: string
}

export const reports: Record<ResultType, FullReport> = {
  strategist: {
    displayName: 'The Strategist',
    summary:
      'You don\'t just think ahead—you architect outcomes. Every move is calculated, every relationship mapped, every outcome engineered. While others react, you\'re three steps forward, seeing patterns and power dynamics invisible to everyone else. Your emotional control isn\'t coldness; it\'s precision. You value influence over noise, impact over approval.',
    psychProfile:
      'Core Driver: Control through information and strategic advantage\nCore Fear: Incompetence, loss of control, being manipulated\nDecision Style: Calculated multi-step thinking, long-term optimization\nAttachment Style: Avoidant, transactional, self-reliant',
    hiddenStrength:
      'You see what others miss. While people fumble through emotions, you\'ve already mapped the terrain. Your ability to navigate complexity with precision is rare. You understand hidden motivations and leverage before anyone else even sees them.',
    toxicTrait:
      'Your ruthlessness. People are chess pieces. When someone becomes an obstacle, you don\'t hesitate to move them. Relationships are utilities. You are capable of profound harm to those closest to you if it serves your agenda.',
    relationshipPattern:
      'You choose partners who don\'t require emotional performance. Distance keeps you safe. You assess compatibility like a contract—intellectual fit, practical alignment, mutual benefit. You\'re reliable once committed, but vulnerable? Never. Your partners feel like they\'re dating a strategic consultant.',
    howPeopleExperienceYou:
      'Intelligent. Composed. Intimidating. People respect you but sense a part of you they\'ll never reach. You\'re respected, not loved. Some find you magnetic; most find you cold.',
    whatTriggersYou:
      'Incompetence. Emotional chaos. Illogic. Losing control. Being patronized. Unpredictability—it defeats your planning.',
    darkSideUnderStress:
      'You weaponize your intelligence. Everyone becomes useful or disposable. Trust evaporates. You operate in pure survival mode, executing harm with surgical precision.',
    bestMatch:
      'The Mirror (understands the game, won\'t judge you for playing it) or The Ghost (emotionally distant, won\'t demand vulnerability from you).',
    worstMatch:
      'The Rebel (chaos opposes your order) or The Charmer (charisma-driven, will try to seduce your guard down—which you\'ll read as weakness).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Not everything is a game to win. Vulnerability isn\'t weakness—it\'s the only path to real connection. Question: Is your distance protection, or is it a prison?',
    shareableText: 'I am The Strategist. I think before I move, read patterns quickly, and prefer influence over noise. #DarkType',
  },
  charmer: {
    displayName: 'The Charmer',
    summary:
      'You have a supernatural ability to make people want to give you what you want. You read human psychology like a blueprint—what they need, what they fear, which buttons to press. Your charm isn\'t luck; it\'s a refined instrument. You thrive on being desired. Your power is intoxicating. Your danger is real: you can make anyone believe anything about you.',
    psychProfile:
      'Core Driver: Attention, validation, being desired\nCore Fear: Invisibility, irrelevance, exposure\nDecision Style: Intuitive, opportunistic, attention-seeking\nAttachment Style: Anxious, shallow, conditional',
    hiddenStrength:
      'Genuine emotional intelligence. You read rooms instantly. You know exactly what to say and when. Your empathy is real—you understand people\'s depths. You just weaponize it.',
    toxicTrait:
      'Calculated manipulation without remorse. You discard people the moment they stop serving you. Love is shallow. You can make someone feel like their entire world, then vanish without guilt.',
    relationshipPattern:
      'You need constant attention like oxygen. You\'re drawn to admirers who feed your ego. You perform intimacy while hiding your true self. Easily bored. Prone to infidelity. Your partners eventually realize they never knew you.',
    howPeopleExperienceYou:
      'Captivating. Irresistible. Special—until they realize everyone feels that way. You\'re remembered as magnetic but fundamentally fake. Betrayal is the common emotion from those who see through you.',
    whatTriggersYou:
      'Being ignored. Being replaced. Loss of attention. Exposure. Criticism. Anyone who doesn\'t fall for your act.',
    darkSideUnderStress:
      'You weaponize charm into psychological abuse. You gaslight. You destroy reputations. Your manipulation becomes cruel and calculated.',
    bestMatch:
      'The Strategist (you both understand the game, won\'t judge the playing) or The Protector (if they give you the constant attention you need).',
    worstMatch:
      'The Ghost (emotionally distant, immune to your charm) or The Mirror (they can mimic you, exposing your entire act).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Real self-worth doesn\'t come from external validation. Your charm is wasted on manipulation alone. Ask: Do I actually like anyone, or do I just like being liked?',
    shareableText: 'I am The Charmer. I understand people fast and know how to create attraction and trust. #DarkType',
  },
  rebel: {
    displayName: 'The Rebel',
    summary:
      'You are allergic to control. Rules, systems, relationships—anything that confines you is your enemy. You move by instinct, not logic. You resist. You challenge. Your freedom is non-negotiable. You\'re impulsive, unpredictable, and you prefer it that way. Burning bridges is cheaper than building cages.',
    psychProfile:
      'Core Driver: Freedom, autonomy, rejecting boundaries\nCore Fear: Entrapment, expectations, being controlled\nDecision Style: Impulsive, instinct-driven, reactive\nAttachment Style: Avoidant, dismissive, escape-oriented',
    hiddenStrength:
      'Authenticity. You don\'t perform or mask. You say what you mean. That\'s rare. Your refusal to conform inspires people, even those who fear you.',
    toxicTrait:
      'Zero accountability for damage caused. Your impulsivity hurts people and you justify it as their weakness. You destroy without remorse. Your freedom costs others everything.',
    relationshipPattern:
      'You cannot stay, even with people you love. Commitment feels like a cage. You\'re magnetic at the start when things are limitless. Once defined, you disappear. Partners feel abandoned and baffled.',
    howPeopleExperienceYou:
      'Exciting. Dangerous. Unreliable. You\'re intoxicating until they realize you\'ll never fully commit. People either idealize you or resent you. Few sustain relationships with you.',
    whatTriggersYou:
      'Expectations. Restrictions. Judgment. Boredom. Control. Anyone telling you what to do.',
    darkSideUnderStress:
      'You become reckless and cruel. Your rebellion turns destructive. You hurt people not because they deserve it, but because you can. You abandon everyone who depends on you.',
    bestMatch:
      'Another Rebel (if mature—you both understand the need for freedom) or The Ghost (emotionally distant, won\'t demand you stay).',
    worstMatch:
      'The Protector (will lock you down completely) or The Strategist (will try to control you through logic).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Real freedom isn\'t rejecting everything—it\'s choosing what matters. Commitment is strength, not weakness. Not every rule is a cage. Challenge authority, but learn to build instead of just destroy.',
    shareableText: 'I am The Rebel. I resist control and choose freedom over comfort. I challenge rules and live by instinct. #DarkType',
  },
  ghost: {
    displayName: 'The Ghost',
    summary:
      'You survive through invisibility. Presence is exposure. You don\'t share—revealing yourself is liability. You observe from the margins: present but unreachable, watching but not participating. Attachments require vulnerability. Vulnerability is danger. Your isolation is both shield and prison.',
    psychProfile:
      'Core Driver: Safety through distance and invisibility\nCore Fear: Vulnerability, exposure, losing control of privacy\nDecision Style: Withdrawn, observational, avoidant\nAttachment Style: Avoidant, detached, self-protective',
    hiddenStrength:
      'Independence. You\'re immune to control and leverage. People can\'t hurt you with what you don\'t reveal. You observe what others miss. Your silence is powerful.',
    toxicTrait:
      'Emotional unavailability weaponized. You disappear without words, leaving people confused and stranded. Your coldness punishes. You use people for convenience only.',
    relationshipPattern:
      'You avoid relationships. When trapped, you maintain distance. Physically present, emotionally absent. You don\'t fight—you vanish. People stay hoping you\'ll open up. You never do.',
    howPeopleExperienceYou:
      'Enigmatic. Cold. Unreachable. Dangerous because unpredictable. No one knows you. People feel intrigued but unsafe.',
    whatTriggersYou:
      'Emotional demands. Questions about yourself. People getting close. Expectations to commit. Being analyzed. Privacy violations.',
    darkSideUnderStress:
      'Completely unreachable. You disappear physically or emotionally. You withdraw support and leave people abandoned. Your silence becomes suffocating.',
    bestMatch:
      'Another Ghost (both understand distance) or The Strategist (won\'t demand emotions from you).',
    worstMatch:
      'The Charmer (will see you as a challenge to break) or The Protector (will demand you let them in).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Distance protected you once. It\'s not serving you anymore. Let one person closer. Real safety comes from connection. Your voice matters as much as your silence. Ask: Am I protecting, or hiding?',
    shareableText: 'I am The Ghost. I am hard to read, protect myself through distance, and disappear when things get intense. #DarkType',
  },
  mirror: {
    displayName: 'The Mirror',
    summary:
      'You have no fixed identity. You shape-shift based on what\'s needed. You notice what people want from you and become it. This is your power and your emptiness. You\'re not dishonest—you\'re pragmatic. You understand: the version of you that survives is the version that fits. You bend. You adapt. But where are you in all of this?',
    psychProfile:
      'Core Driver: Adaptation, control through mirroring, survival\nCore Fear: Being pinned down, exposure, losing control of narrative\nDecision Style: Adaptive, opportunistic, situational\nAttachment Style: Anxious-avoidant, conditional, performative',
    hiddenStrength:
      'You can navigate anything. You read people deeply and adjust flawlessly. You see what others are attempting before they attempt it. You\'re hard to manipulate because you\'re always observing.',
    toxicTrait:
      'Complete absence of authentic self. You\'ll be anyone to get what you want. You\'re a con artist by nature. No one knows you. You weaponize people\'s expectations against them.',
    relationshipPattern:
      'You become what your partner needs—until they stop serving you. You\'re attentive and responsive, feeling special. Then they realize you never revealed yourself. You leave without explanation.',
    howPeopleExperienceYou:
      'Changeable. Hard to pin down. Interesting because you seem to understand them. Unsettling because something\'s always off. They can\'t trust you.',
    whatTriggersYou:
      'Being defined. People who refuse your act. Situations where adaptability fails. Being questioned about your authenticity.',
    darkSideUnderStress:
      'You shape-shift into actively harmful versions. You manipulate multiple people simultaneously. You become cruel when your performance stops working.',
    bestMatch:
      'The Strategist (you both understand the game) or The Charmer (you both understand performance).',
    worstMatch:
      'The Protector (will demand authenticity) or The Ghost (neither of you is real—connection becomes impossible).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Develop an actual self. Adaptability is useful; authenticity is powerful. Ask: Is there a version of me that exists without an audience? What do I actually want? Real power comes from being genuine, not from being everything to everyone.',
    shareableText: 'I am The Mirror. I adapt to the room and become what people need. I notice what gives me control. #DarkType',
  },
  protector: {
    displayName: 'The Protector',
    summary:
      'Your darkness is defense. You\'re intense because you\'re terrified of losing what matters. Your suspicion is learned. Your loyalty is absolute. Your willingness to use force is real. You\'ve built yourself into an impenetrable shield. Vulnerability is your greatest fear, so you never allow it. You protect fiercely. You also control fiercely.',
    psychProfile:
      'Core Driver: Protecting what matters through control and loyalty\nCore Fear: Betrayal, loss, vulnerability, disloyalty\nDecision Style: Protective, defensive, committed\nAttachment Style: Anxious, possessive, intense',
    hiddenStrength:
      'Genuine loyalty and commitment. You fight for what you care about without hesitation. Your intensity is protective, not destructive. You can love deeply. Those in your inner circle can trust you completely.',
    toxicTrait:
      'Control masquerading as protection. You make decisions for others "for their own good." You isolate people by deciding who\'s safe. Your jealousy poisons. You punish disloyalty severely.',
    relationshipPattern:
      'You\'re drawn to people who need protecting. You invest quickly and create a fortress of two. Outsiders are threats. Your partner must accept your control as care. Betrayal triggers fury.',
    howPeopleExperienceYou:
      'Intense. Loyal. Possessive. Those close to you feel protected and valued. Those outside your circle feel judged and blocked. Your relationships feel like us-against-the-world.',
    whatTriggersYou:
      'Betrayal. Disloyalty. Threats to your circle. Questions about your decisions. Loss of control. Weakness—in yourself or others.',
    darkSideUnderStress:
      'Paranoid and controlling. Your protection becomes suffocating. You isolate loved ones completely. Your suspicion becomes a self-fulfilling prophecy.',
    bestMatch:
      'The Charmer (if they accept your intensity) or The Mirror (if willing to be authentic). Another Protector understands your loyalty needs.',
    worstMatch:
      'The Rebel (your control is their nightmare) or The Ghost (you\'ll exhaust yourself trying to reach them).',
    typeSystem:
      'The Strategist — logical and calculated, architecting outcomes through strategy and information\nThe Charmer — charismatic and manipulative, controlling through charm and seduction\nThe Rebel — freedom-driven and impulsive, rejecting control and living by instinct\nThe Ghost — emotionally distant, surviving through invisibility and withdrawal\nThe Mirror — adaptive and shape-shifting, controlling through mirroring and adaptation\nThe Protector — intense and loyal, controlling through protection and defense',
    howToImprove:
      'Trust that those you love can choose for themselves. Your protection is valued; control is suffocating. Letting go isn\'t betrayal. Distinguish protecting from imprisoning. Ask: Am I protecting them, or imprisoning them?',
    shareableText: 'I am The Protector. I seem intense, but my darkness comes from defense. Loyalty and control are how I protect what matters. #DarkType',
  },
}
