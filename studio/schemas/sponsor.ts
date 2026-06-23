import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponzor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Názov',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'url',
      title: 'Webstránka',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Poradie',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Poradie',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})
