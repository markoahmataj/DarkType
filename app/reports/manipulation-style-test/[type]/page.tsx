import { GenericTestReportPage } from '@/components/GenericTestReportPage'
import { manipulationStyleReportProducts } from '@/lib/manipulation-style-shop-data'
import { manipulationStyleResultTypes } from '@/lib/manipulation-style-data'

const validTypes = ['charmer', 'strategist', 'guiltmaker', 'withholder', 'performer', 'pressurepoint']

export default function ManipulationStyleReportPage() {
  return (
    <GenericTestReportPage
      testSlug="manipulation-style-test"
      reportProducts={manipulationStyleReportProducts}
      resultTypesData={manipulationStyleResultTypes}
      validTypes={validTypes}
    />
  )
}
