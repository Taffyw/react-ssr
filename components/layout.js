import Link from 'next/link'
import Head from 'next/head'
import TopMenu from './Header'
import stylesheet from 'styles/style.scss'
export default ({ children, title = '默认标题' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{__html:stylesheet}}/>
      {/*<link rel='stylesheet' href='/static/style.css' />*/}
    </Head>
    <TopMenu/>
    <div className="main-content">
      { children }
    </div>
    {/*<footer>*/}
      {/*{'我是Footer'}*/}
    {/*</footer>*/}
  </div>
)
