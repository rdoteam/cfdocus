const config = {
  title: 'senhasegura',
  tagline: 'Docs',
  url: 'https://senhasegura.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'senhasegura',
  projectName: 'senhasegura-docs',

  i18n: {
    defaultLocale: 'en', // Define inglês como padrão
    locales: ['en', 'pt'], // Adiciona Português (pt) como uma opção
    localeConfigs: {
      pt: {
        label: 'Português',
      },
    },
  },

  themeConfig: {
    navbar: {
      title: 'senhasegura',
      logo: {
        alt: 'senhasegura',
        src: 'img/senhasegura.png',
      },
      items: [
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/seu-org/seu-projeto/edit/main/website/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.33',
              path: 'current',
            },
            '3.32': {
              label: '3.32',
              path: 'version-3.32',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;