import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Therativities Help Center',
  tagline: 'Learn how to get the most out of Therativities',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://help.therativities.com',
  baseUrl: '/',

  organizationName: 'Ethanbgraber',
  projectName: 'therativities-help-center',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Ethanbgraber/therativities-help-center/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Therativities',
      logo: {
        alt: 'Therativities Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help Center',
        },
        {
          href: 'https://therativities.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://app.therativities.com',
          label: 'Open App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help Center',
          items: [
            { label: 'Getting Started', to: '/' },
            { label: 'Features', to: '/features/dashboard' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Terms of Service', href: 'https://app.therativities.com/terms-of-service' },
            { label: 'Privacy Policy', href: 'https://app.therativities.com/privacy-policy' },
            { label: 'HIPAA Compliance', href: 'https://app.therativities.com/hipaa-compliance' },
          ],
        },
        {
          title: 'Links',
          items: [
            { label: 'Website', href: 'https://therativities.com' },
            { label: 'Contact Support', href: 'mailto:support@therativities.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} FMV Holdings LLC. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
