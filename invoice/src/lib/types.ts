export type InvoiceItem = {
  id: string
  description: string
  qty: number
  unitPrice: number
}

export type Invoice = {
  invoiceNo: string
  issueDate: string // YYYY-MM-DD
  dueDate: string
  currency: string

  billTo: {
    name: string
    company: string
    address: string
    email: string
  }

  projectSummary: string
  items: InvoiceItem[]

  discount: number
  vatRate: number // e.g. 0.075
}

export type InvoiceTotals = {
  subtotal: number
  discount: number
  vat: number
  total: number
}
