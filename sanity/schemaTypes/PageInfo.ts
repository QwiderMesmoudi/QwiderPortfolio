import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfo = defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
        name: 'typewriterTexts', // <-- New field for Typewriter words
        title: 'Typewriter Texts',
        type: 'array',
        of: [defineArrayMember({ type: 'string' })],
      }),
    defineField({
      name: 'role',
      type: 'string',
    }),
    
    defineField({
        name: 'email',
        type: 'string',
      }),
    
      defineField({
        name: 'phoneNumber',
        type: 'string',
      }),
     
     
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
