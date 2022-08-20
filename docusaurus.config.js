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
    // stylesheets: [
    //   'https://fonts.googleapis.com/css2?family=Inter:wght@500;600,'
    // ],
    presets: [
	[
	    'classic',
	    /** @type {import('@docusaurus/preset-classic').Options} */
	    ({
		docs: {
		    sidebarPath: require.resolve('./sidebars.js'),
		    editUrl: 'https://github.com/DA0-DA0/docs/tree/main/',
		},
		// blog: {
		//   showReadingTime: true,
		//   // Please change this to your repo.
		//   editUrl:
		//     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
		// },
		theme: {
		    customCss: require.resolve('./src/css/custom.css'),
		},
	    }),
	],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	colorMode: {
	    defaultMode: 'dark',
	    disableSwitch: false,
	    respectPrefersColorScheme: true,
	},
	// meta image https://docusaurus.io/docs/api/themes/configuration#meta-image
	image: 'img/banner.jpeg',
	// announcement bar
	// https://docusaurus.io/docs/api/themes/configuration#announcement-bar
	navbar: {
            title: '',
	    hideOnScroll: true,
            logo: {
		alt: 'DAO DAO Logo',
		src: 'img/daodao-dark.png',
		srcDark: 'img/daodao-light.png',
            },
            items: [
		{
		    type: 'doc',
		    docId: 'quickstart/create-a-dao',
		    position: 'left',
		    label: 'Quickstart',
		},
            ],
	},
	prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
	},
    }),
};



module.exports = config;
