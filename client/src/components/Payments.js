import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import * as actions from '../actions';

function Payments({ handleToken }) {
  return (
    <StripeCheckout
      amount={500}
      token={token => handleToken(token)}
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

export default connect(null, actions)(Payments);