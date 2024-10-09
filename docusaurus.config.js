// docusaurus.config.js

module.exports = {
  title: 'senhasegura',
  tagline: '3.32 testing',
  url: 'https://gui-testes-hiab.seguradocus.pages.dev/', // Altere para a URL oficial
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'senhasegura', // Nome da sua organização
  projectName: 'senhaseguradocs', // Nome do seu repositório

  i18n: {
    defaultLocale: 'en', // Locale padrão
    locales: ['en', 'pt-BR'], // Locales disponíveis
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
        { to: 'docs/intro', label: 'Documentation', position: 'left' },
        { to: 'api/', label: 'senhasegura API', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} senhasegura. Built with Docusaurus.`,
    },
  }, 

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsAuto.js'), // Configuração da sidebar automática
          editUrl: 'https://github.com/senhasegura/senhaseguradocs/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/senhasegura/senhaseguradocs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Verifique se esse caminho está correto
        },
      },
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Configuração para carregar arquivos OpenAPI
        specs: [
          {
            spec: 'api/index.yaml', // Caminho para o arquivo OpenAPI
            route: '/api/',
          },
        ],
        // Configuração de tema do Redoc
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
        trackingID: 'UA-XXXXXXX-X', // Substitua pelo seu Google Analytics ID
      },
    ],
  ],
};
