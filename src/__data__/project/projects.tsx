import Project from './Project'
import companies from '../company/experiences'

const requireProjects = require.context('.', true, /\.json$/)
let projects = requireProjects.keys().map(requireProjects) as Project[]

projects = projects.map(project => ({
  ...project,
  company: companies.find(company => company.slug === project.companySlug)
}))

export default projects
