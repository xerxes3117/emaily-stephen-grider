import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Payments() {
  return (
    <StripeCheckout 
      amount={500}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      name="Emaily"
      description='$5 for 5 email credits'
    >
      <button className='btn'>
        Add Credits
      </button>
    </StripeCheckout>
  )
}

export default Payments