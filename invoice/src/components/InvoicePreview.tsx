import type { Invoice, InvoiceTotals } from '~/lib/types';
import { COMPANY } from '~/lib/company';
import { formatDate, formatMoney, getCurrencyPrefix } from '~/lib/format';

type Props = {
  invoice: Invoice;
  totals: InvoiceTotals;
};

export function InvoicePreview({ invoice, totals }: Props) {
  return (
    <div className="mx-auto aspect-[1/1.414] w-full max-w-[800px] overflow-hidden rounded-lg border border-hair bg-white shadow-sm">
      {/* Navy header band with logo + brand + INVOICE */ }
      <div className="relative bg-navy px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ COMPANY.logoUrl }
              alt=""
              className="h-10 w-auto brightness-0 invert"
            />
            <div>
              <div className="text-xl font-bold text-white">
                { COMPANY.name.toUpperCase() }
              </div>
              <div className="text-[10px] italic text-slate-300">
                { COMPANY.tagline }
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold text-gold">INVOICE</div>
        </div>
      </div>
      <div className="h-0.75 bg-gold" />

      {/* From + meta */ }
      <div className="grid grid-cols-2 gap-8 px-8 pt-5">
        <div>
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-mute">
            From
          </div>
          <div className="text-sm font-semibold">{ COMPANY.name }</div>
          <div className="text-sm text-ink">{ COMPANY.address.line1 }</div>
          <div className="text-sm text-ink">{ COMPANY.address.line2 }</div>
          <div className="text-xs text-mute">
            { COMPANY.rcNumber } · { COMPANY.contact.website }
          </div>
          <div className="text-xs text-mute">
            { COMPANY.contact.phone } · { COMPANY.contact.email }
          </div>
        </div>
        <div className="space-y-1 text-right">
          <MetaRow label="Invoice No." value={ invoice.invoiceNo } bold />
          <MetaRow label="Issue date" value={ formatDate(invoice.issueDate) } />
          <MetaRow label="Due date" value={ formatDate(invoice.dueDate) } />
          <MetaRow
            label="Currency"
            value={ `${invoice.currency} (${getCurrencyPrefix(invoice.currency).trim()})` }
          />
        </div>
      </div>

      {/* Bill to + project */ }
      <div className="mt-5 grid grid-cols-2 gap-4 px-8">
        <Card title="Bill to">
          <div className="font-semibold">{ invoice.billTo.name || '—' }</div>
          <div>{ invoice.billTo.company }</div>
          <div className="text-mute">{ invoice.billTo.address }</div>
          <div className="text-mute">{ invoice.billTo.email }</div>
        </Card>
        <Card title="Project / service">
          <div className="text-ink">{ invoice.projectSummary || '—' }</div>
        </Card>
      </div>

      {/* Items table */ }
      <div className="mt-5 px-8">
        <div className="grid grid-cols-[36px_1fr_60px_110px_130px] border-t-2 border-b border-navy bg-band text-[10px] font-semibold uppercase tracking-wider text-navy">
          <div className="px-2 py-2 text-center">S/N</div>
          <div className="px-2 py-2">Description</div>
          <div className="px-2 py-2 text-center">Qty</div>
          <div className="px-2 py-2 text-right">Unit Price</div>
          <div className="px-2 py-2 text-right">Line Total</div>
        </div>
        { invoice.items.map((item, idx) => {
          const lineTotal = (item.qty || 0) * (item.unitPrice || 0);
          return (
            <div
              key={ item.id }
              className={ `grid grid-cols-[36px_1fr_60px_110px_130px] border-b border-hair text-xs ${idx % 2 === 1 ? 'bg-soft' : ''
                }` }
            >
              <div className="px-2 py-2 text-center text-mute">{ idx + 1 }</div>
              <div className="px-2 py-2">{ item.description || '—' }</div>
              <div className="px-2 py-2 text-center">{ item.qty || 0 }</div>
              <div className="px-2 py-2 text-right">
                { formatMoney(item.unitPrice || 0, invoice.currency) }
              </div>
              <div className="px-2 py-2 text-right font-medium">
                { formatMoney(lineTotal, invoice.currency) }
              </div>
            </div>
          );
        }) }
      </div>

      {/* Bank + totals */ }
      <div className="mt-5 grid grid-cols-2 gap-6 px-8">
        <div>
          <div className="bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Payment details
          </div>
          <div className="space-y-1 bg-soft px-3 py-2 text-xs">
            <BankRow label="Bank" value={ COMPANY.bank.name } />
            <BankRow label="Account Name" value={ COMPANY.bank.accountName } />
            <BankRow label="Account Number" value={ COMPANY.bank.accountNumber } />
          </div>
        </div>
        <div className="space-y-1.5 text-xs">
          <TotalRow
            label="Subtotal"
            value={ formatMoney(totals.subtotal, invoice.currency) }
          />
          { totals.discount > 0 && (
            <TotalRow
              label="Discount"
              value={ `− ${formatMoney(totals.discount, invoice.currency)}` }
            />
          ) }
          <TotalRow
            label={ `VAT (${(invoice.vatRate * 100).toFixed(1)}%)` }
            value={ formatMoney(totals.vat, invoice.currency) }
          />
          <div className="mt-2 flex items-center justify-between bg-navy px-3 py-2 text-white">
            <span className="text-sm font-semibold">
              TOTAL DUE ({ invoice.currency })
            </span>
            <span className="text-base font-bold">
              { formatMoney(totals.total, invoice.currency) }
            </span>
          </div>
        </div>
      </div>

      {/* Notes */ }
      <div className="mt-6 px-8 pb-8">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-mute">
          Notes & terms
        </div>
        <p className="max-w-115 text-xs italic text-mute">
          Payment is due within 14 days of the issue date. Please include the
          invoice number as your payment reference. Late payments may attract a
          1.5% monthly fee. Thank you for your business.
        </p>
      </div>
    </div>
  );
}

function MetaRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-end gap-3">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-mute">
        { label }
      </span>
      <span className={ bold ? 'text-sm font-bold' : 'text-sm' }>{ value }</span>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
        { title }
      </div>
      <div className="space-y-0.5 bg-soft px-3 py-2 text-xs">{ children }</div>
    </div>
  );
}

function BankRow({ label, value }: { label: string; value: string; }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="w-[110px] text-mute">{ label }</span>
      <span className="font-medium">{ value }</span>
    </div>
  );
}

function TotalRow({ label, value }: { label: string; value: string; }) {
  return (
    <div className="flex items-center justify-between border-b border-hair pb-1">
      <span className="text-mute">{ label }</span>
      <span className="font-medium">{ value }</span>
    </div>
  );
}
