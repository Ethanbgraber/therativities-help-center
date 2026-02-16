---
sidebar_position: 1
title: Common Questions
---

# Frequently Asked Questions

## General

### What is Therativities?
Therativities is a practice management platform built for pediatric therapists. It handles client management, scheduling, session documentation (with AI assistance), billing, parent communication, and evaluations — all in one place.

### Who is Therativities for?
Primarily pediatric therapists in private-pay settings — occupational therapists, speech-language pathologists, physical therapists, behavioral therapists, ABA providers, and others who provide developmental or therapeutic services. Whether you work solo or with a small team, Therativities is designed for you.

### Do I need to be a solo practitioner?
No. Therativities supports both solo therapists and multi-therapist practices. You can create a team entity, invite other therapists, and manage shared clients with configurable access controls.

### Can I use Therativities on my phone?
Yes. Therativities is a web app that works on any device with a browser. The interface adapts to mobile screens with optimized layouts, touch-friendly controls, and mobile-specific features like the floating action button and swipeable calendar views.

---

## Billing & Pricing

### How much does Therativities cost?
Therativities uses a pay-as-you-go model with a small per-session platform fee. There are no monthly subscriptions or commitments.

### Are there any hidden fees?
No. You pay the per-session platform fee plus standard Stripe processing fees (2.9% + $0.30 for cards) when collecting online payments. Manual payments (cash, check, Zelle, Venmo) have no processing fees.

### Can I pass processing fees to parents?
Yes. In your billing settings, you can choose to absorb Stripe fees yourself or pass them to the parent. This can be set globally or per client.

### What payment methods can I accept?
Through Stripe: credit and debit cards, ACH bank transfers. You can also record manual payments for cash, check, Zelle, Venmo, or other methods.

### How do payouts work?
Stripe handles payouts directly to your bank account. The default schedule is typically 2 business days for US accounts. You can manage your payout schedule in your Stripe Dashboard.

### Can I generate super bills for insurance reimbursement?
Yes. Select paid sessions in the billing tab and click **Generate Super Bills**. The PDF includes your NPI, TIN, practice address, diagnosis codes, and session details. Your business information must be configured in Settings first.

---

## Sessions & Scheduling

### How do I set up recurring sessions?
When booking a session, choose a recurrence pattern (Weekly, Biweekly, Twice Weekly, Three Times Weekly, or Custom). A visual calendar appears where you can click to select time slots. The system checks for conflicts automatically.

### What happens if there's a scheduling conflict?
Therativities will warn you about conflicts (overlapping sessions, outside availability, etc.) but still allows you to schedule if you choose. Click **Schedule Anyway** to proceed.

### Can parents cancel sessions?
Parents can submit cancellation requests, but they cannot cancel directly. You receive a notification and can approve or deny the request. You can also disable cancellation requests entirely in your scheduling settings.

---

## Documentation

### How does AI note generation work?
After completing a session's activities and/or writing draft notes, click **Generate SOAP** or **Generate Summary**. The AI analyzes your activities, notes, and session details to produce clinically appropriate documentation. You can edit everything before saving.

### Can I use voice input for notes?
Yes. Click the microphone button in the Draft Notes editor to dictate notes using speech-to-text (powered by Deepgram). This works on web browsers.

### Are AI-generated notes accurate?
The AI produces high-quality clinical documentation, but you should always review and edit the output. The AI considers your completed activities, effectiveness ratings, draft notes, and session context. It improves over time as you rate activities and provide more detailed input.

---

## Parent Portal

### How do parents access the portal?
Parents don't sign up on their own. You send an invitation from the client's **Guardian Info** tab. The parent receives an email with a link to create their account and connect to their child's record.

### What can parents see?
Parents can view session schedules, session status, shared documents, and billing/payment history. They cannot see clinical notes, treatment goals, evaluation details, or other therapist-only information.

### Can parents make payments?
Yes. Parents can add credit/debit cards to their account and payments are processed automatically based on your billing settings. They can also view their payment history.

---

## Data & Privacy

### Is my data secure?
Yes. All data is encrypted in transit (TLS/SSL) and at rest. We use Auth0 for authentication (SOC 2 Type II certified) and Convex for our database (enterprise-grade security with automatic backups). Payments are processed through Stripe (PCI DSS Level 1).

### Is Therativities HIPAA compliant?
Therativities is designed for HIPAA compliance with encryption, role-based access controls, and secure infrastructure. We are actively working toward full formal compliance including BAA execution. See our [HIPAA Compliance page](https://app.therativities.com/hipaa-compliance) for current status.

### Do you sell my data?
No. We never sell your data, share it for third-party advertising, or use it to train AI models. See our [Privacy Policy](https://app.therativities.com/privacy-policy) for complete details.

### Who can see my client's information?
Only users you explicitly grant access to. Therapists see clients within their active entity. Parents see only their own children. Team members see what their access level allows. No one at Therativities accesses your client data unless required for technical support with your permission.

---

## Support

### How do I get help?
Email us at [support@therativities.com](mailto:support@therativities.com). We typically respond within one business day.

### How do I report a bug?
Email [support@therativities.com](mailto:support@therativities.com) with a description of what happened, what you expected, and any screenshots if possible.

### How do I request a feature?
Submit a feature request directly in the app at [Feature Requests](https://app.therativities.com/app/feature-requests). We review every request and use them to prioritize our roadmap.
