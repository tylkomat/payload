import type { CollectionConfig } from 'payload'

export const mediaSlug = 'media'

export const MediaCollection: CollectionConfig = {
  slug: mediaSlug,
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'noAccess',
      type: 'text',
      access: {
        read: () => false,
        create: () => false,
        update: () => false,
      },
    },
    {
      name: 'noCondition',
      type: 'text',
      admin: {
        condition: () => false,
      },
    },
    {
      name: 'sizes',
      type: 'group',
      fields: [
        {
          name: 'thumbnail',
          type: 'group',
          fields: [
            {
              name: 'mimeType',
              type: 'text',
              admin: {
                disableListColumn: true,
                disableListFilter: true,
              },
            },
          ],
          admin: {
            disableListColumn: true,
            disableListFilter: true,
          },
        },
      ],
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'mimeType',
      type: 'text',
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
  ],
  upload: {
    crop: true,
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        height: 200,
        width: 200,
      },
      {
        name: 'medium',
        height: 800,
        width: 800,
      },
      {
        name: 'large',
        height: 1200,
        width: 1200,
      },
    ],
  },
}
