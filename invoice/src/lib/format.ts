import type { Invoice, InvoiceTotals } from './types';

export function formatMoney(value: number, currency = 'NGN'): string {
  const currencyPrefix = getCurrencyPrefix(currency);
  const formatted = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);
  return currencyPrefix ? `${currencyPrefix}${formatted}` : formatted;
}

/** Supported currencies, in display order. NGN is the default. */
export const CURRENCIES = ['NGN', 'CAD', 'USD', 'EUR'] as const

export function getCurrencyPrefix(currency: string): string {
  switch (currency.trim().toUpperCase()) {
    case 'NGN':
      return '₦';
    case 'USD':
    case 'CAD':
    case 'AUD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    default:
      return currency ? `${currency} ` : '';
  }
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function calculateTotals(invoice: Invoice): InvoiceTotals {
  const subtotal = invoice.items.reduce(
    (sum, item) => sum + (item.qty || 0) * (item.unitPrice || 0),
    0,
  );
  const discount = invoice.discount || 0;
  const taxable = Math.max(0, subtotal - discount);
  const vat = taxable * (invoice.vatRate || 0);
  const total = taxable + vat;
  return { subtotal, discount, vat, total };
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function addDaysIso(iso: string, days: number): string {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function newId(): string {
  return Math.random().toString(36).slice(2, 10);
}
