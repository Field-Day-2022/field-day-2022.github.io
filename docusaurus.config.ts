import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Field Day',
  tagline: 'Wildlife Data Collection & Management Tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://field-day-2022.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Field-Day-2022', // Usually your GitHub org/user name.
  projectName: 'field-day-2022.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/Field-Day-2022/field-day-2022.github.io/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Field-Day-2022/field-day-2022.github.io/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig: {
    image: 'img/field-day-social-card.jpg',
    navbar: {
      title: 'Field Day',
      logo: {
        alt: 'Field Day Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Use the correct sidebar ID
          position: 'left',
          label: 'Docs',
        },
        {to: '/about', label: 'About', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/publications', label: 'Publications', position: 'left'},
        {
          href: 'https://github.com/Field-Day-2022/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/Field-Day-2022',
            },
            {
              label: 'Desktop Data Manager',
              href: 'https://github.com/Field-Day-2022/desktop-data-manager',
            },
            {
              label: 'Mobile Data Collector',
              href: 'https://github.com/Field-Day-2022/mobile-collection-tool',
            },
            {
              label: 'Documentation Repository',
              href: 'https://github.com/Field-Day-2022/field-day-2022.github.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Fulton Schools of Engineering at ASU',
              href: 'https://engineering.asu.edu/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Field Day. All rights reserved. Made with ❤️ by ASU students, faculty, and volunteers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;