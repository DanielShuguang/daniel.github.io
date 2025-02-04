import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/daniel.github.io/',
  description: '胡曙光的个人页',
  lang: 'zh-CN',
  title: 'Daniel Hu',
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: '© 2025 Daniel Hu',
      copyright: 'Licensed under the MIT License.'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '技能', link: '/skills' },
      { text: '教育', link: '/education' },
      { text: '博客', link: '/blogs' },
      { text: '日常', link: '/life' },
      { text: '联系', link: '/contact' }
    ],

    sidebar: {
      '/blogs/': [
        {
          text: '博客',
          base: '/blogs',
          items: [
            { text: 'vite2.0 配置清单', link: '/2021-06-10' },
            { text: 'Vue3.0 setup 语法糖尝试', link: '/2021-06-29' },
            { text: 'unplugin-vue-components 在 vite 中的使用和配置', link: '/2022-02-21' },
            { text: '算法：有序数组生成二叉搜索树', link: '/2022-02-27' },
            { text: 'Language Server Protocol 的基础实现', link: '/2024-03-25' }
          ]
        }
      ],
      '/life/': [{ text: '日常', base: '/life', link: '/', collapsed: true, items: [] }]
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
