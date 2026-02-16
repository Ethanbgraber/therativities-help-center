---
sidebar_position: 5
title: Billing & Payments
---

# Billing & Payments

Therativities supports multiple payment methods and billing workflows so you can collect payment the way that works for your practice.

## Payment methods supported

| Method | How it works |
|--------|-------------|
| **Stripe (Online)** | Credit/debit card charges through Stripe Connect |
| **Cash** | Record manual cash payments |
| **Check** | Record check payments |
| **Zelle** | Record Zelle transfers |
| **Venmo** | Record Venmo payments |
| **Other** | Record any other payment type |

For Stripe payments, funds go directly to your connected Stripe account. For all other methods, you record the payment manually in Therativities for your records.

## Client billing settings

Each client can have their own billing configuration. Go to the client's **Billing & Charges** tab and click **Settings**:

- **Payment Type** — How this client pays (Stripe, Cash, Check, etc.)
- **Default Session Service** — Which service rate to use
- **Discount** — Percentage or fixed-amount discount with optional reason
- **Billing Frequency** — When to process charges:
  - **Immediate** — Bill right after each session
  - **Weekly** — Batch all sessions weekly
  - **Bi-monthly** — Batch every two weeks
  - **Monthly** — Batch once a month
- **Auto-Charge** — Automatically charge the parent's card on file
- **Billing On Hold** — Pause billing with an optional reason

## Billing a session

### Single session billing

From the client's billing history or from the dashboard:

1. Find the session (status will show "Unbilled")
2. Click the **actions menu**
3. Choose one of:
   - **Bill Now** — Charge the parent's card through Stripe
   - **Record Payment** — Log a manual payment (cash, check, Zelle, etc.)
   - **Create Invoice** — Generate an invoice to send to the parent

### Batch billing

From the dashboard:
- **Bill Today** — Bill all of today's completed sessions at once
- **Bill Week** — Bill all sessions from the timeline graph

From the client's billing history:
- Select multiple sessions using the checkboxes
- Use the bulk action bar to **Bill Now**, **Record Payment**, or **Create Invoice** for all selected sessions

## Billing statuses

| Status | Meaning |
|--------|---------|
| Unbilled | Session completed, not yet billed |
| Queued | Scheduled for batch billing |
| Processing | Payment is being processed |
| Processed | Payment successful (Stripe) |
| Recorded | Manual payment logged |
| Failed | Payment attempt failed |
| Invoiced | Invoice sent, awaiting payment |

## Billing history

The billing tab for each client shows all sessions with their billing status. Filter by:

- **Needs Action** — Sessions that need billing attention (default view)
- **This Week**
- **This Month**
- **Last 3 Months**
- **All Time**

Click any session row to expand it and see:
- Session details and notes
- Full billing timeline (when queued, processed, etc.)
- Stripe charge ID and payment reference number
- Platform fee breakdown

## Super bills

For clients who submit to insurance for reimbursement, you can generate **Super Bills**:

1. Select one or more paid sessions
2. Click **Generate Super Bills**
3. A PDF is generated with your NPI, TIN, diagnosis codes, and session details

Super bills require your business information (NPI, TIN) to be configured in Settings.

## Managing parent payment methods

Parents can add and manage their credit/debit cards from the Parent Portal. Therapists can also manage payment methods from the client's **Billing & Charges** tab:

- **Add Payment Method** — Opens the Stripe payment form
- **Set as Default** — Choose which card to charge
- **Remove** — Delete a saved card

## Platform fees

Therativities charges a small per-session platform fee (separate from Stripe processing fees). This is automatically deducted when billing through Stripe. You can view the exact breakdown in the expanded session billing details.
