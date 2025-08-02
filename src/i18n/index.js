import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      welcome: 'Association of Bangladesh-China Alumni',
      about: 'About Us',
              events: 'Events',
      eventsDescription: 'Stay updated with our latest events, conferences, and collaborative initiatives between Bangladesh and China.',
      programsDescription: 'MalishaEdu, in collaboration with the Association of Bangladesh-China Alumni, successfully organized The Forum for China-Bangladesh Higher Education Exchanges Program on 11th July, 2025.',
      gallery: 'Gallery',
      videoNotSupported: 'Your browser does not support the video tag.',
      videoComingSoon: 'Video coming soon...',
      phone: 'Phone',
      email: 'Email',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      scanForInfo: 'Scan for more information',
      scanForWhatsApp: 'Scan for WhatsApp',
      contactDescription: 'Get in touch with us for any inquiries about our programs and services.',
      scanToConnect: 'Scan to Connect',
      address: 'Address',
      addressText: 'Guangzhou, China',
      contactInfo: 'Contact Info',
      members: 'Members',
        contact: 'Contact',
      join: 'Join Us',
      news: 'News',
      gallery: 'Gallery',
      login: 'Login',
      register: 'Register',
      search: 'Search',
      home: 'Home',
      programs: 'Programs',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      footer: {
        copyright: '© 2024 BD-CN Alumni Association. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    menu: {
      home: 'Home',
      news: 'News',
      programs: 'Programs',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      members: 'Members'
    },
    programs: {
      title: 'Programs',
      description: {
        title: 'Distinguished Delegates'
      },
      videoNotSupported: 'Your browser does not support the video tag.',
      gallery: {
        title: 'Gallery'
      }
    },
    members: {
      title: 'Members',
      subtitle: 'Some of our valued members'
    }
  },
  zh: {
    message: {
      welcome: '欢迎来到中孟校友会',
      about: '关于我们',
              events: '活动',
      eventsDescription: '了解我们最新的活动、会议和孟中合作倡议。',
      programsDescription: '探索我们的教育项目和孟中合作倡议。',
      gallery: '相册',
      videoNotSupported: '您的浏览器不支持视频标签。',
      videoComingSoon: '视频即将推出...',
      phone: '电话',
      email: '邮箱',
      quickLinks: '快速链接',
      followUs: '关注我们',
      scanForInfo: '扫描获取更多信息',
      scanForWhatsApp: '扫描获取WhatsApp',
      contactDescription: '如有关于我们项目和服务的任何疑问，请与我们联系。',
      scanToConnect: '扫描连接',
      address: '地址',
      addressText: '达卡，孟加拉国',
      contactInfo: '联系信息',
      members: '成员',
        contact: '联系我们',
      join: '加入我们',
      news: '新闻',
      gallery: '相册',
      login: '登录',
      register: '注册',
      search: '搜索',
      home: '首页',
      programs: '项目',
      aboutUs: '关于我们',
      contactUs: '联系我们',
      footer: {
        copyright: '© 2024 中孟校友会。保留所有权利。',
        privacy: '隐私政策',
        terms: '服务条款'
      }
    },
    menu: {
      home: '主页',
      news: '新闻',
      programs: '项目',
      aboutUs: '关于我们',
      contactUs: '联系我们',
      members: '成员'
    },
    programs: {
      title: '项目',
      description: {
        title: '杰出代表'
      },
      videoNotSupported: '您的浏览器不支持视频标签。',
      gallery: {
        title: '相册'
      }
    },
    members: {
      title: '成员',
      subtitle: '我们的一些重要成员'
    }
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
}) 