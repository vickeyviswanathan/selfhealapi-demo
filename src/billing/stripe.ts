import Stripe from "stripe";

const stripe = new Stripe("sk_test_demo_placeholder");

export async function chargeCustomer(amount: number) {
  return stripe.paymentIntents.create({ amount, currency: "usd" });
}
