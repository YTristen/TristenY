import * as React from 'react'
import Giscus from '@giscus/react'

const id = 'inject-comments'

// 获取 localStorage 中 theme 的值
function getSavedTheme() {
  return window.localStorage.getItem('theme')
}

const Comments = () => {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState('')

  React.useEffect(() => {
    const theme = getSavedTheme()
    setTheme(theme.includes('dark') ? 'dark' : 'light')
    window.addEventListener("theme-change", (e) => {
      // @ts-ignore
      setTheme(e.detail ? "dark" : "light");
    });
    return () => {
      window.removeEventListener("theme-change", (e) => {});
    };
  }, [])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id={id} className="w-full mt-8">
      {mounted ? (
        <Giscus
          id={id}
          repo="YTristen/TristenY"
          repoId="R_kgDOMb4b1w"
          category="Announcements"
          categoryId="DIC_kwDOMb4b184ChOym"
          mapping="title"
          rdata-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark"
          data-lang="zh-CN"
          data-loading="lazy"
          theme={theme}
        />
      ) : null}
    </div>
  )
}

export default Comments