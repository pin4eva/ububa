export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  socials: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export const team: TeamMember[] = [
  {
    id: 'chukwudi',
    name: 'Chukwudi',
    role: 'Lead Mobile Engineer',
    bio: 'Senior React Native and Flutter engineer with deep experience building offline-first mobile apps for enterprise and consumer markets.',
    image: '/images/chukwudi.jpg',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 'golden',
    name: 'Golden',
    role: 'Brand & Identity Lead',
    bio: 'Creative director and brand strategist who has designed identities for businesses from Port Harcourt to Toronto. Specialises in making companies look credible.',
    image: '/images/golden.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'charles',
    name: 'Charles',
    role: 'Senior Product Designer',
    bio: "UI/UX designer with a focus on enterprise software usability. Charles has designed systems used by tens of thousands of users across Nigeria's public sector.",
    image: '/images/charles.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
]
