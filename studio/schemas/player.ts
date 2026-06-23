import {defineField, defineType} from 'sanity'

const CATEGORIES = [
  {title: 'Prípravka U9', value: 'pripravka_u9'},
  {title: 'Prípravka U11', value: 'pripravka_u11'},
  {title: 'Žiaci', value: 'ziaci'},
  {title: 'Dorastenci', value: 'dorastenci'},
  {title: 'Dospelí (mladší)', value: 'adults_young'},
  {title: 'Dospelí (pro)', value: 'adults_pro'},
]

export default defineType({
  name: 'player',
  title: 'Hráč',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Meno',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Fotografia',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'shirtNumber',
      title: 'Číslo dresu',
      type: 'number',
    }),
    defineField({
      name: 'position',
      title: 'Post',
      type: 'string',
      options: {
        list: [
          {title: 'Brankár', value: 'goalkeeper'},
          {title: 'Obranca', value: 'defender'},
          {title: 'Záložník', value: 'midfielder'},
          {title: 'Útočník', value: 'forward'},
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategória',
      type: 'string',
      options: {list: CATEGORIES},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Aktívny',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'category', media: 'photo'},
    prepare({title, subtitle, media}) {
      const cat = CATEGORIES.find((c) => c.value === subtitle)
      return {title, subtitle: cat?.title ?? subtitle, media}
    },
  },
})
