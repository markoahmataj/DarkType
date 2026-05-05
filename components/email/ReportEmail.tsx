import { Html, Body, Container, Head, Hr, Img, Link, Preview, Row, Section, Text } from 'react-email'

interface ReportEmailProps {
  displayName: string
}

export function ReportEmail({ displayName }: ReportEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>Your DarkType Report</Preview>
      </Head>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>DARKTYPE</Text>
            <Text style={subtext}>Your Psychological Profile</Text>
          </Section>

          <Section style={content}>
            <Text style={heading}>Your {displayName} Report</Text>
            <Text style={paragraph}>
              Your full DarkType report is attached as a PDF. This profile was written to reveal patterns—not judge you. Read it somewhere quiet.
            </Text>
            <Hr style={divider} />
            <Text style={paragraph}>
              <strong>What you're looking at:</strong>
            </Text>
            <Text style={paragraph}>
              • Your core psychological profile and how you control your environment
            </Text>
            <Text style={paragraph}>
              • Hidden strengths others don't see in you
            </Text>
            <Text style={paragraph}>
              • The shadow side that emerges under stress
            </Text>
            <Text style={paragraph}>
              • Relationship patterns and compatibility insights
            </Text>
            <Text style={paragraph}>
              • A path forward
            </Text>
            <Hr style={divider} />
            <Text style={paragraph}>
              Keep this somewhere private. It was designed to be read slowly.
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © 2026 DarkType. This is your personal psychological profile.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#1a1a1a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const container = {
  backgroundColor: '#262626',
  margin: '0 auto',
  padding: '20px 0',
  marginBottom: '64px',
}

const header = {
  borderBottomWidth: 1,
  borderBottomColor: '#ef4444',
  borderBottomStyle: 'solid' as const,
  padding: '40px 20px',
  backgroundColor: '#1a1a1a',
  textAlign: 'center' as const,
}

const brand = {
  color: '#ef4444',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  padding: '0',
}

const subtext = {
  color: '#9ca3af',
  fontSize: '14px',
  margin: '0',
  padding: '0',
}

const content = {
  padding: '40px 20px',
}

const heading = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
  padding: '0',
}

const paragraph = {
  color: '#d1d5db',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '10px 0',
  padding: '0',
}

const divider = {
  borderColor: '#4b5563',
  margin: '20px 0',
}

const footer = {
  borderTopWidth: 1,
  borderTopColor: '#4b5563',
  borderTopStyle: 'solid' as const,
  padding: '20px',
  backgroundColor: '#1a1a1a',
}

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0',
  padding: '0',
}
