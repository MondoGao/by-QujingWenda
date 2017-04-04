import { schema } from 'normalizr'

export const school = new schema.Entity('schools')
export const user = new schema.Entity('users', {
  school
})
export const users = [ user ]
export const question = new schema.Entity('questions', {
  answerer: user,
  asker: user
})
export const questions = [ question ]
