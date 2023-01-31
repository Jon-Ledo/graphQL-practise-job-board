import { Job, Company } from './db.js'

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
  },

  Job: {
    company: (job) => {
      // console.log('resolving company for job', job)
      return Company.findById(job.companyId)
    },
  },
}
