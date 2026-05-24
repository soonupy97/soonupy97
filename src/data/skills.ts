export type SkillIcon = {
  name: string
  slug: string
  /** Override for icons not on simpleicons.org (e.g. Slack — removed for trademark) */
  url?: string
}

export type SkillGroup = {
  title: string
  items: SkillIcon[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design',
    items: [
      {
        name: 'Figma',
        slug: 'figma',
        url: 'https://api.iconify.design/logos:figma.svg',
      },
      {
        name: 'Photoshop',
        slug: 'adobephotoshop',
        url: 'https://api.iconify.design/logos:adobe-photoshop.svg',
      },
      {
        name: 'Illustrator',
        slug: 'adobeillustrator',
        url: 'https://api.iconify.design/logos:adobe-illustrator.svg',
      },
    ],
  },
  {
    title: 'Development',
    items: [
      {
        name: 'HTML',
        slug: 'html5',
        url: 'https://api.iconify.design/logos:html-5.svg',
      },
      {
        name: 'CSS',
        slug: 'css3',
        url: 'https://api.iconify.design/logos:css-3.svg',
      },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Sass', slug: 'sass' },
      { name: 'React', slug: 'react' },
      {
        name: 'Vite',
        slug: 'vite',
        url: 'https://api.iconify.design/logos:vitejs.svg',
      },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      {
        name: 'GitLab',
        slug: 'gitlab',
        url: 'https://api.iconify.design/logos:gitlab-icon.svg',
      },
      { name: 'Sourcetree', slug: 'sourcetree' },
    ],
  },
  {
    title: 'AI',
    items: [
      {
        name: 'Claude',
        slug: 'claude',
        url: 'https://api.iconify.design/logos:claude-icon.svg',
      },
      {
        name: 'Cursor',
        slug: 'cursor',
        url: 'https://www.cursor.com/apple-touch-icon.png',
      },
      {
        name: 'ChatGPT',
        slug: 'openai',
        url: 'https://api.iconify.design/logos:openai-icon.svg',
      },
      {
        name: 'Gemini',
        slug: 'googlegemini',
        url: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
      },
    ],
  },
  {
    title: 'Collaboration',
    items: [
      {
        name: 'Slack',
        slug: 'slack',
        url: 'https://api.iconify.design/logos:slack-icon.svg',
      },
      { name: 'Jira', slug: 'jira' },
      { name: 'Notion', slug: 'notion' },
      { name: 'Confluence', slug: 'confluence' },
    ],
  },
]
