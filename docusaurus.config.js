// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DAO DAO',
  tagline: 'DAOs for everyone',
  url: 'https://docs.daodao.zone',
  organizationName: 'DA0-DA0', // Github org name
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DA0-DA0', // Usually your GitHub org/user name.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@500;600,'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // meta image https://docusaurus.io/docs/api/themes/configuration#meta-image
      image: 'img/banner.png',
      // announcement bar
      // https://docusaurus.io/docs/api/themes/configuration#announcement-bar
      announcementBar: {
        id: 'try_it_out',
        content:
        'Try out DAO DAO! <a target="_blank" rel="noopener noreferrer" href="https://daodao.zone">Launch a DAO on Juno</a>.',
        // backgroundColor: '#000',
        // textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        title: 'DAO DAO',
        logo: {
          alt: 'DAO DAO Logo',
          src: 'img/daodao-light.svg',
          srcDark: 'img/daodao-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/welcome-to-dao-dao',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'quickstart/create-a-dao',
            position: 'left',
            label: 'Quickstart',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://daodao.zone/',
            label: 'Launch the app!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/DA0_DA0',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DAO DAO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
