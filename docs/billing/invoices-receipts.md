---
sidebar_position: 3
title: Invoices & Receipts
---

# Invoices & Receipts

Therativities supports invoicing and super bill generation for insurance reimbursement.

## Creating an invoice

From a client's **Billing & Charges** tab:

1. Select one or more unbilled sessions using the checkboxes
2. Click **Create Invoice** in the bulk action bar
3. Review the invoice breakdown (number of sessions, amounts)
4. Click **Generate Invoice**
5. The invoice is created and sessions are marked as "Invoiced"

You can also create an invoice for a single session from its action menu.

## Invoice statuses

| Status | Meaning |
|--------|---------|
| Invoiced | Invoice sent, awaiting payment |
| Paid | Parent has paid the invoice |

From an invoiced session, you can:
- **Mark as Paid** — Record that payment was received
- **View Invoice** — See the full invoice details

## Super bills

Super bills are detailed receipts that parents can submit to their insurance company for reimbursement. They include your provider information (NPI, TIN), diagnosis codes, session dates, and service details.

To generate super bills:

1. Go to the client's billing tab
2. Select one or more **paid** sessions
3. Click **Generate Super Bills**
4. A PDF is created with all required provider and session information

:::info
Super bills require your **NPI Number**, **TIN Number**, and **Practice Address** to be configured in **Settings > Profile > Business Information**.
:::

## Payment reference numbers

Every processed payment gets a unique reference number (e.g., "PAY-1234567890-ABC123"). You can find this in the expanded billing details for any processed session. This is useful for tracking payments and resolving disputes.
