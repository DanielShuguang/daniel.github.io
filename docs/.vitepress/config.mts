import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { withSidebar } from 'vitepress-sidebar'
import { VitePressSidebarOptions } from 'vitepress-sidebar/types'

const vitepressOptions: UserConfig<DefaultTheme.Config> = {
  base: '/daniel.github.io/',
  description: '胡曙光的个人页',
  lang: 'zh-CN',
  title: 'Daniel Hu',
  vite: {
    plugins: [Unocss()]
  },
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
      // { text: '日常', link: '/life' },
      { text: '联系', link: '/contact' }
    ]

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
}

const vitepressSidebarOptions: VitePressSidebarOptions[] = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'blogs',
    basePath: '/blogs/',
    resolvePath: '/blogs/',
    useTitleFromFileHeading: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'life',
    basePath: '/life/',
    resolvePath: '/life/',
    useTitleFromFileHeading: true
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitepressOptions, vitepressSidebarOptions))
