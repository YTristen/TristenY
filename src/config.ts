import type { iconPaths } from "./utils/IconPaths";

export const Navigation  = [
  { name: '首页', href: '/' },
  { name: '文章', href: '/blog' },
  { name: '研究', href: '/researches' },
  { name: '关于我', href: '/about' },
]

export const IconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  { label: "GitHub", href: "https://github.com/ytristen", icon: "github-logo" },
  { label: "Email", href: "mailto:tristenying@163.com", icon: "email" },
];