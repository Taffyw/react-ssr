import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const className = router.pathname === href ? 'a-link active' : 'a-link'

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
      <style jsx>{`
      .a-link {
        display:inline-block;
        font-size:16px;
        margin:0 20px;
        line-height:40px;
        text-align:center;
        width:100px;
        height:40px;
        color:#333;
        &:hover,&.active {
          border-radius:20px;
          color:#fff;
          background-color: #1e50ae;
        }
      }
    `}</style>
    </a>
  )
}

export default withRouter(ActiveLink)
