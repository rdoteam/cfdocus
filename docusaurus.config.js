const path = require('path');

module.exports = {
  title: 'Bem vindo ao senhasegura Help Center',
  tagline: 'Documentação oficial das soluções senhasegura.',
  url: 'https://gui-testes-hiab.seguradocus.pages.dev/', // Altere para a URL oficial
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'senhasegura',
  projectName: 'senhaseguradocs',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'pt-BR': {
        label: 'Português',
        path: 'pt-BR',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
    },
  },

  themeConfig: {
    navbar: {
      title: 'senhasegura',
      logo: {
        alt: 'senhasegura Logo',
        src: 'img/senhasegura.png',
      },
      items: [
        { to: 'docs/intro', label: 'Documentação', position: 'left' },
        { to: '/api/', label: 'senhasegura API', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright:
        `Copyright © ${new Date().getFullYear()} senhasegura. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Integra o arquivo sidebars.js
          editUrl:
            'https://github.com/senhasegura/senhaseguradocs/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: '3.33',
              path: '3.33',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: path.resolve(__dirname, 'api', 'index.yaml'),
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-XXXXXXX-X', // Altere para o seu tracking ID
      },
    ],
    // Plugin de configuração do Webpack
    function webpackConfigPlugin() {
      return {
        name: 'custom-webpack-plugin',
        configureWebpack() {
          return {
            // Desativa o cache do Webpack
            cache: false,
            // Filtro para suprimir avisos relacionados ao VFileMessage
            stats: {
              warningsFilter: [
                /No serializer registered for VFileMessage/,
              ],
            },
          };
        },
      };
    },
  ],
};
