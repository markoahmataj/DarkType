import { type FullReport } from './report-data'
import { reports } from './report-data'
import { resultTypes } from './quiz-data'
import { toxicPatternReports } from './toxic-pattern-reports'
import { toxicPatternResultTypes } from './toxic-pattern-data'
import { attachmentStyleReports } from './attachment-style-reports'
import { attachmentStyleResultTypes } from './attachment-style-data'
import { manipulationStyleReports } from './manipulation-style-reports'
import { manipulationStyleResultTypes } from './manipulation-style-data'
import { emotionalTriggerReports } from './emotional-trigger-reports'
import { emotionalTriggerResultTypes } from './emotional-trigger-data'

export interface TestRegistryEntry {
  testName: string
  validTypes: string[]
  getReport: (resultType: string) => FullReport | null
  getDisplayName: (resultType: string) => string | null
}

export const testRegistry: Record<string, TestRegistryEntry> = {
  'personality-test': {
    testName: 'Dark Personality Test',
    validTypes: ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector'],
    getReport: (t) => (reports as Record<string, FullReport>)[t] ?? null,
    getDisplayName: (t) => (resultTypes as Record<string, { displayName: string }>)[t]?.displayName ?? null,
  },
  'toxic-pattern-test': {
    testName: 'Toxic Pattern Test',
    validTypes: ['saboteur', 'controller', 'pleaser', 'accuser', 'withholder', 'escapist'],
    getReport: (t) => (toxicPatternReports as Record<string, FullReport>)[t] ?? null,
    getDisplayName: (t) => (toxicPatternResultTypes as Record<string, { displayName: string }>)[t]?.displayName ?? null,
  },
  'attachment-style-test': {
    testName: 'Attachment Style Test',
    validTypes: ['anchor', 'clinger', 'fortress', 'runner', 'pushpull', 'watcher'],
    getReport: (t) => (attachmentStyleReports as Record<string, FullReport>)[t] ?? null,
    getDisplayName: (t) => (attachmentStyleResultTypes as Record<string, { displayName: string }>)[t]?.displayName ?? null,
  },
  'manipulation-style-test': {
    testName: 'Manipulation Style Test',
    validTypes: ['charmer', 'strategist', 'guiltmaker', 'withholder', 'performer', 'pressurepoint'],
    getReport: (t) => (manipulationStyleReports as Record<string, FullReport>)[t] ?? null,
    getDisplayName: (t) => (manipulationStyleResultTypes as Record<string, { displayName: string }>)[t]?.displayName ?? null,
  },
  'emotional-trigger-test': {
    testName: 'Emotional Trigger Test',
    validTypes: ['rejection', 'control', 'disrespect', 'abandonment', 'exposure', 'injustice'],
    getReport: (t) => (emotionalTriggerReports as Record<string, FullReport>)[t] ?? null,
    getDisplayName: (t) => (emotionalTriggerResultTypes as Record<string, { displayName: string }>)[t]?.displayName ?? null,
  },
}
