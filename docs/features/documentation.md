---
sidebar_position: 4
title: Documentation & Notes
---

# Documentation & Notes

Therativities makes session documentation fast with three note formats, AI-assisted generation, voice input, and photo capture.

## Session management page

When you open a session, you'll see a split-screen layout:
- **Left panel** — Activities (planned or AI-generated)
- **Right panel** — Notes

On mobile, these appear as tabs you can switch between.

## Note formats

Three tabs let you switch between note formats:

### Draft Notes

Your private working notes. These are not shared with parents.

- Free-form rich text editor
- **Voice input** — Click the microphone button to dictate notes using speech-to-text (powered by Deepgram)
- **Photo capture** — Click the camera button to take a photo during the session (saved to the session record)
- **File upload** — Attach files using the paperclip button
- **Quick templates** — Insert common phrases with one click:
  - "Excellent progress on goal"
  - "Needs more practice with"
  - "Modified activity due to"
  - "Client showed improvement in"
  - "Recommended home practice"
  - "Parent/caregiver involvement"
- Auto-saves as you type (1-second debounce)

### SOAP Notes

Structured clinical notes with four fields:
- **S — Subjective** — Client's reported experience, feelings, concerns
- **O — Objective** — Observable behaviors, measurements, factual observations
- **A — Assessment** — Clinical interpretation, progress analysis, challenges identified
- **P — Plan** — Future treatment plans, home program recommendations

Click **Generate SOAP** to have AI fill in all four fields based on your draft notes and completed activities.

### Parent Summary

A parent-friendly summary of the session that's included in billing communications.

Click **Generate Summary** to create this automatically. The AI uses your configured preferences for:
- **Length** — Short (1–3 sentences), Medium (4–6 sentences), or Detailed (8–12 sentences)
- **Tone** — Casual (conversational) or Professional (clear and warm)

You can configure these preferences in Settings.

## AI-assisted note generation

### How it works

When you click **Generate SOAP** or **Generate Summary**, the AI uses:
- Your completed activities (including time spent, effectiveness ratings, and notes)
- Your draft notes
- Session info (client name, date, duration)

The AI generates clinically appropriate documentation. You always have full control to review and edit before saving.

### Session photos

Photos captured during the session appear in both the Draft Notes and Parent Summary sections. Photos included in the Parent Summary are shared with parents.

## Historical notes

Click the **history icon** (clock) to view notes from the last 5 sessions with this client. You can:
- Review past documentation for reference
- Click **Apply as Template** to copy a previous session's notes as a starting point
- Load more sessions with the **Load More** button

## Completing a session

When you're done, click **Complete Session** at the bottom of the page. A checklist appears where you can choose which documents to generate:

- **Parent Summary** (checked by default)
- **SOAP Notes** (optional)
- **Progress Note** (optional)

Each section can be expanded to preview the content. Status indicators show whether generation is in progress, ready, or failed. Click **Complete Session** to finalize everything.
