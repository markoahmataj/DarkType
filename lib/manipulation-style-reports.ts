import { type ManipulationStyleResultType } from './manipulation-style-data'

export interface ManipulationStyleReport {
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

export const manipulationStyleReports: Record<ManipulationStyleResultType, ManipulationStyleReport> = {
  charmer: {
    displayName: 'The Charmer',
    summary:
      'You influence through warmth, attraction, attention, and emotional timing. People soften around you before they realize they are being guided. Your social intelligence is real — and you sometimes confuse making someone feel special with being honest.',
    psychProfile:
      'Core Pattern: Using warmth and emotional attunement to create favorable conditions for desired outcomes\nCore Fear: Being seen as ordinary, losing influence, exposure of the gap between performance and reality\nBehavior Style: Warm, attuned, emotionally calibrated, rarely direct\nInfluence Mode: Creates emotional debt through positive regard',
    hiddenStrength:
      'Genuine connection. Not all of what you create is performance — you have real empathy and you use it. When you stop using warmth strategically and offer it freely, the relationships you build are genuinely good ones.',
    toxicTrait:
      'You create emotional dependency without declaring the terms. People feel close to you without knowing what they\'re close to. When you withdraw — and you do — the loss feels disproportionate because the intimacy felt real. They weren\'t wrong. You just weren\'t fully there.',
    relationshipPattern:
      'You are at your best in the early stages when attention flows naturally. As relationships deepen and mutual knowledge increases, the performance becomes harder to maintain. You start to feel seen in ways you didn\'t authorize. That\'s when the warmth becomes more strategic.',
    howPeopleExperienceYou:
      'Magnetic. Attentive. Like you actually see them. Later, they sometimes realize the attention was a function of what you needed from the interaction. Not everyone realizes this. The ones who do feel a specific kind of betrayal.',
    whatTriggersYou:
      'Being seen through. Someone who doesn\'t respond to warmth. A situation where charm fails and there is nothing underneath it. People who demand directness when you have only offered connection.',
    darkSideUnderStress:
      'You become manipulative in ways that are harder to disguise. The warmth becomes instrumental. You say whatever creates the outcome you need. The people watching closely start to see the seams.',
    bestMatch:
      'The Strategist (you both understand the game and respect the craft) or The Withholder (your warmth makes their distance feel like something to earn — the dynamic suits you).',
    worstMatch:
      'The Pressure Point (they see exactly what you\'re doing and it neutralizes your approach) or The Guiltmaker (competing indirect influence creates an exhausting dynamic).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Use your social intelligence to create clarity, not dependency. Ask: What would happen if I said what I actually wanted directly? The answer is usually "it would work" — and it would cost you less than what you\'re doing now.',
    shareableText: 'I am The Charmer. I influence through warmth and timing — and I sometimes confuse making you feel special with being honest. #DarkType',
  },
  strategist: {
    displayName: 'The Strategist',
    summary:
      'You influence through information, timing, planning, and calculated restraint. You rarely move without reading the board first. You may see people as systems to navigate instead of humans to meet directly.',
    psychProfile:
      'Core Pattern: Using preparation, information advantage, and timing to create favorable outcomes\nCore Fear: Being outmaneuvered, losing strategic position, being moved by emotion instead of reason\nBehavior Style: Calculated, restrained, observant, rarely showing full hand\nInfluence Mode: Controls through information asymmetry and timing',
    hiddenStrength:
      'Precision. You understand situations deeply before acting. The people you choose to help receive unusually effective help, because you actually understand what they need rather than what they\'ve said they need.',
    toxicTrait:
      'You treat every interaction as a negotiation. People feel processed rather than met. Your directness, when it appears, is still calculated — which means there is always a gap between what you say and what you actually know. That gap erodes trust over time, even when your actions are reliable.',
    relationshipPattern:
      'You control the pace and terms of closeness. You reveal in layers. You know more about the people around you than they know about you, and you use that asymmetry to stay in an advantageous position. The people who realize this find it cold. The people who don\'t find you unusually perceptive.',
    howPeopleExperienceYou:
      'Intelligent. Slightly distant. Reliable in a way that doesn\'t invite reciprocity. People trust you with tasks but sometimes not with feelings — because they sense that feelings will be processed rather than shared.',
    whatTriggersYou:
      'Being wrong in a way that was preventable. Losing control of a situation through insufficient preparation. People who act emotionally without logic. Being manipulated by someone using cruder tools than yours.',
    darkSideUnderStress:
      'You become cold and transactional. Warmth disappears. People become means to ends, explicitly. You execute on outcomes without concern for how the execution lands on the people involved.',
    bestMatch:
      'The Charmer (you provide the architecture; they provide the warmth — together the influence is effective) or The Watcher (they understand patience and appreciate the value of information).',
    worstMatch:
      'The Guiltmaker (their emotional leverage disrupts your logical framework) or The Performer (you can\'t read them accurately — too much adaptation).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Practice directness without turning every interaction into a strategy. Ask: What would I say to this person if I wasn\'t managing the outcome? Say that. The relationships that survive it will be better than the ones you\'ve been managing.',
    shareableText: 'I am The Strategist. I influence through information and timing — and I always know more than I\'m showing. #DarkType',
  },
  guiltmaker: {
    displayName: 'The Guiltmaker',
    summary:
      'You influence by making others feel responsible for your pain, disappointment, or emotional state. Your hurt is often real. But guilt turns genuine pain into a tool of control — and you rarely ask for what you need directly.',
    psychProfile:
      'Core Pattern: Using expressed suffering to create obligation and influence behavior\nCore Fear: Not mattering, being overlooked, having needs ignored or dismissed\nBehavior Style: Implying sacrifice, highlighting emotional cost, making others feel selfish for having limits\nInfluence Mode: Creates obligation through demonstrated suffering',
    hiddenStrength:
      'Emotional availability. You feel things deeply and you show it. That openness, when it is not functioning as leverage, creates real intimacy. People feel genuinely met by you in ways they don\'t with others.',
    toxicTrait:
      'You make people pay emotionally for not guessing what you needed. The pain is expressed as performance even when it\'s real. The effect is that people around you learn to preemptively manage your emotional state rather than respond to you honestly. The relationship becomes organized around your reactions.',
    relationshipPattern:
      'You give a great deal and you ensure people know what you\'ve given. The giving creates obligation. The obligation creates control. When people assert independence or limits, the cost of those limits is made visible in your expression or behavior. They feel guilty. You feel unappreciated. Both are true.',
    howPeopleExperienceYou:
      'Emotionally generous and emotionally demanding simultaneously. You give freely and you need to be acknowledged for it. The acknowledgment is never quite enough. People feel like they are always in debt to you and never quite able to pay it off.',
    whatTriggersYou:
      'Being overlooked after investing significantly. Having your contributions go unacknowledged. Someone asserting a limit without appearing to feel the cost of it. Being treated as optional.',
    darkSideUnderStress:
      'The emotional display intensifies. Sacrifice is catalogued and presented. People feel they cannot make a move without it being registered as a failure. The relationship becomes a performance of your suffering.',
    bestMatch:
      'The Pleaser (they are oriented toward managing your feelings and will respond to the signals) or The Anchor (stable enough to not collapse under the emotional weight but direct enough to eventually name the pattern).',
    worstMatch:
      'The Fortress (they will not respond to emotional displays — your approach finds no purchase) or The Escapist (they will redirect away from the weight instead of engaging with it).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Ask directly for care instead of making people pay emotionally for not guessing. Ask: What do I actually need right now? Then say that, without the performance. Most of the time it will work — and it will cost you far less.',
    shareableText: 'I am The Guiltmaker. I influence through making others feel responsible for my pain — and I rarely ask for what I need directly. #DarkType',
  },
  withholder: {
    displayName: 'The Withholder',
    summary:
      'You influence through absence. Silence, distance, delayed warmth, and limited access become tools of control. You may believe you are protecting peace — but you may be training people to chase you.',
    psychProfile:
      'Core Pattern: Using withdrawal of warmth, presence, and attention to shape behavior and maintain advantage\nCore Fear: Losing control of the relationship dynamic, being fully exposed, being the one who wants more\nBehavior Style: Reserved, periodic warmth, skilled use of absence\nInfluence Mode: Creates longing and compliance through controlled access',
    hiddenStrength:
      'Self-possession. You are not moved by every social current. You have a strong internal center and you don\'t need constant external validation to maintain it. When that stability is genuine rather than performed, it is genuinely attractive.',
    toxicTrait:
      'You train people to chase you without acknowledging that you\'re doing it. The warmth you offer occasionally feels precious because it is rationed. People work to earn it without knowing the terms. When they behave in ways that please you, the warmth returns. When they don\'t, it disappears. They learn the pattern without being told it exists.',
    relationshipPattern:
      'You are warm in measure. People feel drawn toward you but never quite secure. The inconsistency is the mechanism. They work harder when they have less. They feel more grateful for the warmth when it returns. The relationship is organized around your emotional availability.',
    howPeopleExperienceYou:
      'Magnetic through restraint. The things you don\'t say carry as much weight as the things you do. People feel like cracking your composure is an achievement. The achievement, when it happens, is often manufactured.',
    whatTriggersYou:
      'Someone who stops pursuing. Situations where your distance produces indifference rather than pursuit. Being called out for what you\'re doing. Someone matching your withdrawal with their own.',
    darkSideUnderStress:
      'Total silence. The withdrawal completes and becomes punishing. People who care about you feel it as abandonment. You know the effect. You sometimes choose it anyway.',
    bestMatch:
      'The Charmer (they understand the value of selective access and won\'t be destabilized by it) or The Strategist (they won\'t pursue or collapse — the equal footing suits you).',
    worstMatch:
      'The Clinger (your withdrawal is their emergency — the dynamic spirals) or The Accuser (your silence becomes evidence they use against you).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Say what changed instead of making others decode your distance. Ask: What am I trying to communicate through my silence? Say that instead. You will find that people respond better to the real message than to the performance of it.',
    shareableText: 'I am The Withholder. I influence through absence and controlled access — and silence is never just silence. #DarkType',
  },
  performer: {
    displayName: 'The Performer',
    summary:
      'You influence by becoming the version of yourself that gets the strongest reaction. You may lose track of what is real because the performance keeps working — and you are not always sure where it ends.',
    psychProfile:
      'Core Pattern: Adapting self-presentation to produce desired reactions, using identity as a flexible tool\nCore Fear: Being ordinary, being transparent, running out of performances that work\nBehavior Style: Highly adaptive, emotionally fluid, responsive to audience\nInfluence Mode: Creates engagement through controlled self-presentation',
    hiddenStrength:
      'Range. You can meet people where they are. You understand a wide spectrum of human experience because you have inhabited versions of it. That understanding, when it comes from genuine curiosity rather than utility, produces real empathy.',
    toxicTrait:
      'You are never fully present. There is always a version being managed. People who get close to you eventually realize they\'ve been relating to a performance rather than a person. The relationship they thought they had was real in the parts that served you. The rest was craft.',
    relationshipPattern:
      'You are whoever the situation needs. In new relationships this reads as attentiveness and depth. Over time, the inconsistency becomes visible — different people get meaningfully different versions of you, and eventually someone who knows two of them compares notes.',
    howPeopleExperienceYou:
      'Fascinating. Fluid. Hard to pin down in a way that feels like depth rather than evasion. People who spend more time with you start to sense that the person they\'re interacting with is composed rather than present.',
    whatTriggersYou:
      'An audience that doesn\'t respond. Someone who refuses to engage with any version you offer. A situation that requires you to be one thing without the ability to adapt. Being exposed mid-performance.',
    darkSideUnderStress:
      'The performances become incoherent. You shift too fast. People who were following you lose the thread. You become unpredictable not as strategy but as symptom — you no longer know which version is right and none of them feel stable.',
    bestMatch:
      'The Charmer (you both understand performance and won\'t demand authenticity as a condition of connection) or The Watcher (they observe carefully enough to see the craft without being destabilized by it).',
    worstMatch:
      'The Pressure Point (they identify the vulnerability beneath the performance and it neutralizes you) or The Strategist (they see the adaptation as a data point and adjust accordingly — you can\'t get traction).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Practice being ordinary without treating it as failure. Ask: Which version of me is not a performance? Spend time in that one, even when it doesn\'t get the best reaction. That is the one worth knowing.',
    shareableText: 'I am The Performer. I become whoever gets the strongest reaction — and I\'m not always sure where the performance ends. #DarkType',
  },
  pressurepoint: {
    displayName: 'The Pressure Point',
    summary:
      'You influence by finding the weak spot: fear, insecurity, desire, guilt, pride, or dependency. You may call it insight — but insight without care becomes exploitation. You know exactly what would make someone fold.',
    psychProfile:
      'Core Pattern: Using precise understanding of others\' vulnerabilities to shape their behavior\nCore Fear: Being outmaneuvered by someone with equivalent perception, being fully understood\nBehavior Style: Perceptive, precise, restrained until the point of pressure is identified\nInfluence Mode: Works through specific leverage points rather than broad social influence',
    hiddenStrength:
      'Perception. You see people clearly and quickly. Your ability to understand what drives someone — what they need, what they fear, what they protect — is genuine and rare. When you use it with care, you are one of the most useful people someone can have in their corner.',
    toxicTrait:
      'You use what you see. The perception that could be protective becomes exploitative. You find the thing that would break someone down and you hold it — sometimes using it, sometimes just knowing you could. The people close to you sense this. They stay, often, because they\'re afraid of what you know.',
    relationshipPattern:
      'You build relationships through demonstrated understanding. You see what others miss. People feel known by you — and they are. The knowing is the foundation of the relationship and also its risk. The people who love you are the most exposed.',
    howPeopleExperienceYou:
      'Perceptive in a way that feels like intimacy at first. Later, some of them realize that the perception was always partly strategic. They were being read, not just understood. The line between those two things is the line between care and use.',
    whatTriggersYou:
      'Someone who sees through your perception clearly enough to use it against you. Situations where your precision fails and you miss something important. Being treated as if you\'re ordinary.',
    darkSideUnderStress:
      'You press the point. Whatever you\'ve been holding, you use. It is effective. It is also the end of something — and you know it while you do it.',
    bestMatch:
      'The Strategist (you understand each other\'s approach and can negotiate from a position of mutual awareness) or The Anchor (stable enough to stay when they\'ve seen what you\'re doing — and honest enough to name it).',
    worstMatch:
      'The Performer (you can\'t find a stable pressure point — they shift before you can apply it) or The Guiltmaker (competing leverage-based influence creates something neither person can win cleanly).',
    typeSystem:
      'The Charmer — influences through warmth and emotional timing, creating connection before creating outcomes\nThe Strategist — influences through information, planning, and calculated restraint\nThe Guiltmaker — influences by making others feel responsible for their pain or emotional state\nThe Withholder — influences through absence, using silence and limited access as tools\nThe Performer — influences by becoming whatever version of themselves gets the strongest reaction\nThe Pressure Point — influences by identifying and working with specific fears, desires, or insecurities',
    howToImprove:
      'Use perception responsibly. Seeing the weak point does not mean pressing it. Ask: What would I do with this understanding if I were trying to help rather than gain? The answer tells you something important about what you\'re actually after.',
    shareableText: 'I am The Pressure Point. I find the weak spot and decide whether to use it — and insight without care becomes exploitation. #DarkType',
  },
}
