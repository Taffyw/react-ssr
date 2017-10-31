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
    <footer>
      <div className="wid">
        <div className="tel"><img src="http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAg3PWoxgUo0Zz0vgQwJjgg.png" alt=""/>400-400-0000</div>
        <div className="copyright">
          ©2017 迈豪商贸 版权所有
        </div>
      </div>
    </footer>
  </div>
)
