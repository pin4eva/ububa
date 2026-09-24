export const COMPANY = {
  name: 'Ububa Technology Ltd',
  tagline: 'Software · Design · Engineering',
  rcNumber: 'RC: 1859295',
  address: {
    line1: 'Victoria Plaza, Off Rumuodara Junction',
    line2: 'East West Road, Port Harcourt, Nigeria',
  },
  contact: {
    phone: '+234 809 9777 733',
    altPhone: '+1 (437) 366-1483',
    email: 'mail@ububa.org',
    website: 'www.ububa.org',
  },
  bank: {
    name: 'Optimus Bank Limited',
    accountName: 'Ububa Technology Ltd',
    accountNumber: '1000318490',
  },
  signatory: {
    name: 'Peter Akaliro',
    role: 'CEO, Ububa Technology',
  },
  /** Path served from /public — used in HTML preview and PDF */
  logoUrl: '/logo.png',
  /** White variant for use on the dark navy header */
  logoWhiteUrl: '/logo-white.png',
} as const
