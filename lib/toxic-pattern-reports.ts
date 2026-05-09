import { type ToxicPatternResultType } from './toxic-pattern-data'

export interface ToxicPatternReport {
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

export const toxicPatternReports: Record<ToxicPatternResultType, ToxicPatternReport> = {
  saboteur: {
    displayName: 'The Saboteur',
    summary:
      'You damage connection before it has the chance to expose you. When things become meaningful, you create distance, conflict, doubt, or chaos so you do not have to risk being fully seen. You may call it honesty, independence, or instinct — but often it is fear wearing the mask of control.',
    psychProfile:
      'Core Pattern: Destroying connection preemptively to avoid the pain of being rejected first\nCore Fear: Being seen fully and found inadequate or abandoned\nBehavior Style: Provocative, destabilizing, self-undermining at moments of closeness\nAttachment Response: Avoidant — creates problems when security feels real',
    hiddenStrength:
      'You are perceptive. You see the fragility in things before others do, and you understand human motivation at a level most people can\'t access. When you channel that perception inward instead of outward, you are capable of profound self-awareness.',
    toxicTrait:
      'You cause damage and justify it as self-protection. You test people until they fail, then use the failure as evidence that you were right not to trust. The tests are designed to be failed — so the relationship can end on your terms instead of theirs.',
    relationshipPattern:
      'You get close to people and then manufacture a reason to create distance. You push when things stabilize. You provoke when things are quiet. You disappear when things get real. The people who stay are confused. The people who leave confirm the story you already believed.',
    howPeopleExperienceYou:
      'Intense at first. Then unpredictable. People feel chosen and then discarded — often without understanding what changed. Those who know you well sense that your aggression is not about them. It doesn\'t make it easier.',
    whatTriggersYou:
      'Emotional safety. Being chosen without conditions. Situations where someone gets close enough to see you clearly. You are most dangerous when you feel loved — because it feels like exposure.',
    darkSideUnderStress:
      'You become reckless and deliberately destructive. You say things designed to wound. You behave in ways you know will cost you the relationship because losing it on your own terms feels safer than waiting to be left.',
    bestMatch:
      'The Withholder (enough distance that the relationship never becomes fully threatening) or The Escapist (they understand the need to not be fully present — they won\'t push past your defenses).',
    worstMatch:
      'The Pleaser (their endless accommodation removes the friction you use to stay safe) or The Accuser (the confrontation pattern spirals — neither of you can de-escalate).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Learn to stay present when stability feels suspicious. Not every calm moment is a trap. The relationships you destroy are not proof you were right to be afraid — they are the cost of the fear. Ask: What am I trying to prevent? Is it actually happening, or am I making it happen?',
    shareableText: 'I am The Saboteur. I damage connection before it can expose me — and the tests I give people are designed to be failed. #DarkType',
  },
  controller: {
    displayName: 'The Controller',
    summary:
      'You try to manage outcomes, people, timing, and emotional atmosphere because uncertainty feels unsafe. You may believe you are protecting the relationship, but you can slowly remove the other person\'s autonomy. Control may create order, but it does not create intimacy.',
    psychProfile:
      'Core Pattern: Managing people and situations to prevent the anxiety that comes from unpredictability\nCore Fear: Loss of control, unexpected outcomes, situations that cannot be predicted\nBehavior Style: Correcting, monitoring, steering, applying subtle pressure toward preferred outcomes\nAttachment Response: Anxious — closeness is managed through oversight rather than trust',
    hiddenStrength:
      'Reliability. When you commit to something, you follow through. You are the person who remembers, who prepares, who ensures things work. That consistency is genuinely rare, and the people who benefit from it know it.',
    toxicTrait:
      'You treat people like systems to manage. Your need for predictability slowly erodes their autonomy until they stop making independent choices — not because you forced them, but because it was easier to let you handle it. That dependency feels like love to you. It feels like suffocation to them.',
    relationshipPattern:
      'You invest deeply and expect the investment to produce reliability. You correct, anticipate, steer, and plan. You mistake oversight for care. Your partners feel safe and managed at the same time — protected and controlled in a ratio that slowly tips toward the second.',
    howPeopleExperienceYou:
      'Competent. Reliable. Tightly wound. People feel taken care of by you and monitored by you simultaneously. Those who stay long enough start to feel that their choices aren\'t fully their own.',
    whatTriggersYou:
      'Unpredictability. Chaos. People who won\'t follow reasonable plans. Situations that resist being organized. Emotional volatility that can\'t be managed. The feeling that something is happening that you can\'t see.',
    darkSideUnderStress:
      'You become rigidly controlling. Every deviation from plan feels like a threat. You micromanage, interrogate, and apply increasing pressure until the people around you either comply or collapse. You can mistake that compliance for stability.',
    bestMatch:
      'The Pleaser (they adapt easily and don\'t resist your structure) or The Watcher (they value stability and won\'t create the unpredictability you fear).',
    worstMatch:
      'The Rebel (their instinct to defy structure is your worst anxiety) or The Saboteur (their unpredictability defeats every plan you make).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Practice trust without surveillance. The order you create is not the same as the safety you want. Ask: Am I managing this situation to help it, or to stop feeling afraid? The people around you need room to fail and recover without you redirecting the outcome.',
    shareableText: 'I am The Controller. I manage people and outcomes because uncertainty feels unsafe — and control is not the same as intimacy. #DarkType',
  },
  pleaser: {
    displayName: 'The Pleaser',
    summary:
      'You survive through approval. You become useful, agreeable, flexible, and emotionally convenient so others do not leave. You may confuse being needed with being loved — and the resentment you hide is accumulating.',
    psychProfile:
      'Core Pattern: Suppressing authentic needs and presenting an agreeable self to prevent rejection\nCore Fear: Abandonment, being seen as demanding, being too much or not enough\nBehavior Style: Over-giving, conflict-avoiding, accommodating beyond personal limits\nAttachment Response: Anxious — attachment is maintained through service rather than presence',
    hiddenStrength:
      'Genuine warmth. Not all of your care is performance — much of it is real. You notice what people need and you respond. That attunement is valuable when you stop using it to buy safety and start offering it freely.',
    toxicTrait:
      'You give until you resent, then you punish quietly instead of speaking directly. The resentment you accumulate through unvoiced needs and suppressed preferences comes out sideways — as withdrawal, passive resistance, or eruptions that confuse people who thought everything was fine.',
    relationshipPattern:
      'You shape yourself around what other people need. You apologize before you\'ve been accused. You avoid conflict so reliably that your real opinions become invisible — even to you. Your relationships are warm on the surface and unequal underneath.',
    howPeopleExperienceYou:
      'Easy. Accommodating. Warm. Sometimes too warm — people eventually sense the effort behind the ease and wonder what\'s being hidden. Your anger, when it appears, surprises everyone including you.',
    whatTriggersYou:
      'Being seen as selfish. Being asked for more when you\'ve already given everything. Conflict that can\'t be resolved by apologizing. Any sign that your efforts aren\'t enough to make someone stay.',
    darkSideUnderStress:
      'You collapse or erupt. Either you give more than is sustainable and break down, or the accumulated resentment surfaces in a way that damages the very relationships you were protecting. Sometimes both.',
    bestMatch:
      'The Withholder (they give you space without demanding more than you have) or The Anchor (they can receive your care without exploiting it and will offer honesty in return).',
    worstMatch:
      'The Accuser (their confrontational approach will send you into endless appeasement) or The Controller (their management style will consume whatever autonomy you have left).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Practice directness before resentment turns into quiet punishment. Being wanted and being needed are not the same thing. Ask: What do I actually want here? Not what would make this easier — what do I actually want?',
    shareableText: 'I am The Pleaser. I survive through approval and make myself easy to keep — but being needed is not the same as being loved. #DarkType',
  },
  accuser: {
    displayName: 'The Accuser',
    summary:
      'You protect yourself by locating the threat outside yourself. When hurt, you search for who is wrong, who failed, who betrayed, or who should be blamed. Your anger may be real, but it can become a shield against vulnerability.',
    psychProfile:
      'Core Pattern: Externalizing pain by identifying the responsible party before the vulnerability can be felt\nCore Fear: Being the one at fault, being taken advantage of, trusting someone who was lying\nBehavior Style: Confrontational, interrogating, demanding accountability, escalating until recognized\nAttachment Response: Anxious-resistant — connection is tested through conflict rather than expressed through openness',
    hiddenStrength:
      'Clarity. You see patterns in how people behave and you name them directly. When you apply that clarity with care instead of protection, it is genuinely valuable. You do not accept things that should not be accepted.',
    toxicTrait:
      'You make people defend themselves before they have a chance to understand you. The accusation arrives before the vulnerability. People feel prosecuted instead of approached. The people who love you eventually stop trying to explain themselves because the explanation will never be enough.',
    relationshipPattern:
      'You enter conflict looking for the person responsible. You interrogate, revisit, and build cases. The emotional depth underneath — the hurt, the fear, the genuine longing — almost never gets said. What gets said instead is everything that was done wrong.',
    howPeopleExperienceYou:
      'Intense. Sometimes exhausting. People feel that they cannot make a mistake around you without it becoming evidence. They either become hypervigilant or they leave. The ones who stay learn to manage your reactions before they manage anything else.',
    whatTriggersYou:
      'Feeling betrayed. Being lied to. Inconsistency between what someone said and what they did. Any sense that someone is not being fully honest. Feeling taken for granted after you gave a great deal.',
    darkSideUnderStress:
      'You become punishing. The accusation expands to include every prior failure. You build a case from old evidence. You make it clear that nothing has been forgiven, only deferred. The people in your life feel the cumulative weight of not being enough.',
    bestMatch:
      'The Anchor (stable enough to stay present under your intensity without becoming defensive) or The Fortress (they won\'t take the accusations personally — they\'ll simply wait you out).',
    worstMatch:
      'The Saboteur (your mutual escalation becomes genuinely destructive) or The Pleaser (they absorb the accusation without fighting back, which satisfies nothing and breeds more resentment).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Learn to name the wound underneath the accusation. Not who caused it — the wound itself. What you are actually feeling before the anger gets there. Ask: If I weren\'t angry right now, what would I be feeling? That feeling is the real conversation.',
    shareableText: 'I am The Accuser. I protect myself by locating the threat outside myself — and my anger is real, but it shields me from vulnerability. #DarkType',
  },
  withholder: {
    displayName: 'The Withholder',
    summary:
      'You use distance, silence, emotional restraint, or limited access as protection and control. You may think you are staying calm, but sometimes you are punishing without saying it.',
    psychProfile:
      'Core Pattern: Using emotional unavailability and reduced access to manage threat and maintain power\nCore Fear: Exposure, vulnerability, being caught wanting something you might not get\nBehavior Style: Withdrawn, restrained, communicating through absence rather than words\nAttachment Response: Avoidant — connection is controlled by how much access is granted',
    hiddenStrength:
      'Composure. You do not react impulsively. You create space where others spiral. When that composure comes from actual steadiness rather than suppression, you are the most grounding presence in any room.',
    toxicTrait:
      'You punish through silence. The withdrawal is experienced as a verdict — something was done wrong, access has been revoked, and the other person has to figure out what. You maintain power by making people work to return to your good graces without naming what they lost.',
    relationshipPattern:
      'You let people close in controlled doses. You give warmth in rationed amounts. When hurt, you don\'t say so — you simply reduce access. The people in your life often feel like they are on probation without knowing the terms of the sentence.',
    howPeopleExperienceYou:
      'Contained. Mysterious. Cool. There is something slightly unreachable about you that people find compelling and eventually exhausting. Reaching you requires effort, and the effort is never quite guaranteed to succeed.',
    whatTriggersYou:
      'Being asked to give more than you planned to. Emotional demands that arrive without warning. Situations where your unexpressed feelings become visible. People who reach past your privacy before you\'ve decided to share.',
    darkSideUnderStress:
      'You disappear completely. The silence becomes total. People who need a response get nothing — and the nothing speaks clearly enough. You may not intend it as cruelty. From the outside, the distinction is often invisible.',
    bestMatch:
      'The Escapist (they understand needing space and don\'t interpret absence as punishment) or The Fortress (they have their own defenses and won\'t demand what you can\'t give).',
    worstMatch:
      'The Clinger (your withdrawal activates their worst anxiety — the dynamic spirals fast) or The Accuser (your silence becomes evidence in a case they are already building).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Practice communicating before withdrawal becomes the message. The silence is not neutral — it is being read constantly by the people around you. Ask: What am I not saying? Say that instead.',
    shareableText: 'I am The Withholder. I use distance and silence as protection — but sometimes I am punishing without saying it. #DarkType',
  },
  escapist: {
    displayName: 'The Escapist',
    summary:
      'You avoid emotional pressure by disappearing into distraction, fantasy, busyness, humor, work, or detachment. You may call it peace, but often it is avoidance — and the exit is not always freedom.',
    psychProfile:
      'Core Pattern: Reducing emotional pressure by shifting attention away from the source of discomfort\nCore Fear: Being fully claimed by something — a relationship, a feeling, a responsibility that can\'t be escaped\nBehavior Style: Deflecting, minimizing, physically or mentally absenting during emotional intensity\nAttachment Response: Avoidant — presence is conditional on emotional comfort level',
    hiddenStrength:
      'Adaptability. You move through difficulty without catastrophizing. You find the exit, which means you also often find the way through. When you apply that skill to discomfort rather than away from it, you are genuinely resourceful.',
    toxicTrait:
      'You leave without leaving. You are physically present and emotionally elsewhere. You minimize the problems that need addressing, postpone the conversations that need happening, and make yourself unavailable to the emotional weight of the people who depend on you. The people who love you learn to stop asking you to be present — and that absence becomes its own kind of abandonment.',
    relationshipPattern:
      'You are engaging at the beginning, when things are light. As depth develops, so does your distance. You don\'t fight — you redirect. You don\'t address — you distract. The relationship stays pleasant and stays shallow, and you prefer it that way even as you wonder why nothing feels real.',
    howPeopleExperienceYou:
      'Easy to be with. Hard to reach. People enjoy your company but feel that they never quite get to you. The lightness that seems like peace from inside looks like unavailability from outside.',
    whatTriggersYou:
      'Emotional heaviness that has nowhere to go. Conversations that require you to stay present with difficulty. Relationships that ask for more than you planned to offer. The feeling of being fully seen by someone who then needs something in return.',
    darkSideUnderStress:
      'You vanish. Into work, into screens, into new projects, into new people. The old obligations become background noise. You are not cruel about it — you simply stop being present, and what fills the space is whatever asks the least.',
    bestMatch:
      'The Withholder (they understand needing space and won\'t pursue you when you retreat) or The Fortress (they have their own independence and don\'t need you to be emotionally available constantly).',
    worstMatch:
      'The Clinger (your exits activate every fear they have) or The Pleaser (they will give you everything and you will not be present to receive it, which hurts them without you realizing).',
    typeSystem:
      'The Saboteur — damages connection preemptively to avoid the risk of being fully seen\nThe Controller — manages outcomes and people because uncertainty feels unsafe\nThe Pleaser — survives through approval, hiding real needs to keep relationships stable\nThe Accuser — locates threat outside the self, using anger as a shield against vulnerability\nThe Withholder — uses silence and distance as protection and control\nThe Escapist — avoids emotional pressure by disappearing into distraction or detachment',
    howToImprove:
      'Build tolerance for discomfort. The exit is not always freedom — sometimes it is the same avoidance in a new location. Ask: What am I actually avoiding? What would happen if I stayed for five more minutes than I want to?',
    shareableText: 'I am The Escapist. I avoid emotional pressure by disappearing — and I call it peace, but often it is avoidance. #DarkType',
  },
}
