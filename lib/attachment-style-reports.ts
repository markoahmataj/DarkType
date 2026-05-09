import { type AttachmentStyleResultType } from './attachment-style-data'

export interface AttachmentStyleReport {
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

export const attachmentStyleReports: Record<AttachmentStyleResultType, AttachmentStyleReport> = {
  anchor: {
    displayName: 'The Anchor',
    summary:
      'You can usually stay connected without losing yourself. You may still have fears, but you are more capable of repair, honesty, and emotional steadiness than most. This is not the absence of difficulty — it is the ability to move through difficulty without destroying what matters.',
    psychProfile:
      'Core Pattern: Maintaining connection through honesty and repair rather than control or avoidance\nCore Fear: Situations that outpace your capacity to stay present\nBehavior Style: Direct, consistent, capable of vulnerability without collapsing\nAttachment Response: Secure-leaning — can tolerate uncertainty without extreme defensive behavior',
    hiddenStrength:
      'You repair. Most people either attack or retreat when things break down — you stay and work. That capacity is rare and it is the reason people who know you feel genuinely safe. Not comfortable — safe.',
    toxicTrait:
      'You can underestimate how destabilizing closeness feels for others. Your steadiness reads as simple from inside. From outside, it can create an implicit pressure to match a standard you don\'t realize you\'re setting. People around you sometimes feel quietly inadequate.',
    relationshipPattern:
      'You seek clarity and consistency. You communicate what you need and expect the same. When things go wrong, you want to understand and repair rather than punish or withdraw. Your presence is grounding. It can also be demanding — because your standards for honesty are real.',
    howPeopleExperienceYou:
      'Stable. Present. Trustworthy. Sometimes unsettling — because genuine steadiness is unusual enough that people wait for it to crack. When it doesn\'t, they either relax or feel exposed by comparison.',
    whatTriggersYou:
      'Dishonesty. People who won\'t repair. Situations where your steadiness is taken for granted. The slow erosion of a relationship by someone who keeps choosing avoidance over engagement.',
    darkSideUnderStress:
      'You become quietly distant and begin the process of releasing the relationship. It is not dramatic. You stop investing. You let the distance grow. When you\'re done, you are done — and the other person often doesn\'t see it coming.',
    bestMatch:
      'Another Anchor (you both understand repair and won\'t punish each other for needing it) or The Watcher (your steadiness gives them enough safety to eventually participate).',
    worstMatch:
      'The Saboteur (your stability becomes the target of their destabilizing behavior) or The Runner (just when they trust you, they\'ll create distance — and you\'ll have to decide whether to follow).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Keep your steadiness without becoming responsible for regulating everyone else. You are not the emotional support structure for every relationship you enter. Ask: Am I staying because I want to, or because leaving feels like failure?',
    shareableText: 'I am The Anchor. I stay connected without losing myself — and I repair instead of retreat. #DarkType',
  },
  clinger: {
    displayName: 'The Clinger',
    summary:
      'Closeness feels like safety, and distance feels like danger. When connection feels uncertain, your nervous system starts looking for proof. The search itself can become the problem — and the reassurance you need rarely lasts long enough.',
    psychProfile:
      'Core Pattern: Seeking constant confirmation of connection to manage the anxiety of potential loss\nCore Fear: Abandonment, being left without warning, being replaced\nBehavior Style: Monitoring, reassurance-seeking, escalating contact when anxious\nAttachment Response: Anxious — closeness is maintained through vigilance rather than trust',
    hiddenStrength:
      'Emotional depth. You feel things completely. Your capacity for attachment, when met with the right person, creates real intimacy — not the managed kind, but the kind that actually asks something. That is not a small thing.',
    toxicTrait:
      'You pressure people through the intensity of your need. You may think you are asking for reassurance. The person receiving it may experience it as surveillance. The more they give, the more you need — and eventually the giving stops not because they stopped caring, but because they ran out.',
    relationshipPattern:
      'You track. Tone shifts, response times, phrases that seem different from last time. You build a story from the data. The story is almost always about whether they are still here. When they are, you relax briefly. When you\'re not sure, the monitoring restarts.',
    howPeopleExperienceYou:
      'Warm. Intense. Present — sometimes more present than they can match. People feel seen and then watched. The watching, over time, becomes its own weight.',
    whatTriggersYou:
      'Being left on read. Changes in someone\'s energy that aren\'t explained. Any sign that someone is moving away from you, however small. Being compared unfavorably to someone else.',
    darkSideUnderStress:
      'You become accusatory and urgent. You interpret silence as abandonment and absence as rejection. You send the messages you know you shouldn\'t. You demand proof that someone is still there in ways that push them further away.',
    bestMatch:
      'The Anchor (stable enough to absorb your intensity without needing to escape it) or The Fortress (their independence provides structure — though the distance is hard at first).',
    worstMatch:
      'The Runner (your need activates their exit instinct) or The Escapist (they will disappear exactly when you need them most).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Learn to self-soothe before asking another person to prove they are staying. The proof you seek is not in their response — it is in your ability to tolerate the uncertainty. Ask: What would I need to feel right now if they were not available to provide it?',
    shareableText: 'I am The Clinger. Closeness feels like safety and distance feels like danger — and I need proof that you\'re still here. #DarkType',
  },
  fortress: {
    displayName: 'The Fortress',
    summary:
      'You protect yourself through independence, emotional control, and distance. Needing someone feels risky. What you call strength is often fear of dependence wearing a calm face — and the people who want to reach you often can\'t find the entrance.',
    psychProfile:
      'Core Pattern: Maintaining independence and emotional self-containment to prevent the risk of dependence\nCore Fear: Being vulnerable to someone who could then withdraw or hurt you\nBehavior Style: Self-reliant, emotionally private, minimizing expressed needs\nAttachment Response: Avoidant — connection is valued but kept at a distance that feels safe',
    hiddenStrength:
      'Self-sufficiency. You do not collapse when things fall apart. You have built an internal structure that does not depend on external validation to stand. That is a genuine achievement — even if it cost you something.',
    toxicTrait:
      'You emotionally disappear inside the relationship. You are there in form — present, functional, even affectionate — but the person closest to you never quite reaches you. They feel alone in the connection. That loneliness, without a name, often ends things.',
    relationshipPattern:
      'You allow closeness in carefully regulated amounts. You value independence in yourself and others. When someone needs more than you offer, you don\'t escalate — you reduce. The space between you grows. You call it respect for autonomy. They call it being kept at arm\'s length.',
    howPeopleExperienceYou:
      'Composed. Self-contained. Interesting from a distance. Up close, there is always something just out of reach. People who get attached to you often describe the relationship as one-sided — not because you don\'t care, but because caring feels dangerous.',
    whatTriggersYou:
      'Being needed in ways that exceed what you planned to offer. Emotional demands that arrive without invitation. Situations that reveal more of you than you intended. People who interpret your independence as rejection.',
    darkSideUnderStress:
      'You become coldly efficient. Emotional withdrawal completes. You manage the situation without any of the warmth that was present before. People who depended on that warmth feel the drop sharply.',
    bestMatch:
      'Another Fortress (you understand each other\'s need for space without taking it personally) or The Watcher (they observe carefully before needing — the pace suits you).',
    worstMatch:
      'The Clinger (your independence activates their worst fears) or The Accuser (your emotional unavailability becomes evidence in the case they are building against you).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Practice letting someone matter without treating that as weakness. The distance you maintain is not objectivity — it is protection. Ask: What would I lose if I let this person closer? That answer is probably the thing worth examining.',
    shareableText: 'I am The Fortress. I protect myself through independence and emotional distance — what I call strength is often fear of dependence. #DarkType',
  },
  runner: {
    displayName: 'The Runner',
    summary:
      'You want connection until it starts asking something from you. When intimacy becomes real, you look for space, escape, or a reason to leave. You may mistake emotional activation for incompatibility — and the relationships you walk away from may have been fine.',
    psychProfile:
      'Core Pattern: Experiencing genuine desire for connection followed by retreat when it becomes real\nCore Fear: Entrapment, obligation, losing the exit, being fully claimed by someone\nBehavior Style: Warm in early stages, increasingly distant as intimacy deepens\nAttachment Response: Avoidant — closeness triggers an exit search rather than comfort',
    hiddenStrength:
      'You are genuinely present before the anxiety arrives. In early stages of connection you are attentive, warm, and fully there. That quality is real. The problem is not your capacity to connect — it is your capacity to stay when the connection becomes weight.',
    toxicTrait:
      'You disappear without explanation. Not dramatically — you just become increasingly unavailable. The person waiting for you to come back often doesn\'t get a clear answer about what happened. The relationship ends not with a conversation but with a slow withdrawal that eventually becomes undeniable.',
    relationshipPattern:
      'You get close, then need space. Get close again, then need more space. The pattern is consistent enough that the people who stay learn not to trust the closeness. When they stop trusting it, you often feel relieved — because now there is a reason to go.',
    howPeopleExperienceYou:
      'Captivating at first. Then unreachable. Then gone. People who fall for you often describe confusion more than hurt — they couldn\'t tell when you left, only that you had.',
    whatTriggersYou:
      'Commitment language. Future plans. Situations that imply permanence. Someone reorganizing their life around your presence. The feeling that you owe something that you didn\'t agree to owe.',
    darkSideUnderStress:
      'You create an exit. You find a reason the relationship isn\'t working, and you use it. The reason may be real — but it is also convenient. You would have found something eventually.',
    bestMatch:
      'The Fortress (they won\'t need you to stay and won\'t make leaving feel like abandonment) or The Watcher (they give you enough space that you don\'t feel the walls closing).',
    worstMatch:
      'The Clinger (your retreat is their emergency) or The Anchor (your pattern of withdrawal eventually exhausts their willingness to repair).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Learn the difference between danger and discomfort. Most of what triggers your exits is discomfort, not danger. Ask: Am I leaving because something is wrong, or because something became real?',
    shareableText: 'I am The Runner. I want connection until it asks something from me — and I mistake emotional activation for incompatibility. #DarkType',
  },
  pushpull: {
    displayName: 'The Push-Pull',
    summary:
      'You crave closeness and fear it at the same time. You move toward people for safety, then away from them when they get too close. You may create the instability you are afraid of — and the people trying to love you often don\'t know which version of you they\'ll find.',
    psychProfile:
      'Core Pattern: Oscillating between need for closeness and retreat from it, unable to stabilize in either\nCore Fear: Both abandonment and engulfment — being left and being trapped\nBehavior Style: Alternating intensity and withdrawal, reassurance-seeking followed by pushing away\nAttachment Response: Disorganized — wanting and fearing the same thing simultaneously',
    hiddenStrength:
      'Depth. You feel things at a frequency most people don\'t access. When you\'re in the connection, you are fully in it. That intensity, when it stabilizes, is the kind of presence people remember for the rest of their lives.',
    toxicTrait:
      'You create the inconsistency that hurts you most. You pull people close until they depend on you, then push them away until they give up, then pull them back when they start to leave. The cycle is not conscious. It is still damaging. The people who stay through multiple cycles often leave changed in ways that aren\'t good.',
    relationshipPattern:
      'Intensity followed by withdrawal followed by intensity. Your partners learn to brace for the shifts. The times of closeness feel real and important. The withdrawals feel like punishment for trusting. The cycle repeats until someone leaves — often them, sometimes you.',
    howPeopleExperienceYou:
      'Magnetic and then unreachable. The contrast is the problem — not either state on its own. People say they never knew where they stood. That uncertainty is not accidental. It is the shape of your attachment.',
    whatTriggersYou:
      'Feeling too close — it activates the retreat. Feeling too far away — it activates the pursuit. Being held at a consistent distance that never varies. The stability itself can feel threatening.',
    darkSideUnderStress:
      'The oscillation accelerates. You need closeness urgently and then cannot tolerate it when it arrives. You say things in pursuit that you contradict in retreat. People who care about you become confused and eventually exhausted.',
    bestMatch:
      'The Anchor (stable enough to survive the cycles without retaliating) or the Watcher (patient enough to wait without disappearing).',
    worstMatch:
      'The Clinger (two anxious attachment patterns amplify each other into something destabilizing) or The Runner (your pursuit activates their exit, your retreat activates their return — the cycle never resolves).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Build consistency slowly. Do not make permanent decisions during emotional spikes. Ask: Am I pushing because I actually want distance, or because closeness activated something I haven\'t learned to tolerate yet?',
    shareableText: 'I am The Push-Pull. I crave closeness and fear it at the same time — and I create the instability I\'m afraid of. #DarkType',
  },
  watcher: {
    displayName: 'The Watcher',
    summary:
      'You stay emotionally observant but guarded. You monitor connection from a distance before deciding whether it is safe to enter fully. You may think you are being careful — but sometimes you are avoiding participation entirely.',
    psychProfile:
      'Core Pattern: Observing relational dynamics from a protected distance before committing emotional investment\nCore Fear: Entering fully and discovering it wasn\'t safe — making yourself vulnerable to something that didn\'t earn it\nBehavior Style: Analytic, cautious, emotionally present in a measured way\nAttachment Response: Avoidant-leaning — connection is approached as a hypothesis to be tested',
    hiddenStrength:
      'Discernment. You are rarely wrong about people over time. You see inconsistencies others miss. Your patience before committing means that when you do commit, it is with actual information rather than projection. That is genuinely valuable.',
    toxicTrait:
      'You study relationships without inhabiting them. The observation keeps you protected but also prevents the thing you are watching from becoming real. People eventually feel like subjects rather than partners — and the relationship fails not from bad data, but from insufficient participation.',
    relationshipPattern:
      'You observe before you enter. You maintain a slight remove — present but not fully inside. You track patterns, test consistency, and measure reliability over time. By the time you decide it\'s safe, some of the people you were watching have found someone who didn\'t require a trial period.',
    howPeopleExperienceYou:
      'Perceptive. Thoughtful. Present in a way that feels slightly off-center. People feel seen by you without feeling fully met. The observation is accurate. The participation is limited.',
    whatTriggersYou:
      'Inconsistencies between what someone says and what they do. Pressure to commit before you\'ve gathered enough information. Being read as cold when you are simply careful. Having your caution labeled as emotional unavailability.',
    darkSideUnderStress:
      'You withdraw completely into analysis. The relationship becomes a data problem. You generate explanations for what is happening but do not engage with it emotionally. The person across from you feels abandoned in a very particular way — thoroughly observed but not reached.',
    bestMatch:
      'The Anchor (stable enough to wait without pushing — and honest enough to make the data trustworthy) or The Fortress (they understand a measured pace and won\'t interpret caution as rejection).',
    worstMatch:
      'The Clinger (your observation reads as withdrawal and activates their abandonment fears immediately) or The Push-Pull (their inconsistency produces conflicting data that makes commitment impossible to justify).',
    typeSystem:
      'The Anchor — stays connected without losing self, capable of repair and emotional steadiness\nThe Clinger — needs closeness intensely, reads distance as danger, seeks constant proof\nThe Fortress — protects through independence and emotional distance, avoids dependence\nThe Runner — wants connection until it demands something real, then looks for space\nThe Push-Pull — craves and fears closeness simultaneously, creates the instability they dread\nThe Watcher — observes before entering, monitors from a slight emotional distance',
    howToImprove:
      'Practice entering the relationship instead of only studying it. The information you need to feel safe will not arrive through observation alone. Ask: At what point would I have enough data to participate? If there\'s no answer, the data is not the real barrier.',
    shareableText: 'I am The Watcher. I observe connection from a distance before deciding it\'s safe to enter — and sometimes I never enter. #DarkType',
  },
}
