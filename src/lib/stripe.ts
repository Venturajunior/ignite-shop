import Stripe from 'stripe'

const KEY = String(process.env.STRIPE_SECRET_KEY)

export const stripe = new Stripe(KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shopp',
  },
})
