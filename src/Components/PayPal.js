import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

class PayPal extends React.Component {

  render(){

    const onSuccess = (payment) => {
          console.log("The payment was succeeded!", payment);
        }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
     }

    const onError = (err) => {
        console.log("Error!", err);
    }

    let env = 'sandbox'
    let currency = 'USD'
    let total = 1
   
    const client = {
        sandbox: 'AZEn-5QtFho49PUILH6xFWPK2bCEPtpWl7CaXHXiKfp9Fc4nuUlvjA1I53AuGxOKvj2h5Do-3OgxwR_E',
    }

    return(
      <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    )
  }
}

export default PayPal
