import type { CollectionConfig } from 'payload'

export const usersSlug = 'users'

export const UsersCollection: CollectionConfig = {
  slug: usersSlug,
  auth: {
    verify: true,
  },
  fields: [],
}
