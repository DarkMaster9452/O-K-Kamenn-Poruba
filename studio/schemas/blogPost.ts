import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulok',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Obrázok',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'tags',
      title: 'Tagy',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'featured',
      title: 'Odporúčaný',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Zverejnený',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'content',
      title: 'Obsah',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Dátum publikácie',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image', subtitle: 'publishedAt'},
  },
})
