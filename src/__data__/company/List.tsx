export interface Company {
  id: number
  slug: string
  title: string
  description: string
  start: string
  end: string
  jobTitle: string
  jobDescription: string
}

export type CompanyList = {
  companies: Company[]
}
