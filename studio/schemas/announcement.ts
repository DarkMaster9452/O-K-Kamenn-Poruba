import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Oznámenie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulok',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'message',
      title: 'Správa',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Obrázok',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'important',
      title: 'Dôležité',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isPublic',
      title: 'Verejné',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'target',
      title: 'Cieľová skupina',
      type: 'string',
      options: {
        list: [
          {title: 'Všetci', value: 'all'},
          {title: 'Hráči', value: 'players'},
          {title: 'Rodičia', value: 'parents'},
          {title: 'Tréneri', value: 'coaches'},
          {title: 'Admini', value: 'admins'},
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Dátum',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'target', media: 'image'},
  },
})
