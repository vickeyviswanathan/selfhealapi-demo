import razorpay

client = razorpay.Client(auth=("rzp_test_demo", "secret_demo"))

def capture_order(payment_id, amount):
    return client.payment.capture(payment_id, amount)
