import { GenericTestReportPage } from '@/components/GenericTestReportPage'
import { attachmentStyleReportProducts } from '@/lib/attachment-style-shop-data'
import { attachmentStyleResultTypes } from '@/lib/attachment-style-data'

const validTypes = ['anchor', 'clinger', 'fortress', 'runner', 'pushpull', 'watcher']

export default function AttachmentStyleReportPage() {
  return (
    <GenericTestReportPage
      testSlug="attachment-style-test"
      reportProducts={attachmentStyleReportProducts}
      resultTypesData={attachmentStyleResultTypes}
      validTypes={validTypes}
    />
  )
}
