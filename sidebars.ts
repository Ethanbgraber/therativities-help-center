import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/welcome',
        'getting-started/creating-your-account',
        'getting-started/setting-up-your-practice',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/dashboard',
        'features/client-management',
        'features/scheduling',
        'features/documentation',
        'features/billing-payments',
        'features/parent-portal',
        'features/ai-tools',
        'features/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Billing',
      items: [
        'billing/how-pricing-works',
        'billing/payment-processing',
        'billing/invoices-receipts',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        'account/profile-settings',
        'account/team-management',
        'account/security',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/common-questions',
      ],
    },
  ],
};

export default sidebars;
