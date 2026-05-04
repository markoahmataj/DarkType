export type ResultType = 'strategist' | 'charmer' | 'rebel' | 'ghost' | 'mirror' | 'protector'

export const resultTypes: Record<ResultType, { displayName: string; teaser: string }> = {
  strategist: {
    displayName: 'The Strategist',
    teaser: 'You think before you move. You read patterns quickly, stay emotionally controlled, and prefer influence over noise.',
  },
  charmer: {
    displayName: 'The Charmer',
    teaser: 'You understand people fast. You know how to create attraction, attention, and trust, but your influence can become dangerous if unchecked.',
  },
  rebel: {
    displayName: 'The Rebel',
    teaser: 'You resist control. You move by instinct, challenge rules, and often choose freedom over comfort or approval.',
  },
  ghost: {
    displayName: 'The Ghost',
    teaser: 'You are hard to read. You protect yourself through distance, silence, and disappearing when things become too intense.',
  },
  mirror: {
    displayName: 'The Mirror',
    teaser: 'You adapt to the room. You notice what people want from you and can become whatever version gives you control.',
  },
  protector: {
    displayName: 'The Protector',
    teaser: 'You may seem intense, but your darker traits come from defense. Loyalty, suspicion, and control are how you protect what matters.',
  },
}

export interface Question {
  id: number
  text: string
  answers: Array<{
    text: string
    type: ResultType
  }>
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'When someone challenges your authority, your first instinct is to:',
    answers: [
      { text: 'Analyze their argument and respond strategically', type: 'strategist' },
      { text: 'Charm them into seeing things your way', type: 'charmer' },
      { text: 'Push back hard and make it clear who\'s in control', type: 'rebel' },
      { text: 'Withdraw and observe from a distance', type: 'ghost' },
      { text: 'Adapt your approach based on what they need to hear', type: 'mirror' },
      { text: 'Protect your position firmly but with reason', type: 'protector' },
    ],
  },
  {
    id: 2,
    text: 'In relationships, you tend to be drawn to people who:',
    answers: [
      { text: 'Are intellectually stimulating and respect your independence', type: 'strategist' },
      { text: 'Admire you and need your attention', type: 'charmer' },
      { text: 'Can handle your intensity and aren\'t easily intimidated', type: 'rebel' },
      { text: 'Don\'t ask too many questions or demand too much', type: 'ghost' },
      { text: 'Respond to whoever you are being in the moment', type: 'mirror' },
      { text: 'Show loyalty and understand your need for control', type: 'protector' },
    ],
  },
  {
    id: 3,
    text: 'When facing pressure, you typically:',
    answers: [
      { text: 'Step back and create a calculated plan', type: 'strategist' },
      { text: 'Use charm and likability to defuse tension', type: 'charmer' },
      { text: 'Double down and refuse to back down', type: 'rebel' },
      { text: 'Disappear or go quiet until things settle', type: 'ghost' },
      { text: 'Become whoever the situation needs you to be', type: 'mirror' },
      { text: 'Stand firm and protect what\'s important to you', type: 'protector' },
    ],
  },
  {
    id: 4,
    text: 'Your greatest fear is:',
    answers: [
      { text: 'Losing control or being outmaneuvered', type: 'strategist' },
      { text: 'Being exposed or losing people\'s admiration', type: 'charmer' },
      { text: 'Being trapped or confined by rules', type: 'rebel' },
      { text: 'Being truly known or vulnerable', type: 'ghost' },
      { text: 'Losing your ability to adapt or influence', type: 'mirror' },
      { text: 'Those you love being hurt or betrayed', type: 'protector' },
    ],
  },
  {
    id: 5,
    text: 'When someone wrongs you, your reaction is to:',
    answers: [
      { text: 'Plan a measured response that teaches them a lesson', type: 'strategist' },
      { text: 'Make them feel the loss of your presence', type: 'charmer' },
      { text: 'Confront them directly, no filter', type: 'rebel' },
      { text: 'Cut them off silently without explanation', type: 'ghost' },
      { text: 'Mirror their behavior back to them in subtle ways', type: 'mirror' },
      { text: 'Set firm boundaries and test if they respect them', type: 'protector' },
    ],
  },
  {
    id: 6,
    text: 'People often describe you as:',
    answers: [
      { text: 'Calculating or strategic', type: 'strategist' },
      { text: 'Magnetic or captivating', type: 'charmer' },
      { text: 'Intense or unpredictable', type: 'rebel' },
      { text: 'Mysterious or aloof', type: 'ghost' },
      { text: 'Chameleon-like or hard to pin down', type: 'mirror' },
      { text: 'Protective or guarded', type: 'protector' },
    ],
  },
  {
    id: 7,
    text: 'In a group, your natural role is:',
    answers: [
      { text: 'The one who sees the bigger picture and guides decisions', type: 'strategist' },
      { text: 'The one everyone gravitates toward and wants to impress', type: 'charmer' },
      { text: 'The one who questions everything and breaks the mold', type: 'rebel' },
      { text: 'The one on the edge, observing more than participating', type: 'ghost' },
      { text: 'The one who blends in but shapes the conversation', type: 'mirror' },
      { text: 'The one people turn to for protection or security', type: 'protector' },
    ],
  },
  {
    id: 8,
    text: 'When it comes to manipulation, you would say:',
    answers: [
      { text: 'It\'s a tool, like any other, to get what you need', type: 'strategist' },
      { text: 'You\'re naturally gifted at it, sometimes without trying', type: 'charmer' },
      { text: 'You prefer direct confrontation over games', type: 'rebel' },
      { text: 'You avoid it by keeping people at a distance', type: 'ghost' },
      { text: 'You adapt your approach depending on the person', type: 'mirror' },
      { text: 'You use it only to protect what matters to you', type: 'protector' },
    ],
  },
  {
    id: 9,
    text: 'Your ideal environment is one where:',
    answers: [
      { text: 'You have power and can influence outcomes', type: 'strategist' },
      { text: 'People admire you and seek your approval', type: 'charmer' },
      { text: 'There are no restrictive rules or expectations', type: 'rebel' },
      { text: 'You can exist quietly without too much attention', type: 'ghost' },
      { text: 'You can be whoever you need to be to get ahead', type: 'mirror' },
      { text: 'You can protect your inner circle fiercely', type: 'protector' },
    ],
  },
  {
    id: 10,
    text: 'When someone betrays your trust, you:',
    answers: [
      { text: 'Distance yourself strategically and plot your response', type: 'strategist' },
      { text: 'Make them regret losing access to you', type: 'charmer' },
      { text: 'Burn the bridge completely and move on', type: 'rebel' },
      { text: 'Disappear and never give them another chance', type: 'ghost' },
      { text: 'Retaliate by becoming the person who can hurt them most', type: 'mirror' },
      { text: 'Protect yourself by cutting them off entirely', type: 'protector' },
    ],
  },
  {
    id: 11,
    text: 'Your relationship with rules is best described as:',
    answers: [
      { text: 'You follow them when they serve your goals', type: 'strategist' },
      { text: 'You know how to work around them charmingly', type: 'charmer' },
      { text: 'You naturally resist and challenge them', type: 'rebel' },
      { text: 'You observe them quietly from the sidelines', type: 'ghost' },
      { text: 'You adapt to them based on the context', type: 'mirror' },
      { text: 'You enforce them to protect what matters', type: 'protector' },
    ],
  },
  {
    id: 12,
    text: 'In love or attraction, you are primarily motivated by:',
    answers: [
      { text: 'Finding someone you can intellectually match and influence', type: 'strategist' },
      { text: 'The intoxication of being desired and admired', type: 'charmer' },
      { text: 'The thrill of freedom and refusing to be tamed', type: 'rebel' },
      { text: 'The safety of someone who doesn\'t demand too much', type: 'ghost' },
      { text: 'The ability to become whoever your partner needs', type: 'mirror' },
      { text: 'The security of someone who understands your intensity', type: 'protector' },
    ],
  },
  {
    id: 13,
    text: 'When you feel threatened, you respond by:',
    answers: [
      { text: 'Assessing the threat and planning your counter', type: 'strategist' },
      { text: 'Using charm to disarm or redirect attention', type: 'charmer' },
      { text: 'Attacking or confronting head-on', type: 'rebel' },
      { text: 'Retreating into silence or isolation', type: 'ghost' },
      { text: 'Becoming whatever protects you best in the moment', type: 'mirror' },
      { text: 'Defending yourself and those you care about fiercely', type: 'protector' },
    ],
  },
  {
    id: 14,
    text: 'Your deepest motivation is to:',
    answers: [
      { text: 'Understand how things work so you can control them', type: 'strategist' },
      { text: 'Be admired and have influence over others', type: 'charmer' },
      { text: 'Be free to do what you want without restrictions', type: 'rebel' },
      { text: 'Preserve your autonomy and protect your inner world', type: 'ghost' },
      { text: 'Navigate situations by becoming what\'s needed', type: 'mirror' },
      { text: 'Protect what you love and stay in control of your safety', type: 'protector' },
    ],
  },
  {
    id: 15,
    text: 'When collaborating with others, you:',
    answers: [
      { text: 'Lead with a clear vision and strategic direction', type: 'strategist' },
      { text: 'Inspire them and make them want to follow you', type: 'charmer' },
      { text: 'Do your own thing and expect others to keep up', type: 'rebel' },
      { text: 'Prefer minimal interaction and maximum independence', type: 'ghost' },
      { text: 'Adjust your style based on what the group responds to', type: 'mirror' },
      { text: 'Take on responsibility to ensure nothing goes wrong', type: 'protector' },
    ],
  },
  {
    id: 16,
    text: 'Your biggest strength, which you rarely admit, is:',
    answers: [
      { text: 'Your ability to see three moves ahead', type: 'strategist' },
      { text: 'Your magnetic appeal and ability to read people', type: 'charmer' },
      { text: 'Your refusal to compromise or be controlled', type: 'rebel' },
      { text: 'Your ability to survive alone and need no one', type: 'ghost' },
      { text: 'Your adaptability and self-preservation instinct', type: 'mirror' },
      { text: 'Your unwavering loyalty and protective nature', type: 'protector' },
    ],
  },
  {
    id: 17,
    text: 'When stressed or overwhelmed, you become:',
    answers: [
      { text: 'More calculating and withdrawn', type: 'strategist' },
      { text: 'More superficial or dismissive', type: 'charmer' },
      { text: 'More aggressive or defiant', type: 'rebel' },
      { text: 'More isolated or unreachable', type: 'ghost' },
      { text: 'More unpredictable or hard to read', type: 'mirror' },
      { text: 'More controlling or suspicious', type: 'protector' },
    ],
  },
  {
    id: 18,
    text: 'In conflict, your instinct is to:',
    answers: [
      { text: 'Analyze and counter with logic', type: 'strategist' },
      { text: 'Charm or persuade your way out', type: 'charmer' },
      { text: 'Stand your ground and fight', type: 'rebel' },
      { text: 'Avoid and disengage completely', type: 'ghost' },
      { text: 'Shift strategies based on what\'s working', type: 'mirror' },
      { text: 'Protect your position and those you care about', type: 'protector' },
    ],
  },
  {
    id: 19,
    text: 'What you value most in yourself is:',
    answers: [
      { text: 'Your intellect and strategic thinking', type: 'strategist' },
      { text: 'Your charm and ability to connect with anyone', type: 'charmer' },
      { text: 'Your independence and refusal to follow', type: 'rebel' },
      { text: 'Your self-reliance and emotional invulnerability', type: 'ghost' },
      { text: 'Your flexibility and ability to survive any situation', type: 'mirror' },
      { text: 'Your loyalty and commitment to protecting others', type: 'protector' },
    ],
  },
  {
    id: 20,
    text: 'The truth about you is:',
    answers: [
      { text: 'You see the world as a puzzle to be solved and won', type: 'strategist' },
      { text: 'You need to be wanted and can use that against others', type: 'charmer' },
      { text: 'You will never fully submit to anyone or anything', type: 'rebel' },
      { text: 'You prefer loneliness to the risk of being hurt', type: 'ghost' },
      { text: 'You change constantly based on what you need', type: 'mirror' },
      { text: 'Your intensity comes from fear of losing control', type: 'protector' },
    ],
  },
]
