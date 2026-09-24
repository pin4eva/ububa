import type { Invoice, InvoiceItem } from '~/lib/types'
import { CURRENCIES, newId } from '~/lib/format'

type Props = {
  value: Invoice
  onChange: (next: Invoice) => void
}

export function InvoiceForm({ value, onChange }: Props) {
  const update = <TKey extends keyof Invoice>(
    key: TKey,
    val: Invoice[TKey],
  ) =>
    onChange({ ...value, [key]: val })

  const updateBillTo = <TKey extends keyof Invoice['billTo']>(
    key: TKey,
    val: Invoice['billTo'][TKey],
  ) => onChange({ ...value, billTo: { ...value.billTo, [key]: val } })

  const updateItem = (id: string, patch: Partial<InvoiceItem>) =>
    onChange({
      ...value,
      items: value.items.map((it) => (it.id === id ? { ...it, ...patch } : it)),
    })

  const addItem = () =>
    onChange({
      ...value,
      items: [
        ...value.items,
        { id: newId(), description: '', qty: 1, unitPrice: 0 },
      ],
    })

  const removeItem = (id: string) =>
    onChange({
      ...value,
      items: value.items.filter((it) => it.id !== id),
    })

  return (
    <div className="space-y-5 rounded-lg border border-hair bg-white p-5 shadow-sm">
      <FormSection title="Invoice details">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Invoice No.">
            <input
              type="text"
              value={value.invoiceNo}
              onChange={(e) => update('invoiceNo', e.target.value)}
              title="Invoice number"
              className={inputCls}
            />
          </Field>
          <Field label="Currency">
            <select
              value={value.currency}
              onChange={(e) => update('currency', e.target.value)}
              title="Currency code"
              className={inputCls}
            >
              {CURRENCIES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Issue date">
            <input
              type="date"
              value={value.issueDate}
              onChange={(e) => update('issueDate', e.target.value)}
              title="Issue date"
              className={inputCls}
            />
          </Field>
          <Field label="Due date">
            <input
              type="date"
              value={value.dueDate}
              onChange={(e) => update('dueDate', e.target.value)}
              title="Due date"
              className={inputCls}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection title="Bill to">
        <div className="space-y-3">
          <Field label="Client name">
            <input
              type="text"
              value={value.billTo.name}
              onChange={(e) => updateBillTo('name', e.target.value)}
              placeholder="e.g. Naushin Nawal"
              className={inputCls}
            />
          </Field>
          <Field label="Company">
            <input
              type="text"
              value={value.billTo.company}
              onChange={(e) => updateBillTo('company', e.target.value)}
              placeholder="e.g. Acacia Custom Software Limited"
              className={inputCls}
            />
          </Field>
          <Field label="Address">
            <input
              type="text"
              value={value.billTo.address}
              onChange={(e) => updateBillTo('address', e.target.value)}
              placeholder="e.g. Ontario, Canada"
              className={inputCls}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={value.billTo.email}
              onChange={(e) => updateBillTo('email', e.target.value)}
              placeholder="client@example.com"
              className={inputCls}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection title="Project / service summary">
        <textarea
          rows={2}
          value={value.projectSummary}
          onChange={(e) => update('projectSummary', e.target.value)}
          placeholder="Brief description of the work this invoice covers."
          className={`${inputCls} resize-none`}
        />
      </FormSection>

      <FormSection
        title="Line items"
        action={
          <button
            type="button"
            onClick={addItem}
            className="text-xs font-semibold text-navy hover:text-navy-light"
          >
            + Add item
          </button>
        }
      >
        <div className="space-y-2">
          {value.items.map((item, idx) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_60px_100px_24px] items-start gap-2"
            >
              <input
                type="text"
                value={item.description}
                onChange={(e) =>
                  updateItem(item.id, { description: e.target.value })
                }
                placeholder={idx === 0 ? 'Description of service' : ''}
                className={inputCls}
              />
              <input
                type="number"
                min={0}
                step={1}
                value={item.qty || ''}
                onChange={(e) =>
                  updateItem(item.id, { qty: parseFloat(e.target.value) || 0 })
                }
                placeholder="Qty"
                className={`${inputCls} text-center`}
              />
              <input
                type="number"
                min={0}
                step={0.01}
                value={item.unitPrice || ''}
                onChange={(e) =>
                  updateItem(item.id, {
                    unitPrice: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="Unit"
                className={`${inputCls} text-right`}
              />
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                disabled={value.items.length === 1}
                className="mt-2 text-mute hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </FormSection>

      <FormSection title="Adjustments">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Discount">
            <input
              type="number"
              min={0}
              step={0.01}
              value={value.discount || ''}
              onChange={(e) =>
                update('discount', parseFloat(e.target.value) || 0)
              }
              title="Discount amount"
              className={`${inputCls} text-right`}
            />
          </Field>
          <Field label="VAT rate (%)">
            <input
              type="number"
              min={0}
              step={0.1}
              value={value.vatRate ? value.vatRate * 100 : ''}
              onChange={(e) =>
                update('vatRate', (parseFloat(e.target.value) || 0) / 100)
              }
              title="VAT rate percentage"
              className={`${inputCls} text-right`}
            />
          </Field>
        </div>
      </FormSection>
    </div>
  )
}

// ── small primitives ───────────────────────────────────────────────────────

const inputCls =
  'w-full rounded-md border border-hair bg-white px-3 py-2 text-sm text-ink ' +
  'placeholder:text-mute focus:border-navy focus:outline-none focus:ring-2 ' +
  'focus:ring-navy/10'

function FormSection({
  title,
  action,
  children,
}: {
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-mute">
          {title}
        </h3>
        {action}
      </div>
      {children}
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-mute">{label}</span>
      {children}
    </label>
  )
}
