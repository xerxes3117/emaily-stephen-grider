const requireLogin = require('../middlewares/requireLogin');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = function(app) {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'inr',
      description: 'some description',
      payment_method_data: {
        type: "card",
        card: {
          token: req.body.id,
        },
      },
      confirmation_method: "manual",
      confirm: "true",
    })
    
    req.user.credits += 5;
    const user = await req.user.save()
    res.send(user)
  })
}