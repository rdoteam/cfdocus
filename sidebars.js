module.exports = {
  docs: [
    {
      type: 'category',
      label: 'DevOps Secret Manager',
      items: [
        'DevOps Secret Manager/Explanation/about',
        'DevOps Secret Manager/Explanation/about-profiles',
        'DevOps Secret Manager/Explanation/cicd_about',
        'DevOps Secret Manager/Explanation/dash-about',
        'DevOps Secret Manager/Explanation/dyn_pro_about',
        'DevOps Secret Manager/Explanation/encription_about',
        'DevOps Secret Manager/Explanation/plugins_about',
        'DevOps Secret Manager/Explanation/secrets_about',
        {
          type: 'category',
          label: 'How to Guides',
          items: [
            'DevOps Secret Manager/How to guide/how-to-app',
            'DevOps Secret Manager/How to guide/Authenticators',
            'DevOps Secret Manager/How to guide/how-to-manage'
          ]
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            'DevOps Secret Manager/Reference/ref-applications',
            'DevOps Secret Manager/Reference/ref-app-by-auth',
            'DevOps Secret Manager/Reference/bulk-ref'
          ]
        },
        'DevOps Secret Manager/about-dsm'
      ]
    },
    {
      type: 'category',
      label: 'Multi-Tenant',
      items: [
        'Multi-Tenant/about-multitenant',
        'Multi-Tenant/howto-multitenant',
        'Multi-Tenant/ref-multitenant'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        {
          type: 'category',
          label: 'Explanation',
          items: [
            'Settings/Explanation/EN_EXP_ITSM',
            'Settings/Explanation/SAML',
            'Settings/Explanation/aboutiga',
            'Settings/Explanation/intro-ad',
            'Settings/Explanation/mfa-intro'
          ]
        },
        {
          type: 'category',
          label: 'How to Guides',
          items: [
            'Settings/How to guides/EN_HOW_HistoricoExportacao',
            'Settings/How to guides/EN_HOW_Logo',
            'Settings/How to guides/EN_HOW_MFA_Provedores'
          ]
        }
      ]
    },
    'changelog',
    'intro',
    'upgrade_notes',
    'use-cases'
  ]
};