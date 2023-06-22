export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(8),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      validation: (Rule: any) => Rule.valid(['male', 'female']),
    },
    {
      name: 'recentVisited',
      title: 'Recent Visited',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'item'}],
        },
      ],
    },
    {
      name: 'wishlist',
      title: 'Wish List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'item'}],
        },
      ],
    },
    {
      name: 'cart',
      title: 'Cart',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'item',
              title: 'Item',
              type: 'reference',
              to: [{type: 'item'}],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              initialValue: 1,
            }
          ]
        }
      ],
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'order'}],
        },
      ],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'paymentMethods',
      title: 'Payment Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
