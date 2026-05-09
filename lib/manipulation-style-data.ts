export type ManipulationStyleResultType = 'charmer' | 'strategist' | 'guiltmaker' | 'withholder' | 'performer' | 'pressurepoint'

export const manipulationStyleResultTypes: Record<ManipulationStyleResultType, { displayName: string; teaser: string }> = {
  charmer: {
    displayName: 'The Charmer',
    teaser: 'You influence through warmth, attraction, and emotional timing. People soften around you before they realize they are being guided — and you sometimes confuse making someone feel special with being honest.',
  },
  strategist: {
    displayName: 'The Strategist',
    teaser: 'You influence through information, timing, and calculated restraint. You rarely move without reading the board first — and you may see people as systems to navigate instead of humans to meet directly.',
  },
  guiltmaker: {
    displayName: 'The Guiltmaker',
    teaser: 'You influence by making others feel responsible for your pain or disappointment. Your hurt may be real, but guilt turns it into control — and you rarely ask for what you need directly.',
  },
  withholder: {
    displayName: 'The Withholder',
    teaser: 'You influence through absence. Silence, distance, and limited access become tools of control — and you may believe you are protecting peace while training people to chase you.',
  },
  performer: {
    displayName: 'The Performer',
    teaser: 'You influence by becoming the version of yourself that gets the strongest reaction. You may lose track of what is real because the performance keeps working.',
  },
  pressurepoint: {
    displayName: 'The Pressure Point',
    teaser: 'You influence by finding the weak spot: fear, insecurity, guilt, pride, or dependency. You may call it insight — but insight without care becomes exploitation.',
  },
}

export interface ManipulationStyleQuestion {
  id: number
  text: string
  answers: Array<{
    text: string
    type: ManipulationStyleResultType
  }>
}

export const manipulationStyleQuestions: ManipulationStyleQuestion[] = [
  {
    id: 1,
    text: 'When you want something from someone, your natural approach is to…',
    answers: [
      { text: 'Create a sense of warmth and connection that makes them want to help', type: 'charmer' },
      { text: 'Think through the best angle before saying anything', type: 'strategist' },
      { text: 'Make clear, subtly or directly, what you\'ve done for them', type: 'guiltmaker' },
      { text: 'Become less available until they ask what\'s wrong', type: 'withholder' },
      { text: 'Present yourself in a way that makes the request feel natural', type: 'performer' },
      { text: 'Identify what they care about and work with that', type: 'pressurepoint' },
    ],
  },
  {
    id: 2,
    text: 'When someone resists or disagrees with you, you tend to…',
    answers: [
      { text: 'Soften the interaction until they\'re no longer sure why they were resisting', type: 'charmer' },
      { text: 'Adjust your approach based on what isn\'t landing', type: 'strategist' },
      { text: 'Remind them of the context — what you\'ve given, what you\'ve been through', type: 'guiltmaker' },
      { text: 'Go cold and see if they move toward you', type: 'withholder' },
      { text: 'Shift your tone or persona until you find what works', type: 'performer' },
      { text: 'Figure out what\'s actually driving their resistance and address that', type: 'pressurepoint' },
    ],
  },
  {
    id: 3,
    text: 'In conflict, what gives you the most control?',
    answers: [
      { text: 'Staying warm enough that the other person doesn\'t want to escalate', type: 'charmer' },
      { text: 'Saying less than you know so you can respond to their full position', type: 'strategist' },
      { text: 'Making clear what this situation is costing you emotionally', type: 'guiltmaker' },
      { text: 'Silence — people say more when they\'re trying to fill it', type: 'withholder' },
      { text: 'Adjusting your presentation until you find the version that lands', type: 'performer' },
      { text: 'Knowing the specific thing they\'re most afraid to hear', type: 'pressurepoint' },
    ],
  },
  {
    id: 4,
    text: 'When someone doesn\'t respond the way you expected, you…',
    answers: [
      { text: 'Read the shift in energy and recalibrate your approach', type: 'charmer' },
      { text: 'Adjust your position — you were already prepared for this', type: 'strategist' },
      { text: 'Wonder what you\'ve done wrong, and often say so', type: 'guiltmaker' },
      { text: 'Withdraw further and see if they reach out', type: 'withholder' },
      { text: 'Shift the performance until you find what connects', type: 'performer' },
      { text: 'Identify the underlying pressure they\'re responding to', type: 'pressurepoint' },
    ],
  },
  {
    id: 5,
    text: 'What do people usually experience when they spend time with you?',
    answers: [
      { text: 'Warmth — they feel seen and appreciated', type: 'charmer' },
      { text: 'Interest mixed with the sense that something is being assessed', type: 'strategist' },
      { text: 'Closeness mixed with an undercurrent of obligation', type: 'guiltmaker' },
      { text: 'Connection in moments, but uncertainty about where they stand', type: 'withholder' },
      { text: 'Engagement — you\'re interesting and responsive', type: 'performer' },
      { text: 'Insight — you understand them in a way that\'s slightly unsettling', type: 'pressurepoint' },
    ],
  },
  {
    id: 6,
    text: 'When someone pulls away from you emotionally, you…',
    answers: [
      { text: 'Create situations where they feel your absence more', type: 'charmer' },
      { text: 'Read the reason for the shift before deciding how to respond', type: 'strategist' },
      { text: 'Make clear the impact it has on you — directly or indirectly', type: 'guiltmaker' },
      { text: 'Reciprocate — and let them notice', type: 'withholder' },
      { text: 'Change your presentation to make re-engagement feel easy', type: 'performer' },
      { text: 'Figure out what\'s driving it and address it precisely', type: 'pressurepoint' },
    ],
  },
  {
    id: 7,
    text: 'Which of these feels most like your approach to getting what you need?',
    answers: [
      { text: 'Making someone feel special enough to want to give it to you', type: 'charmer' },
      { text: 'Understanding the right moment and method before asking', type: 'strategist' },
      { text: 'Communicating what you\'ve sacrificed so the other person feels responsible', type: 'guiltmaker' },
      { text: 'Withholding connection until the need is noticed', type: 'withholder' },
      { text: 'Becoming the version of yourself most likely to succeed', type: 'performer' },
      { text: 'Identifying exactly what matters to the person and using that', type: 'pressurepoint' },
    ],
  },
  {
    id: 8,
    text: 'When someone sets a limit with you, you…',
    answers: [
      { text: 'Test it with warmth to see how firm it actually is', type: 'charmer' },
      { text: 'Note it and decide whether to work around it or accept it', type: 'strategist' },
      { text: 'Feel hurt and make sure they understand that', type: 'guiltmaker' },
      { text: 'Respect it outwardly while going distant inwardly', type: 'withholder' },
      { text: 'Adjust your approach to work within it without acknowledging it directly', type: 'performer' },
      { text: 'Notice what the limit is protecting and work with that', type: 'pressurepoint' },
    ],
  },
  {
    id: 9,
    text: 'What is the most honest description of how you build trust with people?',
    answers: [
      { text: 'You make them feel like they\'re getting something rare from you', type: 'charmer' },
      { text: 'You reveal information in layers, maintaining control of what they know', type: 'strategist' },
      { text: 'You do a lot, and you make sure people notice', type: 'guiltmaker' },
      { text: 'You give them enough to feel connected, but keep the rest private', type: 'withholder' },
      { text: 'You become whoever they need until they feel understood', type: 'performer' },
      { text: 'You demonstrate that you know them better than other people do', type: 'pressurepoint' },
    ],
  },
  {
    id: 10,
    text: 'When you feel threatened in a relationship, your immediate response is to…',
    answers: [
      { text: 'Increase warmth and connection to stabilize the situation', type: 'charmer' },
      { text: 'Step back and assess the threat before responding', type: 'strategist' },
      { text: 'Express how much has been invested and what\'s at risk', type: 'guiltmaker' },
      { text: 'Create more distance so you\'re not the one who has more to lose', type: 'withholder' },
      { text: 'Shift into the version of yourself that works best under pressure', type: 'performer' },
      { text: 'Identify the specific vulnerability and use it if necessary', type: 'pressurepoint' },
    ],
  },
  {
    id: 11,
    text: 'When you want someone to change their behavior, you…',
    answers: [
      { text: 'Make them feel good about the version of themselves that would do what you want', type: 'charmer' },
      { text: 'Create the conditions that make the change feel like their idea', type: 'strategist' },
      { text: 'Communicate the emotional cost of the current behavior', type: 'guiltmaker' },
      { text: 'Stop giving them things they value until behavior changes', type: 'withholder' },
      { text: 'Demonstrate the impact so clearly they can\'t ignore it', type: 'performer' },
      { text: 'Identify the motivation underneath the behavior and address that directly', type: 'pressurepoint' },
    ],
  },
  {
    id: 12,
    text: 'The most uncomfortable truth about how you influence people is…',
    answers: [
      { text: 'You sometimes perform care you don\'t entirely feel', type: 'charmer' },
      { text: 'You\'re often two steps ahead and rarely showing it', type: 'strategist' },
      { text: 'You use your pain as leverage more than you\'d like to admit', type: 'guiltmaker' },
      { text: 'You use absence to maintain power', type: 'withholder' },
      { text: 'You\'re not always sure where the performance ends', type: 'performer' },
      { text: 'You use insight as a weapon more than as care', type: 'pressurepoint' },
    ],
  },
  {
    id: 13,
    text: 'When an interaction is going badly, you…',
    answers: [
      { text: 'Introduce warmth to lower the temperature', type: 'charmer' },
      { text: 'Recalibrate based on what you\'ve learned so far', type: 'strategist' },
      { text: 'Point to what this situation is costing you', type: 'guiltmaker' },
      { text: 'Go colder and give them less', type: 'withholder' },
      { text: 'Change your approach until something lands', type: 'performer' },
      { text: 'Identify what the person is most afraid of and redirect the energy', type: 'pressurepoint' },
    ],
  },
  {
    id: 14,
    text: 'What do people often misunderstand about how you operate?',
    answers: [
      { text: 'They think you\'re naturally warm when it\'s more often intentional', type: 'charmer' },
      { text: 'They think you\'re distant when you\'re actually just reading carefully', type: 'strategist' },
      { text: 'They think you\'re manipulative when you feel genuinely hurt', type: 'guiltmaker' },
      { text: 'They think you\'re independent when you\'re often signaling', type: 'withholder' },
      { text: 'They think you\'re authentic when you\'ve adapted to the situation', type: 'performer' },
      { text: 'They think you\'re empathetic when you\'re sometimes just precise', type: 'pressurepoint' },
    ],
  },
  {
    id: 15,
    text: 'When someone you influence starts to rely on you, you feel…',
    answers: [
      { text: 'Satisfied — you\'ve created the relationship you wanted', type: 'charmer' },
      { text: 'Attentive — dependency creates leverage but also obligation', type: 'strategist' },
      { text: 'Relieved — it confirms you matter', type: 'guiltmaker' },
      { text: 'Uneasy — their closeness reduces your control', type: 'withholder' },
      { text: 'Aware that you need to maintain the performance', type: 'performer' },
      { text: 'Clear about what you now have access to', type: 'pressurepoint' },
    ],
  },
  {
    id: 16,
    text: 'How do you handle a situation where someone doesn\'t respond to your usual approach?',
    answers: [
      { text: 'Try something new until you find what connects', type: 'charmer' },
      { text: 'Reassess the full situation — you may have missed something', type: 'strategist' },
      { text: 'Escalate the emotional content until they engage', type: 'guiltmaker' },
      { text: 'Give them less until absence becomes louder', type: 'withholder' },
      { text: 'Try a different persona or emotional register', type: 'performer' },
      { text: 'Find a more specific pressure point and apply it more precisely', type: 'pressurepoint' },
    ],
  },
  {
    id: 17,
    text: 'What\'s the difference between influence and manipulation to you?',
    answers: [
      { text: 'Mostly timing and tone — it exists on a spectrum', type: 'charmer' },
      { text: 'Manipulation is unskilled influence — all strategic behavior is rational', type: 'strategist' },
      { text: 'The difference depends on whether the emotion you express is real', type: 'guiltmaker' },
      { text: 'You rarely think about it in those terms', type: 'withholder' },
      { text: 'The line is whether you\'re giving them something real or performing it', type: 'performer' },
      { text: 'Whether you\'re using perception to help or to control', type: 'pressurepoint' },
    ],
  },
  {
    id: 18,
    text: 'When someone sees through what you\'re doing, you…',
    answers: [
      { text: 'Laugh it off and reset — the charm can survive exposure', type: 'charmer' },
      { text: 'Accept it and shift approach — being read is just new information', type: 'strategist' },
      { text: 'Feel genuinely wounded, which is often also strategic', type: 'guiltmaker' },
      { text: 'Deny it and withdraw even further', type: 'withholder' },
      { text: 'Drop the persona and find a different one faster', type: 'performer' },
      { text: 'Note that this person is more perceptive than average', type: 'pressurepoint' },
    ],
  },
  {
    id: 19,
    text: 'What do you want from the people you influence?',
    answers: [
      { text: 'Their attention and positive regard', type: 'charmer' },
      { text: 'A favorable outcome — the relationship is secondary', type: 'strategist' },
      { text: 'To be seen as essential', type: 'guiltmaker' },
      { text: 'Continued engagement on your terms', type: 'withholder' },
      { text: 'To be believed and responded to', type: 'performer' },
      { text: 'Access — to their decisions, behavior, or vulnerability', type: 'pressurepoint' },
    ],
  },
  {
    id: 20,
    text: 'The truest thing about how you operate with people is…',
    answers: [
      { text: 'You make people feel good because it works, not always because you mean it', type: 'charmer' },
      { text: 'You always know more about the situation than you\'re showing', type: 'strategist' },
      { text: 'You rarely ask for what you need directly — you make people feel responsible for giving it', type: 'guiltmaker' },
      { text: 'You control relationships through access and deprivation', type: 'withholder' },
      { text: 'You are whoever the situation needs, and you\'ve lost track of who that is underneath', type: 'performer' },
      { text: 'You know exactly what would break someone down and you decide whether to use it', type: 'pressurepoint' },
    ],
  },
]
