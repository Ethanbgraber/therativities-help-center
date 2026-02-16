---
sidebar_position: 3
title: Scheduling
---

# Scheduling

Therativities includes a full calendar and scheduling system with support for recurring sessions, conflict detection, and cancellation management.

## Calendar views

Your calendar supports five views:

| View | Description |
|------|-------------|
| Day | Hour-by-hour view of a single day |
| 3-Day | Three consecutive days side by side |
| Work Week | Monday through Friday |
| Week | Full Sunday through Saturday |
| Month | Monthly overview |

On mobile, the view switcher appears as a dropdown. On desktop, you can switch views from the toolbar.

Navigation controls:
- **Previous / Next** — Move forward or backward
- **Today** — Jump to the current date

## Booking a session

Click **New Session** in the calendar toolbar (or click an empty time slot) to book a session. The booking flow has three steps:

### Step 1: Scheduling details

- **Client** — Select the client (pre-filled if opened from a client's profile)
- **Date** — Pick the session date
- **Time** — Pick the start time
- **Duration** — Choose from 15, 30, 45, or 60 minutes
- **Recurrence** — Set up repeating sessions (see below)
- **Institution** — Optionally select a school or facility
- **Room** — Optionally select a room (filtered by institution)
- **Telehealth** — Check this box if the session is virtual

If there are scheduling conflicts (overlapping sessions, outside availability, etc.), a warning will appear. You can still schedule by clicking **Schedule Anyway**.

### Step 2: Billing

- **Service** — Select which service to bill (from your Session Services or Evaluation Services)
- **Custom Rate** — Optionally override the default rate
- **Discount** — Apply a percentage or fixed-amount discount with an optional reason
- **Fee Handling** — Choose whether you absorb Stripe fees or pass them to the client
- **Billing Frequency** — Immediate, Weekly, Bi-monthly, or Monthly

### Step 3: Confirmation

Review a summary of the session details and billing. Click **Schedule Session** to confirm.

## Recurring sessions

When booking a session, you can set it to repeat:

| Pattern | Description |
|---------|-------------|
| None | One-time session |
| Weekly | Same day and time every week |
| Biweekly | Every two weeks |
| Twice Weekly | Two sessions per week |
| Three Times Weekly | Three sessions per week |
| Custom | Choose specific days and interval |

For weekly patterns, a **visual calendar** (Monday–Friday, 5-day view) appears where you can click time slots to propose sessions. Available slots are shown in green, conflicts in red, and your selections in purple.

You can navigate between weeks and see buffer time information. Click **Confirm Weekly Schedule** when you're happy with the selections.

## Cancellations

### Therapist cancellation

Therapists can cancel sessions directly from the calendar or session page.

You can configure cancellation rules in **Settings > Scheduling Rules**:
- **Lock After Hours** — Prevent cancellations within X hours of the session (e.g., 24 hours)
- **Lock Before Time** — Prevent cancellations before a specific time on the session day (e.g., 8:00 AM)

### Parent cancellation requests

Parents cannot cancel sessions directly. Instead, they submit a **cancellation request**:

1. Parent clicks **Request Cancellation** on an upcoming session
2. Parent optionally provides a reason
3. The request is sent to the therapist
4. Therapist receives a notification and can **Approve** or **Deny** the request
5. If approved, the session is marked as cancelled

You can configure whether parents are allowed to request cancellations in your scheduling settings.
