---
sidebar_position: 2
title: Payment Processing
---

# Payment Processing

Therativities uses **Stripe Connect** to process online payments. This means payments from parents go directly to your Stripe account — Therativities never holds your funds.

## Connecting your Stripe account

During setup (or anytime from **Settings > Billing**):

1. Click **Connect Stripe Account**
2. Stripe's onboarding form loads directly in the app
3. Fill in:
   - Business type (Individual or Company)
   - Personal information
   - Business information
   - Bank account details for payouts
4. Submit and wait for Stripe to verify your account

### Account status

| Status | Meaning |
|--------|---------|
| Not Connected | You haven't started Stripe setup |
| Setup Incomplete | Account created but not fully verified — click **Complete Setup** to finish |
| Active | Verified and ready to accept payments |

:::tip
If the embedded Stripe form isn't loading, click **Switch to Hosted Flow** to complete setup on Stripe's website instead.
:::

## How a payment flows

1. **Session completed** — You mark a session as complete
2. **Billing triggered** — Either immediately, on a schedule, or manually
3. **Payment Intent created** — Therativities calculates the total:
   - Base amount (your session rate)
   - Stripe processing fees (if passed to client)
   - Platform fee (deducted from your payout)
4. **Parent's card charged** — Their default payment method is charged
5. **Funds deposited** — Stripe sends funds to your connected bank account on their standard payout schedule

## Billing frequencies

You can choose when sessions are billed:

| Frequency | How it works |
|-----------|-------------|
| Immediate | Each session is billed right after completion |
| Weekly | Sessions are batched and billed once per week |
| Bi-monthly | Sessions are batched and billed every two weeks |
| Monthly | Sessions are batched and billed once per month |

Batched sessions are queued automatically and processed at the scheduled time.

## Payouts

Stripe handles payouts to your bank account. The default payout schedule depends on your Stripe account settings (typically 2 business days for US accounts). You can view and adjust your payout schedule in your Stripe Dashboard at [dashboard.stripe.com](https://dashboard.stripe.com).

## Failed payments

If a payment fails (declined card, insufficient funds, etc.):

1. The session status changes to **Failed**
2. You'll see it in the **Needs Action** filter on the billing tab
3. You can:
   - **Retry Billing** — Try charging again (parent may have updated their card)
   - **Record Payment** — Log a manual payment if they paid another way
   - **Create Invoice** — Send an invoice instead
