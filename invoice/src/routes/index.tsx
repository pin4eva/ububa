import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { pdf, PDFViewer } from '@react-pdf/renderer'
import { InvoiceForm } from '~/components/InvoiceForm'
import { InvoicePreview } from '~/components/InvoicePreview'
import { InvoiceDocument } from '~/components/InvoiceDocument'
import { todayIso, addDaysIso, newId, calculateTotals } from '~/lib/format'
import type { Invoice } from '~/lib/types'

export const Route = createFileRoute('/')({
  component: HomePage,
  ssr: false, // @react-pdf needs browser APIs; skip SSR for this page
})

function defaultInvoice(): Invoice {
  const issue = todayIso()
  return {
    invoiceNo: 'INV-0001',
    issueDate: issue,
    dueDate: addDaysIso(issue, 14),
    currency: 'NGN',
    billTo: {
      name: '',
      company: '',
      address: '',
      email: '',
    },
    projectSummary: '',
    items: [{ id: newId(), description: '', qty: 1, unitPrice: 0 }],
    discount: 0,
    vatRate: 0.075,
  }
}

function HomePage() {
  const [invoice, setInvoice] = useState<Invoice>(defaultInvoice)
  const [mode, setMode] = useState<'preview' | 'pdf'>('preview')
  const [isDownloading, setIsDownloading] = useState(false)

  const totals = useMemo(() => calculateTotals(invoice), [invoice])

  const handleDownloadPdf = async () => {
    setIsDownloading(true)

    try {
      const blob = await pdf(
        <InvoiceDocument invoice={invoice} totals={totals} />,
      ).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = `${invoice.invoiceNo || 'invoice'}.pdf`
      link.click()

      URL.revokeObjectURL(url)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="mx-auto max-w-350 p-4 md:p-8">
      <header className="no-print mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Invoice Generator</h1>
          <p className="text-sm text-mute">Fill in the details, preview, and export as PDF.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-md border border-hair bg-white p-0.5">
            <button
              type="button"
              onClick={() => setMode('preview')}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                mode === 'preview' ? 'bg-navy text-white' : 'text-mute hover:text-ink'
              }`}
            >
              Preview
            </button>
            <button
              type="button"
              onClick={() => setMode('pdf')}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                mode === 'pdf' ? 'bg-navy text-white' : 'text-mute hover:text-ink'
              }`}
            >
              PDF Render
            </button>
          </div>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
          >
            {isDownloading ? 'Preparing…' : 'Download PDF'}
          </button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <section className="no-print">
          <InvoiceForm value={invoice} onChange={setInvoice} />
        </section>

        <section>
          {mode === 'preview' ? (
            <InvoicePreview invoice={invoice} totals={totals} />
          ) : (
            <div className="h-275 overflow-hidden rounded-lg border border-hair bg-white shadow-sm">
              <PDFViewer width="100%" height="100%" showToolbar={false}>
                <InvoiceDocument invoice={invoice} totals={totals} />
              </PDFViewer>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
