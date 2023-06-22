export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'brief',
        title: 'Brief',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
      },
    ],
  }
  