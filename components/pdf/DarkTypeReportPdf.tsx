import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { FullReport } from '@/lib/report-data'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: 40,
    fontSize: 11,
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ef4444',
    paddingBottom: 20,
  },
  brand: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  testLabel: {
    fontSize: 10,
    color: '#9ca3af',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#d1d5db',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 8,
    marginTop: 12,
  },
  sectionTitleLight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    marginTop: 12,
  },
  sectionContent: {
    fontSize: 10,
    color: '#d1d5db',
    lineHeight: 1.6,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#4b5563',
    marginVertical: 16,
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#4b5563',
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'center',
  },
  watermark: {
    fontSize: 10,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 20,
  },
})

interface DarkTypeReportPdfProps {
  report: FullReport
  displayName: string
  testName?: string
}

export function DarkTypeReportPdf({ report, displayName, testName }: DarkTypeReportPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brand}>DARKTYPE</Text>
          {testName && <Text style={styles.testLabel}>{testName}</Text>}
          <Text style={styles.title}>{displayName}</Text>
          <Text style={styles.subtitle}>Your Psychological Profile</Text>
        </View>

        {/* Watermark */}
        <Text style={styles.watermark}>Keep this private. It was written to be read slowly.</Text>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>Your Summary</Text>
          <Text style={styles.sectionContent}>{report.summary}</Text>
        </View>

        <View style={styles.divider} />

        {/* Psychological Profile */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Psychological Profile</Text>
          {report.psychProfile.split('\n').map((line, idx) => (
            <Text key={idx} style={styles.sectionContent}>
              {line}
            </Text>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Hidden Strength */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>Your Hidden Strength</Text>
          <Text style={styles.sectionContent}>{report.hiddenStrength}</Text>
        </View>

        <View style={styles.divider} />

        {/* Toxic Trait */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Toxic Trait</Text>
          <Text style={styles.sectionContent}>{report.toxicTrait}</Text>
        </View>

        <View style={styles.divider} />

        {/* Relationship Pattern */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>Your Relationship Pattern</Text>
          <Text style={styles.sectionContent}>{report.relationshipPattern}</Text>
        </View>

        <View style={styles.divider} />

        {/* How People Experience You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>How People Experience You</Text>
          <Text style={styles.sectionContent}>{report.howPeopleExperienceYou}</Text>
        </View>

        <View style={styles.divider} />

        {/* What Triggers You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>What Triggers You</Text>
          <Text style={styles.sectionContent}>{report.whatTriggersYou}</Text>
        </View>

        <View style={styles.divider} />

        {/* Dark Side Under Stress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Dark Side Under Stress</Text>
          <Text style={styles.sectionContent}>{report.darkSideUnderStress}</Text>
        </View>

        <View style={styles.divider} />

        {/* Best Match */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>Best Match</Text>
          <Text style={styles.sectionContent}>{report.bestMatch}</Text>
        </View>

        <View style={styles.divider} />

        {/* Worst Match */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Worst Match</Text>
          <Text style={styles.sectionContent}>{report.worstMatch}</Text>
        </View>

        <View style={styles.divider} />

        {/* Path to Growth */}
        <View style={styles.section}>
          <Text style={styles.sectionTitleLight}>Path to Growth</Text>
          <Text style={styles.sectionContent}>{report.howToImprove}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>DarkType - Your unfiltered psychological profile</Text>
          <Text>darktype.ai</Text>
        </View>
      </Page>
    </Document>
  )
}
