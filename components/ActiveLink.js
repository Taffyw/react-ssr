import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className='a-link' href={href} onClick={handleClick} style={style}>
      {children}
      <style jsx>{`
      .a-link {
        background-color: #ddd;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
        &:hover {
          background-color: #000;
        }
      }
    `}</style>
    </a>
  )
}

export default withRouter(ActiveLink)
