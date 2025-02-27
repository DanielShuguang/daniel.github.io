import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { withSidebar } from 'vitepress-sidebar'
import { VitePressSidebarOptions } from 'vitepress-sidebar/types'

const fileAndStyles: Record<string, string> = {}

const vitepressOptions: UserConfig<DefaultTheme.Config> = {
  base: '/daniel.github.io/',
  description: '胡曙光的个人页',
  lang: 'zh-CN',
  title: 'Daniel Hu',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'javascript,js,typescript,ts,vue,react,vite,frontend,web,go,rust'
      }
    ]
  ],
  vite: {
    plugins: [Unocss()],
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    }
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html) return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: `© ${new Date().getFullYear()} Daniel Hu`,
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
