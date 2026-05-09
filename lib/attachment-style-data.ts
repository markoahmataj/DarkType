export type AttachmentStyleResultType = 'anchor' | 'clinger' | 'fortress' | 'runner' | 'pushpull' | 'watcher'

export const attachmentStyleResultTypes: Record<AttachmentStyleResultType, { displayName: string; teaser: string }> = {
  anchor: {
    displayName: 'The Anchor',
    teaser: 'You can usually stay connected without losing yourself. You may still have fears, but you are more capable of repair, honesty, and emotional steadiness than most.',
  },
  clinger: {
    displayName: 'The Clinger',
    teaser: 'Closeness feels like safety, and distance feels like danger. When connection feels uncertain, your nervous system starts looking for proof — and the search can become its own problem.',
  },
  fortress: {
    displayName: 'The Fortress',
    teaser: 'You protect yourself through independence, emotional control, and distance. Needing someone feels risky — and what you call strength is often fear of dependence wearing a calm face.',
  },
  runner: {
    displayName: 'The Runner',
    teaser: 'You want connection until it starts asking something from you. When intimacy becomes real, you look for space, escape, or a reason to leave.',
  },
  pushpull: {
    displayName: 'The Push-Pull',
    teaser: 'You crave closeness and fear it at the same time. You move toward people for safety, then away from them when they get too close — and you may create the instability you are afraid of.',
  },
  watcher: {
    displayName: 'The Watcher',
    teaser: 'You stay emotionally observant but guarded. You monitor connection from a distance before deciding whether it is safe to enter fully — and sometimes that distance becomes permanent.',
  },
}

export interface AttachmentStyleQuestion {
  id: number
  text: string
  answers: Array<{
    text: string
    type: AttachmentStyleResultType
  }>
}

export const attachmentStyleQuestions: AttachmentStyleQuestion[] = [
  {
    id: 1,
    text: 'When someone important to you doesn\'t respond for a few hours, you…',
    answers: [
      { text: 'Notice it without panicking — they probably have a reason', type: 'anchor' },
      { text: 'Start building a story in your head about what it means', type: 'clinger' },
      { text: 'Don\'t think much of it — you prefer space anyway', type: 'fortress' },
      { text: 'Feel unexpectedly relieved that you have room to breathe', type: 'runner' },
      { text: 'Feel mildly anxious, then remind yourself to back off', type: 'pushpull' },
      { text: 'File it as data and observe what happens next', type: 'watcher' },
    ],
  },
  {
    id: 2,
    text: 'When someone you care about says "we need to talk," your immediate reaction is…',
    answers: [
      { text: 'Some apprehension, but you wait to hear what it is before reacting', type: 'anchor' },
      { text: 'A rush of dread — you start scanning for what you did wrong', type: 'clinger' },
      { text: 'Mild irritation — you don\'t like ambiguous pressure', type: 'fortress' },
      { text: 'A wave of adrenaline, followed by the urge to get out ahead of it', type: 'runner' },
      { text: 'Panic mixed with the thought that maybe this is what you were waiting for', type: 'pushpull' },
      { text: 'You go quiet and carefully observe their tone for more information', type: 'watcher' },
    ],
  },
  {
    id: 3,
    text: 'When you start developing genuine feelings for someone, your instinct is to…',
    answers: [
      { text: 'Move toward it — with some awareness of the risk', type: 'anchor' },
      { text: 'Want more contact, more confirmation, more signs that it\'s mutual', type: 'clinger' },
      { text: 'Get quieter — needing someone feels uncomfortable', type: 'fortress' },
      { text: 'Get cautious — real feelings mean real exposure', type: 'runner' },
      { text: 'Move in intensely, then second-guess and pull back', type: 'pushpull' },
      { text: 'Observe carefully before showing any of it', type: 'watcher' },
    ],
  },
  {
    id: 4,
    text: 'What does emotional intimacy feel like to you?',
    answers: [
      { text: 'Safe enough, though it still takes effort', type: 'anchor' },
      { text: 'What you\'ve been waiting for — and something you might lose', type: 'clinger' },
      { text: 'Uncomfortable — it means depending on someone', type: 'fortress' },
      { text: 'Like stepping into a current that could take over', type: 'runner' },
      { text: 'Something that oscillates between relief and overwhelm', type: 'pushpull' },
      { text: 'Something you approach slowly, from the outside', type: 'watcher' },
    ],
  },
  {
    id: 5,
    text: 'When a relationship is going well, you…',
    answers: [
      { text: 'Feel settled and appreciative without becoming complacent', type: 'anchor' },
      { text: 'Wait for the other shoe to drop', type: 'clinger' },
      { text: 'Maintain your independence carefully', type: 'fortress' },
      { text: 'Start to feel the edges of restlessness', type: 'runner' },
      { text: 'Enjoy it until closeness starts to feel like pressure', type: 'pushpull' },
      { text: 'Keep a part of yourself observing rather than fully inside it', type: 'watcher' },
    ],
  },
  {
    id: 6,
    text: 'When someone withdraws or becomes less available, you…',
    answers: [
      { text: 'Reach out once, give them space, and wait', type: 'anchor' },
      { text: 'Escalate contact — you need to understand what shifted', type: 'clinger' },
      { text: 'Welcome it — you need space anyway', type: 'fortress' },
      { text: 'Feel a surprising sense of relief', type: 'runner' },
      { text: 'Immediately want what you weren\'t sure you wanted before', type: 'pushpull' },
      { text: 'Observe without acting, building a hypothesis', type: 'watcher' },
    ],
  },
  {
    id: 7,
    text: 'When you feel close to someone, what concerns you most?',
    answers: [
      { text: 'That things will change and you won\'t handle it well', type: 'anchor' },
      { text: 'That you need them more than they need you', type: 'clinger' },
      { text: 'That they now have leverage over you', type: 'fortress' },
      { text: 'That you\'ll have to stay even when you want to go', type: 'runner' },
      { text: 'That you\'ll do something to ruin it', type: 'pushpull' },
      { text: 'That what you see isn\'t the whole picture', type: 'watcher' },
    ],
  },
  {
    id: 8,
    text: 'How do you handle reassurance in a relationship?',
    answers: [
      { text: 'You ask for it when you need it and accept it without needing it constantly', type: 'anchor' },
      { text: 'You need it regularly and still doubt it when it comes', type: 'clinger' },
      { text: 'You rarely ask for it and feel uncomfortable receiving it', type: 'fortress' },
      { text: 'You don\'t ask and get suspicious when it\'s offered unprompted', type: 'runner' },
      { text: 'You ask for it, get it, feel better, then wonder if it was genuine', type: 'pushpull' },
      { text: 'You notice when it\'s offered and track whether the actions match the words', type: 'watcher' },
    ],
  },
  {
    id: 9,
    text: 'The worst thing someone could do in a relationship with you is…',
    answers: [
      { text: 'Be dishonest about something that matters', type: 'anchor' },
      { text: 'Suddenly pull away without explanation', type: 'clinger' },
      { text: 'Demand more closeness than you\'re ready to give', type: 'fortress' },
      { text: 'Make you feel trapped or obligated to stay', type: 'runner' },
      { text: 'Be consistently available — it somehow starts to feel like pressure', type: 'pushpull' },
      { text: 'Act in ways that contradict what they\'ve said', type: 'watcher' },
    ],
  },
  {
    id: 10,
    text: 'When you\'ve been hurt in a previous relationship, your response was to…',
    answers: [
      { text: 'Process it, learn from it, and eventually open up again', type: 'anchor' },
      { text: 'Carry it into the next relationship without meaning to', type: 'clinger' },
      { text: 'Decide you could manage better alone', type: 'fortress' },
      { text: 'Move on quickly — maybe too quickly', type: 'runner' },
      { text: 'Cycle between wanting someone new and fearing the same outcome', type: 'pushpull' },
      { text: 'Become more careful and observant before trusting again', type: 'watcher' },
    ],
  },
  {
    id: 11,
    text: 'What feels most true about how you behave when you\'re insecure in a relationship?',
    answers: [
      { text: 'I communicate it, sometimes imperfectly', type: 'anchor' },
      { text: 'I need a lot of proof that everything is okay', type: 'clinger' },
      { text: 'I say I\'m fine and create more space', type: 'fortress' },
      { text: 'I start scanning for an exit', type: 'runner' },
      { text: 'I push for closeness and then panic when I get it', type: 'pushpull' },
      { text: 'I go quiet and observe more carefully before doing anything', type: 'watcher' },
    ],
  },
  {
    id: 12,
    text: 'When someone you\'re involved with becomes close to other people, you…',
    answers: [
      { text: 'Feel secure enough to be glad for them', type: 'anchor' },
      { text: 'Feel a low-grade threat you try to suppress', type: 'clinger' },
      { text: 'Feel nothing much — you keep your own life independent', type: 'fortress' },
      { text: 'Feel oddly relieved — less responsibility on you', type: 'runner' },
      { text: 'Feel threatened in a way you can\'t entirely explain', type: 'pushpull' },
      { text: 'Notice it and track whether their behavior toward you changes', type: 'watcher' },
    ],
  },
  {
    id: 13,
    text: 'How do you handle endings in relationships?',
    answers: [
      { text: 'You process them, even when it\'s painful', type: 'anchor' },
      { text: 'You have trouble letting go — you replay what could have been different', type: 'clinger' },
      { text: 'You move on faster than most people expect', type: 'fortress' },
      { text: 'You feel a sense of release mixed with some emptiness', type: 'runner' },
      { text: 'You grieve intensely, then wonder if you caused it', type: 'pushpull' },
      { text: 'You need to understand exactly what happened before you can move forward', type: 'watcher' },
    ],
  },
  {
    id: 14,
    text: 'When you imagine your ideal relationship, it looks like…',
    answers: [
      { text: 'Something consistent and honest, with space to be imperfect', type: 'anchor' },
      { text: 'Someone who makes it clear they choose you, every day', type: 'clinger' },
      { text: 'Something where both people maintain independence and don\'t become enmeshed', type: 'fortress' },
      { text: 'Something real but without the feeling of being contained', type: 'runner' },
      { text: 'Something intense that doesn\'t consume you — though you\'re not sure that\'s possible', type: 'pushpull' },
      { text: 'Something where you feel safe enough to be fully present', type: 'watcher' },
    ],
  },
  {
    id: 15,
    text: 'What do you struggle with most when you care about someone?',
    answers: [
      { text: 'Accepting that you can\'t control how it goes', type: 'anchor' },
      { text: 'Not reading into every small change in their energy', type: 'clinger' },
      { text: 'Letting them close enough to actually matter', type: 'fortress' },
      { text: 'Staying present when things start to feel permanent', type: 'runner' },
      { text: 'Not creating the distance you\'re afraid of', type: 'pushpull' },
      { text: 'Moving from observation to actual participation', type: 'watcher' },
    ],
  },
  {
    id: 16,
    text: 'When you feel close to someone, your first instinct is…',
    answers: [
      { text: 'To appreciate it and stay present in it', type: 'anchor' },
      { text: 'To want more — more contact, more confirmation', type: 'clinger' },
      { text: 'To maintain your equilibrium so you don\'t become too reliant', type: 'fortress' },
      { text: 'To enjoy it and then quietly start to notice the limits', type: 'runner' },
      { text: 'To lean in and then start scanning for what could destabilize it', type: 'pushpull' },
      { text: 'To stay present but keep one part of yourself at a slight remove', type: 'watcher' },
    ],
  },
  {
    id: 17,
    text: 'When someone offers you emotional support, you…',
    answers: [
      { text: 'Accept it, even if it takes a moment to let it in', type: 'anchor' },
      { text: 'Take it gratefully and feel the need to keep checking it\'s still there', type: 'clinger' },
      { text: 'Deflect it — you don\'t like needing help', type: 'fortress' },
      { text: 'Feel briefly touched and then slightly crowded', type: 'runner' },
      { text: 'Accept it but wonder when they\'ll stop', type: 'pushpull' },
      { text: 'Receive it carefully, observing what they expect in return', type: 'watcher' },
    ],
  },
  {
    id: 18,
    text: 'What feeling appears most often in your relationships without being named?',
    answers: [
      { text: 'Quiet appreciation mixed with low-level vulnerability', type: 'anchor' },
      { text: 'Fear that this will eventually end', type: 'clinger' },
      { text: 'The desire to stay but only on your own terms', type: 'fortress' },
      { text: 'The awareness that part of you is always standing near the door', type: 'runner' },
      { text: 'The contradiction between wanting closeness and finding it overwhelming', type: 'pushpull' },
      { text: 'A slight distance between your full self and what you\'re showing', type: 'watcher' },
    ],
  },
  {
    id: 19,
    text: 'When someone important to you pulls back, you…',
    answers: [
      { text: 'Check in once and try to give them space', type: 'anchor' },
      { text: 'Feel it intensely and struggle to wait for them to come back', type: 'clinger' },
      { text: 'Give them even more space — maybe this is a signal', type: 'fortress' },
      { text: 'Feel some relief, which surprises you', type: 'runner' },
      { text: 'Want them back immediately even if you were the one who needed space first', type: 'pushpull' },
      { text: 'Observe carefully and wait before deciding what to do', type: 'watcher' },
    ],
  },
  {
    id: 20,
    text: 'The truth about how you attach to people is…',
    answers: [
      { text: 'You can connect without losing yourself, though it still takes work', type: 'anchor' },
      { text: 'You love more intensely than feels safe and it controls you more than you admit', type: 'clinger' },
      { text: 'You keep people far enough away that they can\'t take too much when they leave', type: 'fortress' },
      { text: 'You want connection but something in you always watches for the door', type: 'runner' },
      { text: 'You\'re caught between needing closeness and being afraid of what it costs', type: 'pushpull' },
      { text: 'You protect yourself by staying just outside the thing you actually want', type: 'watcher' },
    ],
  },
]
