import { Company } from '../company/List'

interface Icon {
  title: string
  icon: string
}

interface Project {
  slug: string
  companySlug: string
  title: string
  role: string
  type: string
  description: string
  country: string
  features: string
  techStack: string
  icons: Icon[]
  company?: Company
}

export default Project
