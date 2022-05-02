import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ac72dc1cedd64dd1b638d84eda55a743',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'lizhimiao的博客',
  domain: 'lizhimiao.com',
  author: 'zhimiao li',

  // open graph metadata (optional)
  description: '笔记、博客和其他记录',

  // social usernames (optional)
  twitter: '_lizhimiao',
  github: 'zhimiaoli',
  linkedin: 'lizhimiao',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy

  // Utteranc.es comments via GitHub issue comments (optional)
  //utterancesGitHubRepo: "zhimiaoli/lizhimiao-dot-com-comment",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides:   {
    '/notion-as-blog': '2ac48272b7644cb0b0f8d19a104ddf05',
    '/refers': '68892ddbd87341a5940b08fe9f3d079f',
    '/digital-noting-tools-i-use': '7a26482a6a774a8dbd4872d9023b3957',
    '/about': '0da3484664b44dcaa555509e3eb927f1',
    '/archive': '299f3286fd3643ddbf6f4489b4813e81'
},

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
