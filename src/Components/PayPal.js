import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const PayPal = () => {
  
    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);
    };

    const onCancel = (data) => {
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "USD";
    let total = 30;

    const client = {
      sandbox:
        "AZEn-5QtFho49PUILH6xFWPK2bCEPtpWl7CaXHXiKfp9Fc4nuUlvjA1I53AuGxOKvj2h5Do-3OgxwR_E",
    };

    return (
      <div
        className="paypal-btn"
        style={{ margin: "1.5rem", textAlign: "center" }}
      >
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{ shape: "rect", size: "medium", margin: "1.5rem" }}
        />
      </div>
    );
}

export default PayPal;
