import { type EmotionalTriggerResultType } from './emotional-trigger-data'

export interface EmotionalTriggerReport {
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

export const emotionalTriggerReports: Record<EmotionalTriggerResultType, EmotionalTriggerReport> = {
  rejection: {
    displayName: 'The Rejection Trigger',
    summary:
      'You react most strongly when you feel unwanted, dismissed, replaced, or emotionally deprioritized. You may interpret neutrality as rejection — and your nervous system often begins protecting itself before the threat is confirmed.',
    psychProfile:
      'Core Trigger: Perceived unwantedness, being deprioritized or emotionally set aside\nCore Fear: Being fundamentally unwanted or replaceable\nBehavior Under Threat: Withdrawal, preemptive coldness, seeking reassurance or disappearing before rejection arrives\nRelational Pattern: Guards against rejection so thoroughly that closeness becomes difficult to sustain',
    hiddenStrength:
      'Attunement. You know what it feels like to be overlooked, so you rarely make others feel that way. When you are not in protection mode, you are one of the most perceptive presences in a room.',
    toxicTrait:
      'You reject people before they can reject you. The coldness arrives before the threat does. People who were not going anywhere receive the message that they already have — and sometimes they leave because of it.',
    relationshipPattern:
      'You monitor for signs of deprioritization. Small shifts in attention carry enormous weight. When you feel a withdrawal coming, you either pursue urgently or retreat completely — rarely the middle. The people who stay with you learn to be very consistent, or they learn to manage your reactions.',
    howPeopleExperienceYou:
      'Warm and then suddenly distant. The shift is confusing because it often precedes the thing it was responding to. People who care about you sometimes don\'t understand what they did — because they didn\'t do it yet.',
    whatTriggersYou:
      'Unanswered messages. Changes in someone\'s warmth or availability. Being the last to know something. Situations where you feel like an afterthought. Being compared unfavorably.',
    darkSideUnderStress:
      'You become cold, distant, and preemptively withdrawn. You shut people out before they shut you out. The self-protection looks like indifference from outside but is experienced as urgency from inside.',
    bestMatch:
      'The Anchor (consistent enough that the trigger fires less often) or a fellow Rejection Trigger who has done enough work to recognize the pattern — and call it when it starts.',
    worstMatch:
      'The Runner (their natural withdrawal activates your worst fears) or the Withholder (their controlled access is indistinguishable from the rejection you\'re watching for).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Learn to separate actual rejection from old fear being activated. Ask: Is this person actually leaving, or am I reading departure into something that isn\'t one? The answer is usually the second one. But you have to be willing to wait long enough to find out.',
    shareableText: 'I am The Rejection Trigger. I protect myself from being unwanted so thoroughly that I sometimes reject people before they can reject me. #DarkType',
  },
  control: {
    displayName: 'The Control Trigger',
    summary:
      'You react most strongly when you feel trapped, pressured, managed, or forced into something. You may resist help because it feels like control — and you will sacrifice connection before you sacrifice freedom.',
    psychProfile:
      'Core Trigger: Perceived loss of autonomy, being managed or pressured into compliance\nCore Fear: Being trapped, losing the right to choose, having someone else determine your life\nBehavior Under Threat: Pushback, resistance, reclaiming control even when cooperation would help\nRelational Pattern: Independence is maintained through rejection of influence — even when the influence is benign',
    hiddenStrength:
      'Autonomy. You are not easily manipulated or pushed around. Your self-determination is genuine and hard-won. The people who value independence in a partner find you unusually capable of it.',
    toxicTrait:
      'You resist things that are not actually controlling you. Care reads as management. Concern reads as surveillance. The person who loves you and wants to help is processed as a threat to your autonomy — and they feel the resistance even when they were trying to give you something.',
    relationshipPattern:
      'You keep one hand near the door. You do not enter situations where exiting would be complicated. You resist obligations that were not explicitly negotiated. The people in your life learn not to assume too much about your future presence.',
    howPeopleExperienceYou:
      'Self-possessed. Sometimes unavailable. People feel that your cooperation is conditional on not feeling required. They are right. The challenge is that some requirements are just relationships.',
    whatTriggersYou:
      'Being told what to do. Plans made on your behalf. Expectations assumed rather than discussed. Feeling that something is being organized around your cooperation without your input.',
    darkSideUnderStress:
      'You become adversarial. Something that was a cooperative situation becomes a contest. You assert your position with force, sometimes damaging things that were working, because being right about your autonomy felt more important than the outcome.',
    bestMatch:
      'The Fortress (they understand independence as a value and won\'t interpret your limits as rejection) or The Runner (they have their own exit instinct and won\'t demand what you won\'t give).',
    worstMatch:
      'The Controller (your trigger is their comfort zone — the conflict is constant) or the Clinger (their need for reassurance reads as exactly the kind of management you resist).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Practice distinguishing pressure from partnership. Not everything that asks something of you is trying to contain you. Ask: Is this person actually limiting me, or am I treating a reasonable request as a threat to my freedom?',
    shareableText: 'I am The Control Trigger. I will sacrifice connection before I sacrifice freedom — and I resist even when the thing resisting me is care. #DarkType',
  },
  disrespect: {
    displayName: 'The Disrespect Trigger',
    summary:
      'You react most strongly when you feel belittled, underestimated, mocked, or spoken to as though you are beneath someone. You may hear disrespect even when someone is simply disagreeing — and the sting of being underestimated can last a long time.',
    psychProfile:
      'Core Trigger: Perceived dismissal, condescension, belittlement, or challenge to self-worth\nCore Fear: Being fundamentally small, unworthy, or beneath the people around you\nBehavior Under Threat: Defensiveness, confrontation, withdrawal, demonstration of value\nRelational Pattern: Constantly monitoring for signs of being taken seriously',
    hiddenStrength:
      'Standards. You do not accept treatment that is beneath you. You model self-respect in a way that is genuine. The people who know you well understand that your dignity is not performance — it is real.',
    toxicTrait:
      'Every disagreement can become a dominance test. You hear dismissal in things that were simply differences of opinion. People who are trying to engage with your ideas feel like they are attacking you. The conversation becomes about your value rather than the topic.',
    relationshipPattern:
      'You are generous with your attention and effort when you feel respected. When you don\'t, you become precise and cold. The transition can be sudden and confusing to people who didn\'t register the thing that changed it.',
    howPeopleExperienceYou:
      'Confident. High-standard. Engaging when engaged correctly. Difficult when not. People who understand you feel that the standards are reasonable. People who don\'t feel like they can never quite figure out the rules.',
    whatTriggersYou:
      'A dismissive tone. Being talked over. Someone explaining something to you as though you didn\'t already know it. Being treated as less capable than you are. Any implication that your perspective is smaller than the other person\'s.',
    darkSideUnderStress:
      'You become sharp and confrontational. The goal shifts from resolving the situation to proving your value. You can win arguments at significant cost to the relationship, and sometimes the relationship doesn\'t survive the win.',
    bestMatch:
      'The Anchor (they engage your ideas directly without power plays) or a fellow Disrespect Trigger who has enough self-awareness to recognize the pattern and not take it personally when it fires.',
    worstMatch:
      'The Controller (their management style reads as condescension) or The Pressure Point (they know exactly which button to press — and sometimes will).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Learn to protect your dignity without turning every disagreement into a dominance test. Ask: Is this person disrespecting me, or do I feel threatened by something that has nothing to do with respect? The two feel identical. They are not.',
    shareableText: 'I am The Disrespect Trigger. I cannot function easily in relationships where I feel small — and the sting of being underestimated lasts. #DarkType',
  },
  abandonment: {
    displayName: 'The Abandonment Trigger',
    summary:
      'You react most strongly when you sense someone leaving, pulling away, losing interest, or becoming emotionally unavailable. Your deepest fear is someone leaving and never coming back — and the certainty you seek can create the pressure that pushes people away.',
    psychProfile:
      'Core Trigger: Perceived withdrawal, diminishing availability, or signs of someone moving away\nCore Fear: Being left without warning, being ultimately insufficient for someone to stay\nBehavior Under Threat: Urgency, pursuit, escalating contact, seeking proof of continued presence\nRelational Pattern: Constant monitoring of connection stability, hypervigilant to shifts',
    hiddenStrength:
      'Loyalty. You invest completely. When you are in a relationship, you are fully in it. You do not keep one foot out. That total presence, for the right person, creates something genuinely rare.',
    toxicTrait:
      'You create the pressure that produces what you fear. The urgency of your monitoring, the frequency of contact, the demands for proof — these wear people down. Not because they don\'t care, but because the need outpaces what any person can sustain.',
    relationshipPattern:
      'You track availability closely. Changes in tone, response time, or energy are registered and analyzed. When you feel withdrawal coming, you escalate — and the escalation often accelerates the withdrawal. You sometimes know you\'re doing it while you\'re doing it.',
    howPeopleExperienceYou:
      'Deeply committed. Intensely present. At times overwhelming. The people who can match your investment feel met by you. The ones who can\'t feel pursued.',
    whatTriggersYou:
      'Slower responses. Someone being busy without explanation. A change in warmth. Any sign that you\'re being deprioritized. Someone else getting more of their attention.',
    darkSideUnderStress:
      'You become panicked and urgent. You send too many messages. You accuse. You try to force a reassurance that will only hold until the next signal arrives. People who tried to stay find themselves needing space from the intensity.',
    bestMatch:
      'The Anchor (consistent enough that the trigger fires less often — and skilled enough at repair to stay through the moments it does).',
    worstMatch:
      'The Runner (their withdrawal pattern activates your worst anxiety in a cycle that neither can break) or The Withholder (their controlled access is indistinguishable from impending abandonment).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Build inner stability before demanding outer proof. Ask: Can I tolerate this uncertainty for long enough to see what it actually is? The answer, with practice, becomes yes. The proof you need will not come from someone else — it has to come from inside.',
    shareableText: 'I am The Abandonment Trigger. My deepest fear is someone leaving and never coming back — and I chase certainty so hard it creates pressure. #DarkType',
  },
  exposure: {
    displayName: 'The Exposure Trigger',
    summary:
      'You react most strongly when you feel seen in a way you did not control: criticized, embarrassed, caught, vulnerable, or emotionally revealed. You spend enormous energy managing how you appear — and you may treat being seen as being attacked.',
    psychProfile:
      'Core Trigger: Uncontrolled visibility, being seen in ways that were not chosen or prepared for\nCore Fear: Being revealed as smaller, weaker, or more flawed than the image being maintained\nBehavior Under Threat: Deflection, charm, denial, attack, or full withdrawal to reset the image\nRelational Pattern: Consistently managing self-presentation, rarely fully present',
    hiddenStrength:
      'Awareness. You understand how perception works. You are rarely naive about how you come across. When you apply that awareness with generosity rather than defense, you understand other people\'s self-presentation in ways that create real empathy.',
    toxicTrait:
      'You cannot be reached. The person receiving your attention is always interacting with a managed version of you. The intimacy on offer is real in atmosphere and limited in substance. People who want to know you eventually understand that the curated version is all there is access to.',
    relationshipPattern:
      'You are warm and engaging within the version you present. When something gets past that version — a criticism, an embarrassment, an honest observation — the response can be disproportionate. People learn to approach carefully.',
    howPeopleExperienceYou:
      'Polished. Engaging. Slightly inaccessible. People feel the warmth but also a surface they can\'t get through. The ones who try to get closer sometimes find that the attempt itself triggers a response.',
    whatTriggersYou:
      'Being criticized in front of others. Embarrassment. Someone guessing correctly about something you haven\'t disclosed. Being caught off-guard emotionally. Humor at your expense.',
    darkSideUnderStress:
      'You attack or disappear. The exposure activates either a sharp defensive response or a complete withdrawal until the image can be reset. Neither feels good from outside.',
    bestMatch:
      'The Watcher (they observe carefully before moving and won\'t accidentally breach your defenses) or The Fortress (they understand managing visibility and won\'t demand exposure as a condition of connection).',
    worstMatch:
      'The Accuser (they will name what they see — and the naming is exactly what activates you) or The Pressure Point (they find the thing you\'re protecting and use it).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Practice being visible without performing. Ask: What would happen if someone saw this part of me and it was fine? Start with small things. The tolerance builds. The energy you\'re spending on image management can be redirected somewhere it actually helps you.',
    shareableText: 'I am The Exposure Trigger. I spend enormous energy managing how I appear — and being seen feels like being attacked. #DarkType',
  },
  injustice: {
    displayName: 'The Injustice Trigger',
    summary:
      'You react most strongly when something feels unfair, hypocritical, dishonest, or morally wrong. You cannot release something until it has been witnessed and named. Your sense of justice may become so intense that it leaves no room for complexity.',
    psychProfile:
      'Core Trigger: Perceived unfairness, hypocrisy, dishonesty, or moral violations left unaddressed\nCore Fear: A world in which wrong things are allowed to stand without consequence or acknowledgment\nBehavior Under Threat: Confrontation, detailed case-building, refusal to let the issue close\nRelational Pattern: High standards for fairness, difficulty releasing grievances without resolution',
    hiddenStrength:
      'Integrity. You hold the line. You name what others choose not to see. In situations where everyone else is going along with something wrong, you are the person who won\'t. That has real value.',
    toxicTrait:
      'You cannot release things that other people have moved on from. The case stays open. You build detailed accounts of what happened. The person who wronged you is tried and retried. The people around you eventually find the fixation exhausting.',
    relationshipPattern:
      'You are exceptionally honest and hold people to high standards. Inconsistency between what someone says and what they do is deeply activating. You remember what people said. You remember what happened. The record is complete.',
    howPeopleExperienceYou:
      'Principled. Direct. Reliable in terms of what they can expect from you. Difficult to fight with, because you never forget the details. People sometimes feel they are being held accountable beyond what the situation called for.',
    whatTriggersYou:
      'Being lied to. Watching someone act as though something didn\'t happen. Hypocrisy — a different standard applied to them than to you. An apology without accountability. Being told to let go of something legitimate.',
    darkSideUnderStress:
      'You become obsessive and unyielding. The issue becomes the only issue. Everything else in the relationship is on hold until it is resolved on your terms. People who agree with your position find the intensity exhausting. People who don\'t feel prosecuted.',
    bestMatch:
      'The Anchor (honest enough to meet your standards and stable enough to stay through the intensity of your reactions) or a fellow Injustice Trigger who has learned when to fight and when to release.',
    worstMatch:
      'The Escapist (they will redirect away from the unresolved thing you cannot leave alone) or The Withholder (their silence reads as stonewalling — which is the one thing that makes your fixation worse).',
    typeSystem:
      'The Rejection Trigger — activated by perceived unwantedness, deprioritization, or emotional dismissal\nThe Control Trigger — activated by feeling managed, pressured, or denied autonomy\nThe Disrespect Trigger — activated by being belittled, underestimated, or spoken to dismissively\nThe Abandonment Trigger — activated by sensing someone leaving, withdrawing, or becoming unavailable\nThe Exposure Trigger — activated by being seen in ways not chosen or controlled\nThe Injustice Trigger — activated by unfairness, hypocrisy, or moral violations left unaddressed',
    howToImprove:
      'Learn when to fight, when to clarify, and when to release. Ask: Am I holding this open because resolution is still possible, or because I cannot tolerate leaving it unresolved? Those are different situations. They require different responses.',
    shareableText: 'I am The Injustice Trigger. I cannot release something until it has been witnessed and named — and my sense of justice can leave no room for complexity. #DarkType',
  },
}
