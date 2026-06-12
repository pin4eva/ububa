export interface Testimonial {
  id: string
  name: string
  role: string
  organisation: string
  country: string
  quote: string
  avatar?: string
  projectRef?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Adaeze Okonkwo',
    role: 'Director of Academic Affairs',
    organisation: 'University of Port Harcourt',
    country: 'Nigeria',
    quote:
      'Ububa transformed how we manage student records. What used to take weeks of paperwork now happens in minutes. The system is reliable, the team is responsive, and they genuinely understood our institutional constraints.',
    projectRef: 'uniport-portal',
  },
  {
    id: '2',
    name: 'Michael Thornton',
    role: 'Program Manager',
    organisation: 'Touchstone Institute',
    country: 'Canada',
    quote:
      "Working with a team in Nigeria gave us pause initially, but Ububa removed every doubt. Their communication was excellent, the technical quality was outstanding, and they delivered on time. We'd work with them again without hesitation.",
    projectRef: 'touchstone-platform',
  },
  {
    id: '3',
    name: 'Emeka Eze',
    role: 'CEO',
    organisation: 'Climax Inspection Service',
    country: 'Nigeria',
    quote:
      "Before Ububa, our equipment tracking was spreadsheets and guesswork. Now I know where every asset is, when it was last serviced, and whether we're compliant. The ROI was obvious within the first quarter.",
    projectRef: 'climax-ims',
  },
]
