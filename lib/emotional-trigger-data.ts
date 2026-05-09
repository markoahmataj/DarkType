export type EmotionalTriggerResultType = 'rejection' | 'control' | 'disrespect' | 'abandonment' | 'exposure' | 'injustice'

export const emotionalTriggerResultTypes: Record<EmotionalTriggerResultType, { displayName: string; teaser: string }> = {
  rejection: {
    displayName: 'The Rejection Trigger',
    teaser: 'You react most strongly when you feel unwanted, dismissed, replaced, or emotionally deprioritized. You may interpret neutrality as rejection — and protect yourself before the threat is confirmed.',
  },
  control: {
    displayName: 'The Control Trigger',
    teaser: 'You react most strongly when you feel trapped, pressured, managed, or forced into something. You may resist help because it feels like control — and you will sacrifice connection before you sacrifice freedom.',
  },
  disrespect: {
    displayName: 'The Disrespect Trigger',
    teaser: 'You react most strongly when you feel belittled, underestimated, mocked, or spoken to as though you are beneath someone. You may hear disrespect even when someone is simply disagreeing.',
  },
  abandonment: {
    displayName: 'The Abandonment Trigger',
    teaser: 'You react most strongly when you sense someone leaving, pulling away, or becoming emotionally unavailable. You may chase certainty so hard that you create the pressure you were afraid of.',
  },
  exposure: {
    displayName: 'The Exposure Trigger',
    teaser: 'You react most strongly when you feel seen in a way you did not control: criticized, embarrassed, caught, or emotionally revealed. You may treat being seen as being attacked.',
  },
  injustice: {
    displayName: 'The Injustice Trigger',
    teaser: 'You react most strongly when something feels unfair, hypocritical, dishonest, or morally wrong. Your sense of justice may become so intense that it leaves no room for complexity.',
  },
}

export interface EmotionalTriggerQuestion {
  id: number
  text: string
  answers: Array<{
    text: string
    type: EmotionalTriggerResultType
  }>
}

export const emotionalTriggerQuestions: EmotionalTriggerQuestion[] = [
  {
    id: 1,
    text: 'What tends to set off your strongest emotional reaction?',
    answers: [
      { text: 'The sense that someone no longer wants you around', type: 'rejection' },
      { text: 'Being told what to do or feeling managed', type: 'control' },
      { text: 'Being treated as if your perspective doesn\'t matter', type: 'disrespect' },
      { text: 'Someone becoming less available without explanation', type: 'abandonment' },
      { text: 'Being seen in a way you didn\'t choose or prepare for', type: 'exposure' },
      { text: 'Something unfair happening that no one seems willing to name', type: 'injustice' },
    ],
  },
  {
    id: 2,
    text: 'When you feel ignored by someone important to you, you…',
    answers: [
      { text: 'Get hurt in a way that\'s hard to hide', type: 'rejection' },
      { text: 'See it as a form of power play you need to correct', type: 'control' },
      { text: 'Feel it as a statement about how they see your value', type: 'disrespect' },
      { text: 'Panic quietly and start trying to reestablish contact', type: 'abandonment' },
      { text: 'Go inward and protect your vulnerability', type: 'exposure' },
      { text: 'Feel it as a violation — they owe you presence', type: 'injustice' },
    ],
  },
  {
    id: 3,
    text: 'When someone dismisses your opinion without engaging with it, you…',
    answers: [
      { text: 'Wonder if they respect you at all', type: 'rejection' },
      { text: 'Resist more firmly — no one gets to shut you out of a conversation', type: 'control' },
      { text: 'Feel a sharp reaction that\'s hard to move past', type: 'disrespect' },
      { text: 'Feel suddenly alone in the interaction', type: 'abandonment' },
      { text: 'Get self-conscious and wonder if you said something wrong', type: 'exposure' },
      { text: 'Point out the problem with their dismissal, often directly', type: 'injustice' },
    ],
  },
  {
    id: 4,
    text: 'What makes conflict feel most unbearable?',
    answers: [
      { text: 'The possibility that the other person no longer wants to repair it', type: 'rejection' },
      { text: 'Being pushed into a position you didn\'t choose', type: 'control' },
      { text: 'Being spoken to in a way that treats you as inferior', type: 'disrespect' },
      { text: 'The sense that they might just walk away', type: 'abandonment' },
      { text: 'Having your weaknesses visible when you didn\'t intend to show them', type: 'exposure' },
      { text: 'When the other person refuses to acknowledge what they did', type: 'injustice' },
    ],
  },
  {
    id: 5,
    text: 'When you feel cornered or pressured, what happens in you?',
    answers: [
      { text: 'You shut down — you\'d rather end it than beg', type: 'rejection' },
      { text: 'You push back harder — no one gets to corner you', type: 'control' },
      { text: 'A sharp anger that makes you want to prove your value', type: 'disrespect' },
      { text: 'A fear-based desperation to restore connection', type: 'abandonment' },
      { text: 'You contract inward and give nothing away', type: 'exposure' },
      { text: 'You start building a case in your head', type: 'injustice' },
    ],
  },
  {
    id: 6,
    text: 'When you sense someone pulling away from you, you…',
    answers: [
      { text: 'Go cold first so you don\'t have to wait for the rejection', type: 'rejection' },
      { text: 'Try to understand what\'s driving it and correct it', type: 'control' },
      { text: 'Wonder if they\'ve lost respect for you', type: 'disrespect' },
      { text: 'Feel it intensely and struggle not to let it show', type: 'abandonment' },
      { text: 'Become suspicious about what they\'ve noticed or assumed about you', type: 'exposure' },
      { text: 'Feel it\'s unfair and want them to explain themselves', type: 'injustice' },
    ],
  },
  {
    id: 7,
    text: 'The reaction in you that surprises you most is…',
    answers: [
      { text: 'How quickly you go from hurt to completely shut off', type: 'rejection' },
      { text: 'How fast you turn cooperative into adversarial when you feel managed', type: 'control' },
      { text: 'How long the sting of being underestimated can last', type: 'disrespect' },
      { text: 'How disproportionate the panic feels to what actually happened', type: 'abandonment' },
      { text: 'How much energy you spend managing how you appear', type: 'exposure' },
      { text: 'How fixated you can get on something others consider resolved', type: 'injustice' },
    ],
  },
  {
    id: 8,
    text: 'When someone criticizes you, your first internal response is…',
    answers: [
      { text: 'To wonder if this is the beginning of them leaving', type: 'rejection' },
      { text: 'To resist it — even if it\'s fair, you don\'t want to be positioned as wrong', type: 'control' },
      { text: 'A flash of sharp indignation', type: 'disrespect' },
      { text: 'To try to figure out what you need to fix quickly', type: 'abandonment' },
      { text: 'To feel caught and become very still', type: 'exposure' },
      { text: 'To assess whether the criticism is accurate, and often find it isn\'t', type: 'injustice' },
    ],
  },
  {
    id: 9,
    text: 'In a relationship, what causes you the most prolonged distress?',
    answers: [
      { text: 'Uncertainty about whether you\'re wanted', type: 'rejection' },
      { text: 'Feeling like you don\'t have room to be yourself', type: 'control' },
      { text: 'Interactions that make you feel small or dismissed', type: 'disrespect' },
      { text: 'Inconsistency — someone being present then distant without reason', type: 'abandonment' },
      { text: 'Situations where you feel seen in ways you haven\'t controlled', type: 'exposure' },
      { text: 'Behavior that seems deliberately unfair and is never addressed', type: 'injustice' },
    ],
  },
  {
    id: 10,
    text: 'When you feel misunderstood, you…',
    answers: [
      { text: 'Retreat — if they don\'t get it, they probably won\'t', type: 'rejection' },
      { text: 'Try to correct the record, sometimes insistently', type: 'control' },
      { text: 'Feel it as a deeper insult than just a miscommunication', type: 'disrespect' },
      { text: 'Feel lonely in a way that\'s hard to shake', type: 'abandonment' },
      { text: 'Worry about what impression you\'ve left', type: 'exposure' },
      { text: 'Need to set the record straight, even if it costs you', type: 'injustice' },
    ],
  },
  {
    id: 11,
    text: 'Which of these feels most like your core emotional wound?',
    answers: [
      { text: 'Not being wanted', type: 'rejection' },
      { text: 'Not being free', type: 'control' },
      { text: 'Not being valued', type: 'disrespect' },
      { text: 'Not being enough for someone to stay', type: 'abandonment' },
      { text: 'Not being safe to show your real self', type: 'exposure' },
      { text: 'Not being treated fairly', type: 'injustice' },
    ],
  },
  {
    id: 12,
    text: 'When someone changes their behavior toward you without explanation, you…',
    answers: [
      { text: 'Assume you\'re being pushed away', type: 'rejection' },
      { text: 'Need to understand what\'s changed so you can respond appropriately', type: 'control' },
      { text: 'Feel it as a statement about how they see you now', type: 'disrespect' },
      { text: 'Become intensely focused on what you did or said', type: 'abandonment' },
      { text: 'Become hyper-aware of how you\'re being perceived', type: 'exposure' },
      { text: 'Feel it\'s unfair that they don\'t explain themselves', type: 'injustice' },
    ],
  },
  {
    id: 13,
    text: 'What do you protect most fiercely?',
    answers: [
      { text: 'Your dignity — you will not beg to be included', type: 'rejection' },
      { text: 'Your autonomy — you need to be the one deciding', type: 'control' },
      { text: 'Your self-respect — you won\'t accept being talked down to', type: 'disrespect' },
      { text: 'Your connection — you will fight to keep people close', type: 'abandonment' },
      { text: 'Your image — you control what people see of you', type: 'exposure' },
      { text: 'Your right to fairness — you won\'t accept what isn\'t equal', type: 'injustice' },
    ],
  },
  {
    id: 14,
    text: 'When you feel humiliated, you…',
    answers: [
      { text: 'Withdraw and make yourself unavailable', type: 'rejection' },
      { text: 'Become cold and extremely deliberate in how you engage', type: 'control' },
      { text: 'Feel a hard, lasting anger that doesn\'t leave quickly', type: 'disrespect' },
      { text: 'Desperately want the relationship to recover', type: 'abandonment' },
      { text: 'Want to disappear until the image resets', type: 'exposure' },
      { text: 'Build a detailed internal account of how it happened', type: 'injustice' },
    ],
  },
  {
    id: 15,
    text: 'In your closest relationships, your most repeated internal experience is…',
    answers: [
      { text: 'Wondering if you\'re still wanted', type: 'rejection' },
      { text: 'Monitoring whether you\'re being managed or contained', type: 'control' },
      { text: 'Watching for signs that they take you seriously', type: 'disrespect' },
      { text: 'Tracking whether the level of care stays consistent', type: 'abandonment' },
      { text: 'Managing what version of yourself they\'re seeing', type: 'exposure' },
      { text: 'Noticing when things feel unequal', type: 'injustice' },
    ],
  },
  {
    id: 16,
    text: 'When someone in a conflict refuses to acknowledge any fault, you…',
    answers: [
      { text: 'Pull back and protect yourself', type: 'rejection' },
      { text: 'Become more firm — you will not be the only one held accountable', type: 'control' },
      { text: 'Feel it as a form of contempt', type: 'disrespect' },
      { text: 'Fear it means the relationship is in real danger', type: 'abandonment' },
      { text: 'Go quiet — you don\'t want your own reaction exposed', type: 'exposure' },
      { text: 'Refuse to let it end — someone has to name what happened', type: 'injustice' },
    ],
  },
  {
    id: 17,
    text: 'What does being triggered feel like in your body?',
    answers: [
      { text: 'A coldness or shutdown — you stop being available', type: 'rejection' },
      { text: 'Tension and resistance — you brace against the pressure', type: 'control' },
      { text: 'A sharp heat — something in you wants to prove them wrong', type: 'disrespect' },
      { text: 'A tight, urgent feeling — you need to do something right now', type: 'abandonment' },
      { text: 'Hyperawareness — you become very conscious of being watched', type: 'exposure' },
      { text: 'A fixed, burning clarity — you see exactly what\'s wrong', type: 'injustice' },
    ],
  },
  {
    id: 18,
    text: 'When your emotional reaction is very large, what do you tell yourself?',
    answers: [
      { text: 'That they were probably going to leave anyway', type: 'rejection' },
      { text: 'That you have the right to protect your boundaries', type: 'control' },
      { text: 'That you deserve better and shouldn\'t accept this', type: 'disrespect' },
      { text: 'That you need to fix this before it\'s too late', type: 'abandonment' },
      { text: 'That you need to regain control of how you appear', type: 'exposure' },
      { text: 'That someone needs to be held accountable', type: 'injustice' },
    ],
  },
  {
    id: 19,
    text: 'What do people misunderstand about your strongest reactions?',
    answers: [
      { text: 'They think you\'re indifferent when you\'re actually protecting yourself', type: 'rejection' },
      { text: 'They think you\'re difficult when you\'re protecting your autonomy', type: 'control' },
      { text: 'They think you\'re arrogant when you\'re defending your self-worth', type: 'disrespect' },
      { text: 'They think you\'re clingy when you\'re terrified of losing someone real', type: 'abandonment' },
      { text: 'They think you\'re cold when you\'re actually very aware of being seen', type: 'exposure' },
      { text: 'They think you\'re stubborn when you\'re holding a legitimate position', type: 'injustice' },
    ],
  },
  {
    id: 20,
    text: 'The emotional truth about your triggers is…',
    answers: [
      { text: 'You are more afraid of being unwanted than almost anything else', type: 'rejection' },
      { text: 'You will sacrifice connection before you sacrifice freedom', type: 'control' },
      { text: 'You cannot function easily in relationships where you feel small', type: 'disrespect' },
      { text: 'Your deepest fear is someone leaving and never coming back', type: 'abandonment' },
      { text: 'You spend enormous energy making sure people see what you want them to see', type: 'exposure' },
      { text: 'You cannot release something until you feel it has been witnessed and named', type: 'injustice' },
    ],
  },
]
