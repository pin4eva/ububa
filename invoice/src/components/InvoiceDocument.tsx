import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import type { Invoice, InvoiceTotals } from '~/lib/types'
import { COMPANY } from '~/lib/company'
import { formatDate, formatMoney } from '~/lib/format'

// Register Inter via Google's static CDN. If the user runs offline, swap to bundled files.
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50ojIa1ZL7.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50ojIa2pL7.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50ojIa1pL7.woff2', fontWeight: 700 },
  ],
})

// Color palette mirrors the Excel template
const C = {
  navy: '#1A2B4A',
  gold: '#B8956A',
  ink: '#0F172A',
  mute: '#64748B',
  hair: '#E2E8F0',
  soft: '#F8FAFC',
  band: '#F1F5F9',
  white: '#FFFFFF',
}

const s = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    color: C.ink,
    paddingBottom: 36,
  },

  // Header band
  header: {
    backgroundColor: C.navy,
    paddingHorizontal: 32,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 32, height: 38, marginRight: 12 },
  brandName: { fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: 0.5 },
  brandTag: { fontSize: 8, color: '#CBD5E1', fontStyle: 'italic', marginTop: 2 },
  invoiceTitle: { fontSize: 26, fontWeight: 700, color: C.gold },
  goldStrip: { height: 3, backgroundColor: C.gold },

  body: { paddingHorizontal: 32, paddingTop: 18 },

  // From + meta
  topRow: { flexDirection: 'row', justifyContent: 'space-between' },
  fromBlock: { flex: 1 },
  metaBlock: { flex: 1, alignItems: 'flex-end' },
  sectionLabel: {
    fontSize: 8,
    fontWeight: 700,
    color: C.mute,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  companyName: { fontSize: 10, fontWeight: 700 },
  textSm: { fontSize: 9, marginTop: 1 },
  textMute: { fontSize: 8, color: C.mute, marginTop: 2 },

  metaRow: { flexDirection: 'row', marginBottom: 3, alignItems: 'baseline' },
  metaLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: C.mute,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginRight: 8,
  },
  metaValue: { fontSize: 9, fontWeight: 600 },

  // Cards
  cardsRow: { flexDirection: 'row', marginTop: 18, gap: 12 },
  card: { flex: 1 },
  cardHeader: {
    backgroundColor: C.navy,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  cardHeaderText: {
    fontSize: 8,
    fontWeight: 700,
    color: C.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardBody: {
    backgroundColor: C.soft,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 60,
  },
  cardLine: { fontSize: 9, marginBottom: 2 },
  cardLineBold: { fontSize: 10, fontWeight: 700, marginBottom: 2 },
  cardLineMute: { fontSize: 8, color: C.mute, marginBottom: 1 },

  // Table
  table: { marginTop: 18 },
  tableHead: {
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: C.navy,
    borderBottomWidth: 0.5,
    borderBottomColor: C.navy,
    backgroundColor: C.band,
  },
  th: {
    fontSize: 8,
    fontWeight: 700,
    color: C.navy,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  thSn: { width: 32, textAlign: 'center' },
  thDesc: { flex: 1 },
  thQty: { width: 50, textAlign: 'center' },
  thUnit: { width: 90, textAlign: 'right' },
  thLine: { width: 100, textAlign: 'right' },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: C.hair,
  },
  rowAlt: { backgroundColor: C.soft },
  td: { fontSize: 9, paddingVertical: 5, paddingHorizontal: 6 },
  tdSn: { width: 32, textAlign: 'center', color: C.mute },
  tdDesc: { flex: 1 },
  tdQty: { width: 50, textAlign: 'center' },
  tdUnit: { width: 90, textAlign: 'right' },
  tdLine: { width: 100, textAlign: 'right', fontWeight: 600 },

  // Bottom: bank + totals
  bottomRow: { flexDirection: 'row', marginTop: 16, gap: 16 },
  bankSide: { flex: 1 },
  totalsSide: { flex: 1 },
  bankRow: { flexDirection: 'row', marginBottom: 2 },
  bankLabel: { fontSize: 9, color: C.mute, width: 90 },
  bankValue: { fontSize: 9, fontWeight: 600, flex: 1 },

  totalLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: C.hair,
  },
  totalLabel: { fontSize: 9, color: C.mute },
  totalValue: { fontSize: 9, fontWeight: 600 },

  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: C.navy,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 6,
  },
  grandLabel: { fontSize: 10, fontWeight: 700, color: C.white },
  grandValue: { fontSize: 12, fontWeight: 700, color: C.white },

  // Footer
  footerRow: { marginTop: 24 },
  notesBlock: { maxWidth: 320 },
  notesText: { fontSize: 8, color: C.mute, fontStyle: 'italic', lineHeight: 1.4 },
})

type Props = {
  invoice: Invoice
  totals: InvoiceTotals
}

export function InvoiceDocument({ invoice, totals }: Props) {
  return (
    <Document
      title={`Invoice ${invoice.invoiceNo}`}
      author={COMPANY.name}
      subject={`Invoice ${invoice.invoiceNo} for ${invoice.billTo.company || invoice.billTo.name}`}
    >
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header} fixed>
          <View style={s.headerLeft}>
            <Image src={COMPANY.logoUrl} style={s.logo} />
            <View>
              <Text style={s.brandName}>{COMPANY.name.toUpperCase()}</Text>
              <Text style={s.brandTag}>{COMPANY.tagline}</Text>
            </View>
          </View>
          <Text style={s.invoiceTitle}>INVOICE</Text>
        </View>
        <View style={s.goldStrip} fixed />

        <View style={s.body}>
          {/* From + meta */}
          <View style={s.topRow}>
            <View style={s.fromBlock}>
              <Text style={s.sectionLabel}>From</Text>
              <Text style={s.companyName}>{COMPANY.name}</Text>
              <Text style={s.textSm}>{COMPANY.address.line1}</Text>
              <Text style={s.textSm}>{COMPANY.address.line2}</Text>
              <Text style={s.textMute}>
                {COMPANY.rcNumber} · {COMPANY.contact.website}
              </Text>
              <Text style={s.textMute}>
                {COMPANY.contact.phone} · {COMPANY.contact.email}
              </Text>
            </View>
            <View style={s.metaBlock}>
              <MetaPdfRow label="Invoice No." value={invoice.invoiceNo} />
              <MetaPdfRow
                label="Issue date"
                value={formatDate(invoice.issueDate)}
              />
              <MetaPdfRow
                label="Due date"
                value={formatDate(invoice.dueDate)}
              />
              <MetaPdfRow label="Currency" value={invoice.currency} />
            </View>
          </View>

          {/* Bill to + project */}
          <View style={s.cardsRow}>
            <View style={s.card}>
              <View style={s.cardHeader}>
                <Text style={s.cardHeaderText}>Bill to</Text>
              </View>
              <View style={s.cardBody}>
                <Text style={s.cardLineBold}>{invoice.billTo.name || '—'}</Text>
                <Text style={s.cardLine}>{invoice.billTo.company}</Text>
                <Text style={s.cardLineMute}>{invoice.billTo.address}</Text>
                <Text style={s.cardLineMute}>{invoice.billTo.email}</Text>
              </View>
            </View>
            <View style={s.card}>
              <View style={s.cardHeader}>
                <Text style={s.cardHeaderText}>Project / service</Text>
              </View>
              <View style={s.cardBody}>
                <Text style={s.cardLine}>{invoice.projectSummary || '—'}</Text>
              </View>
            </View>
          </View>

          {/* Items table */}
          <View style={s.table}>
            <View style={s.tableHead}>
              <Text style={[s.th, s.thSn]}>S/N</Text>
              <Text style={[s.th, s.thDesc]}>Description</Text>
              <Text style={[s.th, s.thQty]}>Qty</Text>
              <Text style={[s.th, s.thUnit]}>Unit Price</Text>
              <Text style={[s.th, s.thLine]}>Line Total</Text>
            </View>
            {invoice.items.map((item, idx) => {
              const lineTotal = (item.qty || 0) * (item.unitPrice || 0)
              return (
                <View
                  key={item.id}
                  style={[s.row, idx % 2 === 1 && s.rowAlt].filter(Boolean) as any}
                >
                  <Text style={[s.td, s.tdSn]}>{idx + 1}</Text>
                  <Text style={[s.td, s.tdDesc]}>
                    {item.description || ' '}
                  </Text>
                  <Text style={[s.td, s.tdQty]}>{item.qty || 0}</Text>
                  <Text style={[s.td, s.tdUnit]}>
                    {formatMoney(item.unitPrice || 0, invoice.currency)}
                  </Text>
                  <Text style={[s.td, s.tdLine]}>
                    {formatMoney(lineTotal, invoice.currency)}
                  </Text>
                </View>
              )
            })}
          </View>

          {/* Bottom: bank + totals */}
          <View style={s.bottomRow}>
            <View style={s.bankSide}>
              <View style={s.cardHeader}>
                <Text style={s.cardHeaderText}>Payment details</Text>
              </View>
              <View style={[s.cardBody, { minHeight: 80 }]}>
                <BankPdfRow label="Bank" value={COMPANY.bank.name} />
                <BankPdfRow
                  label="Account Name"
                  value={COMPANY.bank.accountName}
                />
                <BankPdfRow
                  label="Account Number"
                  value={COMPANY.bank.accountNumber}
                />
              </View>
            </View>
            <View style={s.totalsSide}>
              <View style={s.totalLine}>
                <Text style={s.totalLabel}>Subtotal</Text>
                <Text style={s.totalValue}>
                  {formatMoney(totals.subtotal, invoice.currency)}
                </Text>
              </View>
              {totals.discount > 0 && (
                <View style={s.totalLine}>
                  <Text style={s.totalLabel}>Discount</Text>
                  <Text style={s.totalValue}>
                    − {formatMoney(totals.discount, invoice.currency)}
                  </Text>
                </View>
              )}
              <View style={s.totalLine}>
                <Text style={s.totalLabel}>
                  VAT ({(invoice.vatRate * 100).toFixed(1)}%)
                </Text>
                <Text style={s.totalValue}>
                  {formatMoney(totals.vat, invoice.currency)}
                </Text>
              </View>
              <View style={s.grandTotal}>
                <Text style={s.grandLabel}>
                  TOTAL DUE ({invoice.currency})
                </Text>
                <Text style={s.grandValue}>
                  {formatMoney(totals.total, invoice.currency)}
                </Text>
              </View>
            </View>
          </View>

          {/* Footer: notes */}
          <View style={s.footerRow}>
            <View style={s.notesBlock}>
              <Text style={s.sectionLabel}>Notes & terms</Text>
              <Text style={s.notesText}>
                Payment is due within 14 days of the issue date. Please include
                the invoice number as your payment reference. Late payments may
                attract a 1.5% monthly fee. Thank you for your business.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

function MetaPdfRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.metaRow}>
      <Text style={s.metaLabel}>{label}</Text>
      <Text style={s.metaValue}>{value}</Text>
    </View>
  )
}

function BankPdfRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.bankRow}>
      <Text style={s.bankLabel}>{label}</Text>
      <Text style={s.bankValue}>{value}</Text>
    </View>
  )
}
