import { GenericTestReportPage } from '@/components/GenericTestReportPage'
import { emotionalTriggerReportProducts } from '@/lib/emotional-trigger-shop-data'
import { emotionalTriggerResultTypes } from '@/lib/emotional-trigger-data'

const validTypes = ['rejection', 'control', 'disrespect', 'abandonment', 'exposure', 'injustice']

export default function EmotionalTriggerReportPage() {
  return (
    <GenericTestReportPage
      testSlug="emotional-trigger-test"
      reportProducts={emotionalTriggerReportProducts}
      resultTypesData={emotionalTriggerResultTypes}
      validTypes={validTypes}
    />
  )
}
