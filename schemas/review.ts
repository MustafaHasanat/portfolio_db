export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'user'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'item',
      title: 'Item',
      type: 'reference',
      to: [{type: 'item'}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
