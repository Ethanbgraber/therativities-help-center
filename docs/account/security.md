---
sidebar_position: 3
title: Security
---

# Security

Therativities is designed with security and privacy as core priorities. Here's how your data is protected.

## Authentication

Your account is secured through **Auth0**, an industry-leading authentication provider used by thousands of companies. You can sign in with:

- **Google** — OAuth single sign-on
- **Email and password** — With email verification

## Encryption

- **In transit** — All data is encrypted using TLS/SSL. Every connection between your browser and our servers is secured.
- **At rest** — Data stored in our database is encrypted at rest.

## Role-based access control

Therativities enforces strict access controls:

- **Therapists** can only see clients within their active entity
- **Parents** can only see their own children's information
- **Team members** see only what their access level allows (No Access, View Only, or Can Edit)
- **Admins** can manage entity settings and team membership

## Security PIN

You can set a PIN in **Settings > Privacy & Security** to add an extra layer of protection when accessing sensitive information within the app.

## Infrastructure

- **Database**: Convex — a modern backend platform with enterprise-grade security, automatic backups, and encryption
- **Authentication**: Auth0 — SOC 2 Type II certified, with built-in brute-force protection and anomaly detection
- **Payments**: Stripe — PCI DSS Level 1 certified (the highest level of payment security certification)

## HIPAA

Therativities is designed for HIPAA compliance with encryption, role-based access controls, and secure infrastructure. We are actively working toward full formal compliance, including executing Business Associate Agreements (BAAs) with our service providers.

For full details, see our [HIPAA Compliance page](https://app.therativities.com/hipaa-compliance).

## Reporting security issues

If you discover a security vulnerability, please email us immediately at [security@therativities.com](mailto:security@therativities.com). We take all reports seriously and will respond promptly.
