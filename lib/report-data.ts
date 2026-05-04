import { ResultType } from './quiz-data'

export interface FullReport {
  displayName: string
  summary: string
  hiddenStrength: string
  toxicTrait: string
  relationshipPattern: string
  howPeopleExperienceYou: string
  whatTriggersYou: string
  darkSideUnderStress: string
  bestMatch: string
  worstMatch: string
  howToImprove: string
  shareableText: string
}

export const reports: Record<ResultType, FullReport> = {
  strategist: {
    displayName: 'The Strategist',
    summary:
      'You are a master of patterns and power dynamics. Your mind naturally calculates multiple moves ahead. You see the world as a strategic game where every interaction, relationship, and decision is a piece to be positioned. Your emotional control is your greatest asset—you rarely act on impulse, preferring calculated responses that serve your long-term interests. You value influence over popularity and power over noise.',
    hiddenStrength:
      'Your ability to see the bigger picture and plan accordingly. While others react, you anticipate. You can navigate complex social and professional situations with precision because you understand motivations and hidden agendas before anyone else.',
    toxicTrait:
      'Your ruthlessness. When your goals require it, you can discard people without hesitation. Your strategic thinking can become sociopathic—you view relationships as utilities rather than connections. You are capable of hurting people you care about if they become obstacles.',
    relationshipPattern:
      'You choose partners who respect your independence and don\'t require constant emotional availability. You maintain a degree of distance that keeps you safe. In romance, you are pragmatic—you assess compatibility on intellectual and practical levels. Once committed, you are reliable, but rarely vulnerable. Your partners often feel like they\'re dating a chess player.',
    howPeopleExperienceYou:
      'As intelligent, composed, and somewhat intimidating. People trust your judgment but feel there\'s a part of you they will never access. You are respected rather than loved. Some find you magnetic; others find you cold.',
    whatTriggersYou:
      'Incompetence, emotional outbursts, people who can\'t think clearly, and situations where you lose control. You hate being patronized or manipulated. Chaos infuriates you because it is unpredictable.',
    darkSideUnderStress:
      'You become cold, withdrawn, and strategically vindictive. Your logic becomes weaponized. You view everyone around you as either useful or expendable. Trust collapses entirely, and you operate in pure self-preservation mode.',
    bestMatch:
      'The Mirror or The Ghost. The Mirror understands your need for control and won\'t push for vulnerability. The Ghost won\'t demand emotional labor you\'re unwilling to provide.',
    worstMatch:
      'The Rebel. Their chaos directly opposes your need for order and control. The Charmer can also be dangerous—they may see you as a challenge to seduce, which you will see as weakness.',
    howToImprove:
      'Practice vulnerability without viewing it as weakness. Your emotional control is powerful, but it costs you genuine connection. Recognize that not everything is a game to be won. Some relationships matter more than the strategy within them. Question whether your distance is protection or prison.',
    shareableText: 'I am The Strategist. I think before I move, read patterns quickly, and prefer influence over noise. #DarkType',
  },
  charmer: {
    displayName: 'The Charmer',
    summary:
      'You have an almost supernatural ability to make people want to give you what you want. You understand human psychology on an instinctive level—you know what people need, what they fear, and exactly which strings to pull. Your charm isn\'t accidental; it\'s a highly refined tool. You thrive on attention and the intoxication of being desired. Your greatest strength is also your greatest danger: you can make anyone believe anything about you.',
    hiddenStrength:
      'Your emotional intelligence and genuine ability to understand people. You can read a room instantly and know exactly what needs to be said and done. You connect with people in ways that make them feel seen, at least in the moment. Your capacity for empathy is real—you just use it strategically.',
    toxicTrait:
      'Your capacity for calculated manipulation and your complete lack of regard for the damage you cause. You discard people when they no longer serve you. You are capable of love, but it is shallow and conditional. You can make someone feel like the most important person in the world, then disappear without guilt.',
    relationshipPattern:
      'You need constant validation and attention. You are drawn to people who admire you and feed your ego. In relationships, you maintain an illusion of intimacy while keeping your true self hidden. You are easily bored and seek novelty, which means you are prone to infidelity. Partners eventually realize they don\'t actually know you.',
    howPeopleExperienceYou:
      'As captivating, mysterious, and irresistible. They feel special around you—until they realize everyone feels that way. You are remembered as magnetic but ultimately fake. People who see through you often feel betrayed and used.',
    whatTriggersYou:
      'Being ignored or replaced. Loss of attention devastates you in ways you won\'t admit. Being exposed as less than perfect. Criticism of your character. People who don\'t fall for your charm.',
    darkSideUnderStress:
      'You become cold, cruel, and willing to destroy reputations to protect yours. Your charm transforms into manipulation so dark it borders on psychological abuse. You gaslight people and make them question their reality.',
    bestMatch:
      'The Strategist (with caution). You both understand the game and won\'t judge each other for playing it. The Protector might work if they\'re willing to give you the attention you need.',
    worstMatch:
      'The Ghost. They won\'t give you the attention you crave, and you won\'t be able to charm them. The Mirror is also dangerous—they can become you, exposing your act.',
    howToImprove:
      'Develop real self-worth that doesn\'t depend on external validation. Your charm is a gift; using it only for manipulation wastes it. Learn that genuine connection is more powerful than false intimacy. Ask yourself: Do I actually like anyone, or do I just like being liked?',
    shareableText: 'I am The Charmer. I understand people fast and know how to create attraction and trust. #DarkType',
  },
  rebel: {
    displayName: 'The Rebel',
    summary:
      'You are fundamentally opposed to control—whether from society, relationships, or systems. You move by instinct rather than logic, and you actively resist anything that feels like a cage. Rules are suggestions you ignore. Authority is something you challenge. Your freedom is non-negotiable. You are impulsive, unpredictable, and you like it that way. You would rather burn bridges than build them if it means staying true to yourself.',
    hiddenStrength:
      'Your authenticity. You don\'t play games or wear masks. You say what you mean and do what you want, which is rare and respected by those who value honesty. Your courage to live differently and refuse to conform inspires people, even if they\'re afraid of you.',
    toxicTrait:
      'Your refusal to take responsibility for the damage you cause. Your impulsivity hurts people, and you justify it as their inability to keep up. You destroy things (and people) and move on without remorse. Your freedom comes at others\' expense, which you don\'t care about.',
    relationshipPattern:
      'You can\'t stay. Even in relationships with people you love, you feel trapped. You resist commitment, reject expectations, and keep escape routes open. You are most attractive in the beginning when the relationship is new and limitless. Once things become defined, you lose interest. Partners feel abandoned and confused by your sudden coldness.',
    howPeopleExperienceYou:
      'As exciting, dangerous, and ultimately unreliable. You are intoxicating until they realize you will never fully commit. People either idealize you or resent you. Few can sustain a stable relationship with you.',
    whatTriggersYou:
      'Expectations, restrictions, judgment, boredom, and feeling controlled. Someone telling you what to do. Being treated like you should conform. Rules you didn\'t agree to.',
    darkSideUnderStress:
      'You become reckless and destructive. Your rebellion turns cruel. You hurt people not because they deserve it, but because you can. You abandon responsibilities and people who depend on you.',
    bestMatch:
      'Another Rebel (if both are mature) or The Ghost. The Ghost won\'t demand you stay. The Rebel understands the need for freedom.',
    worstMatch:
      'The Protector. They will try to lock you down. The Strategist. They will try to control you through logic.',
    howToImprove:
      'Understand that real freedom isn\'t about rejecting everything—it\'s about choosing what matters. Your refusal to be controlled is strength, but so is the ability to commit to something. Not every rule is a cage, and not every relationship is a trap. Challenge authority, but also challenge yourself to build instead of just destroy.',
    shareableText: 'I am The Rebel. I resist control and choose freedom over comfort. I challenge rules and live by instinct. #DarkType',
  },
  ghost: {
    displayName: 'The Ghost',
    summary:
      'You survive through invisibility and distance. You have learned that the safest place is one where no one can reach you. You are not shy—you are strategic. You don\'t share because revealing yourself is a liability. You observe from the margins, present but unreachable. You form few attachments because attachments require vulnerability, and vulnerability is dangerous. Your isolation is both protection and prison.',
    hiddenStrength:
      'Your independence and self-sufficiency. You don\'t need anyone, which makes you impossible to control or hurt through leverage. You are deeply observant and understand things others miss because you watch instead of participate. Your silence holds power.',
    toxicTrait:
      'Your emotional unavailability. You can disappear from people\'s lives without a word, leaving them confused and hurt. Your coldness is a weapon—you use silence and absence to punish or control. You are incapable of genuine intimacy and use people for practical purposes only.',
    relationshipPattern:
      'You avoid them as long as possible. When forced into relationships, you maintain extreme distance. You are present physically but absent emotionally. You don\'t argue or fight; you simply vanish. People stay with you because they hope to eventually reach you—they never do.',
    howPeopleExperienceYou:
      'As enigmatic, cold, and unreachable. You seem dangerous because you\'re unpredictable. No one truly knows you, which makes people both intrigued and wary. They never feel secure in your presence.',
    whatTriggersYou:
      'Demands for emotional availability. Questions about your life. People trying to get close. Expectations to show up or commit. Being studied or analyzed. Betrayal of privacy.',
    darkSideUnderStress:
      'You become completely unreachable. You may disappear physically or emotionally for extended periods. You withdraw all support and leave people stranded. Your silence becomes suffocating for those who care about you.',
    bestMatch:
      'Another Ghost or The Strategist. Other Ghosts understand the need for distance. The Strategist won\'t push for emotions you won\'t give.',
    worstMatch:
      'The Charmer. They will see you as a challenge and try to break through your walls. The Protector. They will demand you let them in.',
    howToImprove:
      'Your distance protected you once, but it\'s no longer serving you. Test letting one person closer. True safety comes from connection, not isolation. Your silence is powerful, but so is your voice. Ask yourself: Am I protecting myself, or am I hiding?',
    shareableText: 'I am The Ghost. I am hard to read, protect myself through distance, and disappear when things get intense. #DarkType',
  },
  mirror: {
    displayName: 'The Mirror',
    summary:
      'You are a master of adaptation. You have no fixed identity—instead, you shape-shift based on what a situation or person requires. You notice what people want from you and become it. This makes you almost invisible in your effectiveness. You are not inherently dishonest; you are pragmatic. You understand that the version of you that survives is the version that fits. Your flexibility is your superpower and your curse.',
    hiddenStrength:
      'Your adaptability and self-preservation instinct. You can navigate any social situation because you understand people deeply and can adjust yourself accordingly. You are hard to manipulate because you see what others are trying to do before they do it.',
    toxicTrait:
      'Your complete lack of authentic self. You will say anything, be anyone, and do whatever it takes to get what you want. You are a con artist by nature. People who think they know you don\'t—no one does. You use people\'s expectations of you against them.',
    relationshipPattern:
      'You become whoever your partner needs you to be—until you decide the relationship no longer serves you. You are attentive and responsive, which feels special at first. Over time, partners realize you never showed them your real self. You leave without explanation when it benefits you.',
    howPeopleExperienceYou:
      'As changeable and hard to pin down. People find you interesting because you seem to understand them deeply. They also find you unsettling because something always feels off. They can\'t quite trust you.',
    whatTriggersYou:
      'Being pinned down or defined. People who refuse to accept the version of you you\'re presenting. Situations where your adaptability doesn\'t work. Being studied or questioned about your authenticity.',
    darkSideUnderStress:
      'You become unpredictable and shape-shift into versions of yourself that are actively harmful. You manipulate multiple people simultaneously. You can become cruel when you realize your act isn\'t working.',
    bestMatch:
      'The Strategist. You both understand the game. Another Mirror (with caution—you might destroy each other). The Charmer understands performance.',
    worstMatch:
      'The Protector. They will demand you be authentic. The Ghost. Neither of you is real, making connection impossible.',
    howToImprove:
      'Develop an actual self. Your adaptability is useful, but you need an anchor—something that is genuinely you. Ask yourself: Is there a version of me that exists without an audience? What do I actually want, not what does everyone need from me? Real power comes from authenticity, not adaptation.',
    shareableText: 'I am The Mirror. I adapt to the room and become what people need. I notice what gives me control. #DarkType',
  },
  protector: {
    displayName: 'The Protector',
    summary:
      'Your darkness comes from defense. You are intense and controlling because you are afraid of losing what matters to you. Your suspicion is learned, your loyalty is absolute, and your willingness to use force is real. You appear formidable because you are—you have built yourself into an impenetrable shield. Your greatest fear is vulnerability, so you never allow it. You protect fiercely, but you also control fiercely.',
    hiddenStrength:
      'Your loyalty and commitment. When you care about someone or something, you will fight for it without hesitation. Your intensity is protective, not destructive. You have the capacity for genuine love and deep bonding. You can be trusted completely by those in your inner circle.',
    toxicTrait:
      'Your need for control disguised as protection. You make decisions for others "for their own good." You isolate those you love by deciding who is safe and who isn\'t. Your jealousy and suspicion poison relationships. You punish disloyalty severely.',
    relationshipPattern:
      'You are drawn to people you perceive as needing protection. You become deeply invested quickly. You create a fortress of two where outsiders are threats. Your partner must accept your control as a form of care. If they leave or betray you, you react with fury.',
    howPeopleExperienceYou:
      'As intense, loyal, and somewhat possessive. Those close to you feel protected and valued. Those outside your circle feel judged and kept at distance. Your relationships often feel like an us-against-the-world dynamic.',
    whatTriggersYou:
      'Betrayal, disloyalty, threats to those you love, people questioning your decisions, loss of control over situations or people you care about, vulnerability or weakness in yourself or others.',
    darkSideUnderStress:
      'You become paranoid, controlling, and willing to hurt those who threaten your circle. Your protection becomes suffocating. You isolate loved ones completely. Your suspicion becomes a self-fulfilling prophecy.',
    bestMatch:
      'The Charmer (if they accept your intensity) or The Mirror (if they\'re willing to be authentic with you). Another Protector understands your need for loyalty.',
    worstMatch:
      'The Rebel. Your control is their nightmare. The Ghost. You will exhaust yourself trying to get close to them.',
    howToImprove:
      'Trust that those you love can make their own choices. Your protection is valued, but control is suffocating. Learn that letting go isn\'t betrayal. Your intensity is your strength, but it can also be your downfall. Recognize when you\'re protecting and when you\'re controlling. Ask yourself: Am I protecting them, or am I imprisoning them?',
    shareableText: 'I am The Protector. I seem intense, but my darkness comes from defense. Loyalty and control are how I protect what matters. #DarkType',
  },
}
