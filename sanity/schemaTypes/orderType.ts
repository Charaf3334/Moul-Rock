import { BasketIcon } from '@sanity/icons'
import { defineArrayMember, defineType, defineField } from 'sanity'

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        {
            name: 'invoice',
            type: 'object',
            fields: [
                { name: 'id', type: 'string' },
                { name: 'number', type: 'string' },
                { name: 'hosted_invoice_url', type: 'url' },
            ],
        },
        defineField({
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clerkUserId',
            title: 'Store User ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Customer Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        })
        //defineField(products) => to be continued ...
    ]
})