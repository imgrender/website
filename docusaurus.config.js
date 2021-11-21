const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'API 优先的图片动态渲染服务 | Imgrender',
  tagline: 'imgrender 是 API 优先的图片渲染服务，三分钟即可接入，动态、实时生成海报或分享图。',
  url: 'https://www.imgrender.cn',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/favicon.ico',
  organizationName: 'imgrender', // Usually your GitHub org/user name.
  projectName: 'imgrender', // Usually your repo name.

  scripts: [
    {
      src: "https://code.tidio.co/skglcmkziwcr08qwhvaxpdu5zbqtn9ji.js",
      async: true
    }
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/imgrender/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/imgrender/website/blog/',
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
      metadatas: [
        {name: 'keywords', content: 'imgrender,图片生成,海报,动态图片'}
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'API 优先的图片动态渲染服务 | Imgrender',
          src: 'favicon/logo_banner.svg',
          srcDark: 'favicon/logo_banner_dark.svg'
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始使用',
                to: 'docs/getting-started',
              },
              {
                label: '蓝图',
                to: 'docs/blueprint'
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog'
              },
              {
                  label: '作者 Blog',
                  href: 'https://www.alicode.pro'
              },                
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} imgrender. <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer nofollow">蜀ICP备15003223号-5</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
