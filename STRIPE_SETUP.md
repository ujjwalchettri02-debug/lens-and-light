# Stripe Payment Integration Guide

This guide walks you through setting up Stripe payment links for your photography portfolio.

## Why Stripe Payment Links?

Payment Links are the easiest way to sell photos online:
- ✅ No coding required
- ✅ Hosted checkout page (Stripe handles everything)
- ✅ Automatic email receipts
- ✅ Support for multiple currencies
- ✅ Tax calculation (if needed)
- ✅ Customer address collection (for prints)

## Step-by-Step Setup

### 1. Create Your Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click **Start now** or **Sign up**
3. Enter your email and create a password
4. Complete the basic information form

### 2. Navigate to Test Mode

By default, you start in **Test Mode** - this is perfect for testing without real money.

Look for the toggle in the top-left corner of your Stripe Dashboard that says **Test Mode**.

### 3. Create Products for Your Photos

#### For Digital Downloads:

1. **Click Products** in the left sidebar
2. **Click + Add product**
3. Fill in the details:
   ```
   Name: Golden Hour Valley - Digital Download
   Description: High-resolution digital file (4000x6000px, 300 DPI)
   
   Pricing:
   - Price: $49.99
   - Billing: One time
   
   Image: Upload your photo thumbnail
   ```
4. **Click Save product**

#### For Physical Prints:

1. **Click Products** → **+ Add product**
2. Fill in the details:
   ```
   Name: Golden Hour Valley - 16x20 Print
   Description: Museum-quality print on premium paper, signed and numbered
   
   Pricing:
   - Price: $149.99
   - Billing: One time
   
   Image: Upload your photo thumbnail
   ```
3. Under **Additional options**, enable:
   - ☑️ **Charge shipping** (if you want customers to pay for shipping)
4. **Click Save product**

### 4. Create Payment Links

For each product:

1. **Click on the product** you just created
2. **Click the "Create payment link" button** (top right)
3. Configure the payment link:

   **Payment page:**
   - Quantity: Fixed (1) or adjustable
   - Add images/description (optional, already from product)

   **After payment:**
   - Redirect: Leave blank (Stripe shows success page)
   - OR Enter your website URL for custom thank you page

   **Collect customer information:**
   - ☑️ Email address (always enabled)
   - ☑️ Phone number (optional)
   - ☑️ Billing address (for invoices)
   - ☑️ Shipping address (for prints only)

   **Additional options:**
   - Allow promotion codes (optional - for discounts)
   - Quantity limits (optional - for limited editions)

4. **Click Create link**

5. **Copy the payment link** - it looks like:
   ```
   https://buy.stripe.com/test_XXXXXXXXXXXX
   ```

6. **Paste this link** into your `photos.json` file:
   ```json
   {
     "id": 1,
     "title": "Golden Hour Valley",
     "stripeLink": "https://buy.stripe.com/test_XXXXXXXXXXXX",
     ...
   }
   ```

### 5. Test Your Payment Flow

Use Stripe's test card numbers:

**Successful Payment:**
- Card number: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., 12/34)
- CVC: Any 3 digits (e.g., 123)
- ZIP: Any 5 digits (e.g., 12345)

**Declined Payment:**
- Card number: `4000 0000 0000 0002`
- (Use same expiry/CVC/ZIP as above)

**Testing Process:**
1. Click a photo in your portfolio
2. Click "Purchase Print" button
3. You should be redirected to Stripe checkout
4. Enter test card details
5. Complete checkout
6. Verify you receive a receipt email

### 6. Going Live (When Ready)

⚠️ **Only do this when you're ready to accept real payments!**

1. **Complete your Stripe account activation:**
   - Click the **Activate account** banner
   - Provide business information
   - Add bank account for payouts
   - Verify identity (if required)

2. **Switch to Live Mode:**
   - Toggle from **Test Mode** to **Live Mode** (top-left)

3. **Create products again in Live Mode:**
   - Repeat steps 3-4 above
   - Create each product in Live Mode
   - Generate new payment links

4. **Update your `photos.json`:**
   - Replace test payment links with live ones
   - Double-check all links work

5. **Test with a small purchase:**
   - Make a real $1 test purchase
   - Verify the full flow works
   - Refund the test purchase

## Managing Orders

### View Orders

1. Go to **Payments** in Stripe Dashboard
2. See all successful payments
3. Click any payment to see details:
   - Customer email
   - Amount paid
   - Shipping address (if collected)
   - Receipt

### Refunds

1. Go to **Payments**
2. Click the payment you want to refund
3. Click **Refund**
4. Enter amount (full or partial)
5. Confirm refund

### Customer Emails

Stripe automatically sends:
- ✅ Payment confirmation
- ✅ Receipt
- ✅ Refund notification (if applicable)

## Advanced: Multiple Pricing Options

Want to offer different print sizes at different prices?

**Option A: Separate Payment Links** (Recommended)
Create separate products for each size:
- "Photo Name - 8x10 Print" → $49
- "Photo Name - 16x20 Print" → $99
- "Photo Name - 24x36 Print" → $199

In your lightbox, show multiple "Buy" buttons or a dropdown.

**Option B: Adjust Quantity**
Create one product, enable "Adjustable quantity" on the payment link, and add instructions for customers (not recommended for prints).

## Security & Best Practices

✅ **DO:**
- Keep your Stripe secret keys private (never share them)
- Use test mode while developing
- Test thoroughly before going live
- Check your bank account is connected before launching
- Enable email receipts

❌ **DON'T:**
- Don't commit API keys to GitHub
- Don't skip the test mode
- Don't forget to collect shipping addresses for prints
- Don't use test mode links in production

## Stripe Fees

Stripe charges:
- **2.9% + $0.30** per successful card charge (US)
- No monthly fees
- No setup fees
- Fees vary by country

Example:
- $50 print sale = $1.75 Stripe fee
- You receive = $48.25

## Common Issues

**Problem**: Payment link doesn't work
- **Solution**: Make sure you copied the entire link, including `https://`

**Problem**: Not receiving test emails
- **Solution**: Check your spam folder; Stripe test emails may be delayed

**Problem**: "Payment link expired"
- **Solution**: Payment links don't expire, but check you're in the right mode (test vs. live)

**Problem**: Can't activate account
- **Solution**: Complete all required business information in Account Settings

## Getting Help

- **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Stripe Support**: Available 24/7 via Dashboard
- **Stripe Testing**: [stripe.com/docs/testing](https://stripe.com/docs/testing)

---

You're all set! 🎉 Start selling your photography with confidence.
