import Link from 'next/link'
const NavMenu = () => {
  return (<>
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/major' as='/commited'>
        <a>Commited</a>
      </Link>
      <span>(Mobile)</span>
      <Link href='/minor' as='/staging'>
        <a>Staging</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
    <style jsx>{`
        a{
            margin:5px;
        }
        `
    }</style>
      </>)
}

export default NavMenu
