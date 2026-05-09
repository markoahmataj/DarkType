import { GenericTestReportPage } from '@/components/GenericTestReportPage'
import { toxicPatternReportProducts } from '@/lib/toxic-pattern-shop-data'
import { toxicPatternResultTypes } from '@/lib/toxic-pattern-data'

const validTypes = ['saboteur', 'controller', 'pleaser', 'accuser', 'withholder', 'escapist']

export default function ToxicPatternReportPage() {
  return (
    <GenericTestReportPage
      testSlug="toxic-pattern-test"
      reportProducts={toxicPatternReportProducts}
      resultTypesData={toxicPatternResultTypes}
      validTypes={validTypes}
    />
  )
}
