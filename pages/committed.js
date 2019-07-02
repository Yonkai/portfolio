import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'

const major = () => (
  <>
    <Head>
      <title>Commited - Page for Major Projects</title>
      <meta name='description' content='Page for major projects.' />
    </Head>
    {/* <div>major</div> */}
    <NavMenu />

    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
        }`}
    </style>
  </>
)

export default major
