import { Job, Company } from './db.js'

export const resolvers = {
  Query: {
    job: (_root, { id }) => {
      return Job.findById(id)
    },
    company: (_root, { id }) => {
      return Company.findById(id)
    },
    jobs: () => Job.findAll(),
  },

  Job: {
    company: (job) => {
      return Company.findById(job.companyId)
    },
  },

  Company: {
    jobs: (company) => {
      return Job.findAll((job) => {
        return job.companyId === company.id
      })
    },
  },
}
