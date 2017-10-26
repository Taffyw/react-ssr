import ActiveLink from './ActiveLink'

export default () => (
  <div className='top'>
    <div className="topbar clearfix">
      <div className="wid">
        <div className="left">您好，欢迎来到迈豪商贸！</div>
        <div className="right">
          <img src="http://13154611.s61i.faiusr.com/4/AD0Is-KiBhAEGAAgw5qpxgUo9s_1hAQwFjgS.png" alt=""/>
          <span>400-0000-000</span>
        </div>
      </div>
    </div>
    <div className="wid">
      <ActiveLink href='/'>首页</ActiveLink>
      <ActiveLink href='/about'>关于我们</ActiveLink>
      <ActiveLink href='/history'>企业文化</ActiveLink>
      <ActiveLink href='/news'>新闻动态</ActiveLink>
      <ActiveLink href='/concat'>联系我们</ActiveLink>
    </div>

    <style jsx>{
      `
      .top{
        height:126px
      }
      `
    }</style>
  </div>
)