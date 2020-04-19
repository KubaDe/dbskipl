import Project from './Project'
const requireProjects = require.context('.', true, /\.json$/)
const projects = requireProjects.keys().map(requireProjects)

export default projects as Project[]
