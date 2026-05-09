export type ToxicPatternResultType = 'saboteur' | 'controller' | 'pleaser' | 'accuser' | 'withholder' | 'escapist'

export const toxicPatternResultTypes: Record<ToxicPatternResultType, { displayName: string; teaser: string }> = {
  saboteur: {
    displayName: 'The Saboteur',
    teaser: 'You damage connection before it can expose you. When things become meaningful, you create distance, conflict, or chaos so you do not have to risk being fully seen.',
  },
  controller: {
    displayName: 'The Controller',
    teaser: 'You manage outcomes, people, and emotional atmosphere because uncertainty feels unsafe. You may believe you are protecting the relationship while slowly removing the other person\'s autonomy.',
  },
  pleaser: {
    displayName: 'The Pleaser',
    teaser: 'You survive through approval. You become useful, agreeable, and emotionally convenient so others do not leave — and you may confuse being needed with being loved.',
  },
  accuser: {
    displayName: 'The Accuser',
    teaser: 'You protect yourself by locating the threat outside yourself. When hurt, you search for who is wrong, who failed, or who should be blamed — and your anger can become a shield against vulnerability.',
  },
  withholder: {
    displayName: 'The Withholder',
    teaser: 'You use distance, silence, and limited access as protection and control. You may think you are staying calm, but sometimes you are punishing without saying it.',
  },
  escapist: {
    displayName: 'The Escapist',
    teaser: 'You avoid emotional pressure by disappearing into distraction, work, humor, or detachment. You may call it peace, but often it is avoidance — and the exit is not always freedom.',
  },
}

export interface ToxicPatternQuestion {
  id: number
  text: string
  answers: Array<{
    text: string
    type: ToxicPatternResultType
  }>
}

export const toxicPatternQuestions: ToxicPatternQuestion[] = [
  {
    id: 1,
    text: 'When a relationship starts to feel genuinely important to you, your first instinct is often…',
    answers: [
      { text: 'To test it somehow — create a small conflict or pull back to see what happens', type: 'saboteur' },
      { text: 'To think about how to stabilize it and manage the variables that could disrupt it', type: 'controller' },
      { text: 'To make sure the other person is happy and wants to continue', type: 'pleaser' },
      { text: 'To notice what could go wrong and monitor for early signs of betrayal', type: 'accuser' },
      { text: 'To slow down and protect how much of yourself you show', type: 'withholder' },
      { text: 'To enjoy it but keep your options quietly open', type: 'escapist' },
    ],
  },
  {
    id: 2,
    text: 'When you sense a disagreement building, what do you typically do?',
    answers: [
      { text: 'Sometimes escalate it before the other person does', type: 'saboteur' },
      { text: 'Try to redirect or manage it before it becomes a real conflict', type: 'controller' },
      { text: 'Smooth it over quickly, even if your own needs get ignored', type: 'pleaser' },
      { text: 'Get ahead of it — clarify who was wrong before the story changes', type: 'accuser' },
      { text: 'Go quiet and wait until the other person comes to you', type: 'withholder' },
      { text: 'Find something to do so you don\'t have to engage with it yet', type: 'escapist' },
    ],
  },
  {
    id: 3,
    text: 'What does commitment feel like to you most of the time?',
    answers: [
      { text: 'Like something you\'re not sure you can trust — yours or theirs', type: 'saboteur' },
      { text: 'Like something that needs structure and clear terms', type: 'controller' },
      { text: 'Like proof that someone values you enough to stay', type: 'pleaser' },
      { text: 'Like a risk — people say it, but something always tests whether they meant it', type: 'accuser' },
      { text: 'Like something you want but won\'t fully lean into', type: 'withholder' },
      { text: 'Like pressure that slowly starts to feel heavy', type: 'escapist' },
    ],
  },
  {
    id: 4,
    text: 'When someone gets too close too quickly, you usually…',
    answers: [
      { text: 'Start to find reasons to doubt them', type: 'saboteur' },
      { text: 'Feel the urge to set parameters — too much, too fast', type: 'controller' },
      { text: 'Match their energy, maybe even amplify it', type: 'pleaser' },
      { text: 'Become suspicious of what they actually want from you', type: 'accuser' },
      { text: 'Pull back and give less than before', type: 'withholder' },
      { text: 'Start noticing everything else you have to do', type: 'escapist' },
    ],
  },
  {
    id: 5,
    text: 'After a serious fight with someone you care about, you tend to…',
    answers: [
      { text: 'Worry it confirmed something you already suspected about the relationship', type: 'saboteur' },
      { text: 'Want to resolve it with a plan so it doesn\'t happen again', type: 'controller' },
      { text: 'Apologize fast, even if you weren\'t wrong', type: 'pleaser' },
      { text: 'Keep replaying it to figure out who was actually at fault', type: 'accuser' },
      { text: 'Go cold until they reach out first', type: 'withholder' },
      { text: 'Throw yourself into something else to stop feeling it', type: 'escapist' },
    ],
  },
  {
    id: 6,
    text: 'When you feel emotionally unsafe, your first move is usually…',
    answers: [
      { text: 'Create distance — say or do something that pushes the other person away', type: 'saboteur' },
      { text: 'Find a way to reassert control over the situation', type: 'controller' },
      { text: 'Do something that makes the other person need you or appreciate you', type: 'pleaser' },
      { text: 'Look for what went wrong and who\'s responsible', type: 'accuser' },
      { text: 'Shut down and keep everything internal', type: 'withholder' },
      { text: 'Find a way out of the emotional weight — work, screens, anything', type: 'escapist' },
    ],
  },
  {
    id: 7,
    text: 'When someone disappoints you, you…',
    answers: [
      { text: 'Sometimes use it as confirmation they were never reliable to begin with', type: 'saboteur' },
      { text: 'Look for what system or agreement failed and try to fix it', type: 'controller' },
      { text: 'Minimize it and focus on the good so the relationship stays okay', type: 'pleaser' },
      { text: 'Bring it up directly and make sure they understand the impact', type: 'accuser' },
      { text: 'Say nothing but give them noticeably less', type: 'withholder' },
      { text: 'Let it go on the surface while quietly detaching', type: 'escapist' },
    ],
  },
  {
    id: 8,
    text: 'What feels most threatening to you in a close relationship?',
    answers: [
      { text: 'Feeling too settled — like you\'ve stopped being independent', type: 'saboteur' },
      { text: 'Uncertainty about where things are going or what the other person is thinking', type: 'controller' },
      { text: 'Being seen as selfish, demanding, or not enough', type: 'pleaser' },
      { text: 'Finding out someone wasn\'t who they said they were', type: 'accuser' },
      { text: 'Having your private self exposed before you were ready', type: 'withholder' },
      { text: 'Feeling like you have to stay even when part of you wants space', type: 'escapist' },
    ],
  },
  {
    id: 9,
    text: 'When you\'re angry, what do people around you typically experience?',
    answers: [
      { text: 'A version of you that\'s more reckless or destructive than usual', type: 'saboteur' },
      { text: 'Increasing precision — you become very clear about what\'s wrong', type: 'controller' },
      { text: 'Nothing — you don\'t show it', type: 'pleaser' },
      { text: 'The full weight of it — you make sure they understand what they did', type: 'accuser' },
      { text: 'Total withdrawal — you go cold and say very little', type: 'withholder' },
      { text: 'A sudden shift into sarcasm or emotional distance', type: 'escapist' },
    ],
  },
  {
    id: 10,
    text: 'When something between you and someone important breaks down, you…',
    answers: [
      { text: 'Part of you wonders if you caused it', type: 'saboteur' },
      { text: 'Immediately try to diagnose exactly what went wrong', type: 'controller' },
      { text: 'Blame yourself before looking at anything else', type: 'pleaser' },
      { text: 'Try to build a clear account of how it happened and why', type: 'accuser' },
      { text: 'Stop giving as much and see if they notice', type: 'withholder' },
      { text: 'Decide some space will fix it without addressing anything', type: 'escapist' },
    ],
  },
  {
    id: 11,
    text: 'Which statement feels most uncomfortably true?',
    answers: [
      { text: 'I sometimes break things before they can break me', type: 'saboteur' },
      { text: 'I feel anxious when I can\'t predict how a situation will go', type: 'controller' },
      { text: 'I say yes when I mean no more often than I admit', type: 'pleaser' },
      { text: 'I hold people accountable in ways that can feel like punishment', type: 'accuser' },
      { text: 'I use silence to express what I won\'t say directly', type: 'withholder' },
      { text: 'I disappear from things before they ask too much of me', type: 'escapist' },
    ],
  },
  {
    id: 12,
    text: 'When you feel ignored or deprioritized, you…',
    answers: [
      { text: 'Sometimes behave in ways that prove the relationship isn\'t that important to you', type: 'saboteur' },
      { text: 'Start managing the dynamic more deliberately', type: 'controller' },
      { text: 'Work harder to make yourself useful or appreciated', type: 'pleaser' },
      { text: 'Confront the person or surface what\'s been accumulating', type: 'accuser' },
      { text: 'Become unavailable in return', type: 'withholder' },
      { text: 'Redirect your energy somewhere you feel more valued', type: 'escapist' },
    ],
  },
  {
    id: 13,
    text: 'The relationship pattern you repeat most is…',
    answers: [
      { text: 'Getting close, then finding a reason to create distance', type: 'saboteur' },
      { text: 'Maintaining order so closely that people stop making their own choices', type: 'controller' },
      { text: 'Giving too much until quiet resentment sets in', type: 'pleaser' },
      { text: 'Finding the problem in the other person before looking at yourself', type: 'accuser' },
      { text: 'Giving people less than they\'re expecting and watching whether they stay', type: 'withholder' },
      { text: 'Being fully present until it gets heavy, then mentally leaving', type: 'escapist' },
    ],
  },
  {
    id: 14,
    text: 'When you feel controlled or pressured by someone, you…',
    answers: [
      { text: 'Do the thing they\'re asking you not to do', type: 'saboteur' },
      { text: 'Reframe the situation so you\'re the one deciding', type: 'controller' },
      { text: 'Comply, then resent it later in private', type: 'pleaser' },
      { text: 'Call it out and make it clear you see what\'s happening', type: 'accuser' },
      { text: 'Stop engaging until the pressure eases on its own', type: 'withholder' },
      { text: 'Find something urgent to redirect your attention to', type: 'escapist' },
    ],
  },
  {
    id: 15,
    text: 'When someone earns your trust, you…',
    answers: [
      { text: 'Still wait for the moment they prove it was false', type: 'saboteur' },
      { text: 'Start sharing more but continue monitoring how they use it', type: 'controller' },
      { text: 'Give them everything — access, loyalty, effort', type: 'pleaser' },
      { text: 'Stay alert for inconsistencies', type: 'accuser' },
      { text: 'Loosen a little, but rarely fully open up', type: 'withholder' },
      { text: 'Appreciate it but don\'t change how much space you keep', type: 'escapist' },
    ],
  },
  {
    id: 16,
    text: 'How do you usually handle emotional pain?',
    answers: [
      { text: 'Let it come out sideways — through behavior rather than words', type: 'saboteur' },
      { text: 'Channel it into productivity or problem-solving', type: 'controller' },
      { text: 'Hide it so it doesn\'t burden the people around you', type: 'pleaser' },
      { text: 'Name it clearly and make sure the right person understands it', type: 'accuser' },
      { text: 'Keep it completely internal and wait for it to pass', type: 'withholder' },
      { text: 'Avoid sitting with it by staying constantly occupied', type: 'escapist' },
    ],
  },
  {
    id: 17,
    text: 'When a relationship ends or becomes distant, your dominant feeling is…',
    answers: [
      { text: 'Some part of you expected it', type: 'saboteur' },
      { text: 'A need to understand exactly what went wrong', type: 'controller' },
      { text: 'Deep uncertainty about whether you were enough', type: 'pleaser' },
      { text: 'Clarity about what the other person did or failed to do', type: 'accuser' },
      { text: 'A quiet relief mixed with a sense of loss', type: 'withholder' },
      { text: 'Relief that the weight is gone, followed by emptiness later', type: 'escapist' },
    ],
  },
  {
    id: 18,
    text: 'What do the people close to you rarely see?',
    answers: [
      { text: 'How much you actually wanted things to work', type: 'saboteur' },
      { text: 'How afraid you are of things falling apart', type: 'controller' },
      { text: 'How much you\'ve given up to keep them comfortable', type: 'pleaser' },
      { text: 'How vulnerable you felt before the anger arrived', type: 'accuser' },
      { text: 'How much you\'re actually holding back', type: 'withholder' },
      { text: 'How often you\'ve already left in your head before physically leaving', type: 'escapist' },
    ],
  },
  {
    id: 19,
    text: 'When someone tells you that you hurt them, you…',
    answers: [
      { text: 'Become defensive, then feel it privately later', type: 'saboteur' },
      { text: 'Want to understand the exact nature of the problem so you can fix it', type: 'controller' },
      { text: 'Apologize immediately and try to repair it as fast as possible', type: 'pleaser' },
      { text: 'Need to contextualize it — what led to that moment matters', type: 'accuser' },
      { text: 'Acknowledge it minimally and withdraw until it resolves', type: 'withholder' },
      { text: 'Feel it briefly, then redirect your attention away from the discomfort', type: 'escapist' },
    ],
  },
  {
    id: 20,
    text: 'The truth about your behavior in relationships is…',
    answers: [
      { text: 'You protect yourself by not letting things become too real', type: 'saboteur' },
      { text: 'You manage people and outcomes because uncertainty frightens you', type: 'controller' },
      { text: 'You make yourself easy to keep because you\'re afraid of being left', type: 'pleaser' },
      { text: 'You locate the problem outside yourself before it can reach you', type: 'accuser' },
      { text: 'You control access to yourself as a form of protection and power', type: 'withholder' },
      { text: 'You leave before anything can fully claim you', type: 'escapist' },
    ],
  },
]
